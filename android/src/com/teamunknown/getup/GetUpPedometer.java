package com.teamunknown.getup;

import com.teamunknown.getup.StepService.LocalBinder;

import android.os.Bundle;
import android.os.IBinder;
import android.app.Activity;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.*;

public class GetUpPedometer extends Activity {
	private StepService mService;
	private boolean mBound = false;
	private TextView tv;
	private Button button;
	
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_get_up_pedometer);
        
        tv = (TextView)findViewById(R.id.textView2);
        tv.setText("LOL");
        
        button = (Button)findViewById(R.id.button1);
        button.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View arg0) {
				if (mBound)
					tv.setText(mService.getStepCounter());
				//mService.clearStepCounter();
			}
        });
    }
    
    
    @Override
    public void onStart() {
    	super.onStart();
    	// Bind to LocalService
        Intent intent = new Intent(this, StepService.class);
        bindService(intent, mConnection, Context.BIND_AUTO_CREATE);
    }
   
    @Override
    protected void onStop() {
    	super.onStop();
    	if (mBound) {
    		unbindService(mConnection);
    		mBound = false;
    	}
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_get_up_pedometer, menu);
        return true;
    }
	
	private ServiceConnection mConnection = new ServiceConnection() {
        @Override
        public void onServiceConnected(ComponentName className,
                IBinder service) {
            // We've bound to StepService, cast the IBinder and get StepService instance
            LocalBinder binder = (LocalBinder) service;
            mService = binder.getService();
            mBound = true;
        }

        @Override
        public void onServiceDisconnected(ComponentName arg0) {
            mBound = false;
        }
    };
}