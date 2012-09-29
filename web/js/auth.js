(function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "http://connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));
  
	var QueryString = function () {
	  // This function is anonymous, is executed immediately and 
	  // the return value is assigned to QueryString!
	  var query_string = {};
	  var query = window.location.search.substring(1);
	  var vars = query.split("&");
	  for (var i=0;i<vars.length;i++) {
	    var pair = vars[i].split("=");
	        // If first entry with this name
	    if (typeof query_string[pair[0]] === "undefined") {
	      query_string[pair[0]] = pair[1];
	        // If second entry with this name
	    } else if (typeof query_string[pair[0]] === "string") {
	      var arr = [ query_string[pair[0]], pair[1] ];
	      query_string[pair[0]] = arr;
	        // If third or later entry with this name
	    } else {
	      query_string[pair[0]].push(pair[1]);
	    }
	  } 
	    return query_string;
	} ();
	
	if (QueryString.id == null) { top.location.href = "login.html"; }
 
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '231907820270199', // App ID
      channelUrl : 'channel.html', // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });

	// listen for and handle auth.statusChange events
	 FB.Event.subscribe('auth.statusChange', function(response) {
     if (response.authResponse) {
       // user has auth'd your app and is logged into Facebook
		var me;
       FB.api('/me', function(me){
		 if (me['id'] == QueryString.id) {
		 	console.log('Auth ok.')
		 }
       }) 
     } else {
		
       // user has not auth'd your app, or is not logged into Facebook
		//top.location.href = "login.html";
     }
   });


};