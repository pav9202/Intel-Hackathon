package com.teamunknown.getup;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.*;
import android.util.FloatMath;
import android.util.Log;

public class StepService extends Service implements SensorEventListener {
	private final IBinder mBinder = new LocalBinder();
	private int stepCounter;
	private float mAccelCurrent;
	private float mAccelLast;
	private int state;
	public static final String DATE_FORMAT_NOW = "yyyy-MM-dd HH:mm:ss";
	
	private static int SHAKE_TOLERANCE= 5;
	
	@Override
	public IBinder onBind(Intent arg0) {
		return mBinder;
	}
	
	public int getStepCounter() {
		return stepCounter;
	}
	
	public void clearStepCounter() {
		state = 0;
		stepCounter = 0;
	}
	
	public void incrementStepCounter() {
		stepCounter++;
	}
	
	@Override
	public void onCreate() {
        // Display a notification about us starting.  We put an icon in the status bar.
		Log.d("Service", "Service CREATED");
		state = 0;
		stepCounter = 0;
		
        SensorManager mSensorManager = (SensorManager)getSystemService(Context.SENSOR_SERVICE);
        Sensor mAccelerometer = mSensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER);
        mSensorManager.registerListener(this, mAccelerometer, SensorManager.SENSOR_DELAY_NORMAL);
        
        mAccelCurrent = SensorManager.GRAVITY_EARTH;
        mAccelLast = SensorManager.GRAVITY_EARTH;
	}

	
	@Override
	public void onAccuracyChanged(Sensor arg0, int arg1) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onSensorChanged(SensorEvent event) {
    	if (event.sensor.getType() == Sensor.TYPE_ACCELEROMETER) {
    		float x = event.values[0];
    		float y = event.values[1];
    		float z = event.values[2];
    		mAccelLast = mAccelCurrent;
    		mAccelCurrent = FloatMath.sqrt(x*x + y*y + z*z);
    		if (Math.abs(mAccelCurrent - mAccelLast) >= SHAKE_TOLERANCE) {
    			if (state == 0) {
    				incrementStepCounter();
    				Calendar cal = Calendar.getInstance();
    				SimpleDateFormat sdf = new SimpleDateFormat(DATE_FORMAT_NOW);
    				String timestamp = sdf.format(cal.getTime());
    				String json = "{\"steps\":" + getStepCounter() + ",\"timestamp\":\"" + timestamp + "\"}";
    				String url = "http://index.vishnurajeevan.com:5984/hackathon_pedometer_steps";
    				
    				new PostStepTask().execute(url, json);
    				Log.d("Service accel log","STEP! " + getStepCounter());
    				state = 1;
    			}
    			else
    				state = 0;
    		}
    	}
		
	}

	@Override
	public void onDestroy() {
		
	}
	
	@Override
	public void onStart(Intent intent, int startid) {
		
	}
	
	/**
     * Class used for the client Binder.  Because we know this service always
     * runs in the same process as its clients, we don't need to deal with IPC.
     */	
	public class LocalBinder extends Binder {
		StepService getService() {
			return StepService.this;
		}
	}

}