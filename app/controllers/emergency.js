
if (OS_IOS || OS_MOBILEWEB) {
	
	function titanAlertClick(e) {
    	Titanium.Analytics.featureEvent('titanAlertClick');
    	Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
    		url: "http://www.uwosh.edu/home/titanalert/",
    		title: "Titan Alert"
    	}).getView());
    }
    
	function campusPoliceClick(e) {
    	Titanium.Analytics.featureEvent('callCampusPolice');
 	   Ti.Platform.openURL("telprompt:9204241212");
	}

	function riskManagementClick(e) {
 	   Titanium.Analytics.featureEvent('callRiskManagement');
 	   Ti.Platform.openURL("telprompt:9204241191");
	}

	function facilitiesClick(e) {
	    Titanium.Analytics.featureEvent('callFacilities');
	    Ti.Platform.openURL("telprompt:9204243466");
	}

	function safeWalkClick(e) {
	    Titanium.Analytics.featureEvent('callSafeWalk');
	    Ti.Platform.openURL("telprompt:9204241212");
	}

	function crisisHotlineClick(e) {
   	 Titanium.Analytics.featureEvent('callCrisisHotline');
  	  Ti.Platform.openURL("telprompt:9202337707");
	}
	
} else {
	
	function titanAlertClick(e) {
    	Titanium.Analytics.featureEvent('titanAlertClick');
    	Ti.Platform.openURL("http://www.uwosh.edu/home/titanalert/");
	}
	
	function campusPoliceAndroidClick(e) {
       Titanium.Analytics.featureEvent('callCampusPolice');
 	   var intent = Ti.Android.createIntent({
			action: Ti.Android.ACTION_DIAL,
			data: 'tel:9204241212'
		});
		Ti.Android.currentActivity.startActivity(intent);
	}

	function riskManagementAndroidClick(e) {
 	   Titanium.Analytics.featureEvent('callRiskManagement');
		var intent = Ti.Android.createIntent({
			action: Ti.Android.ACTION_DIAL,
			data: 'tel:9204241191'
		});
		Ti.Android.currentActivity.startActivity(intent);
	}

	function facilitiesAndroidClick(e) {
	    Titanium.Analytics.featureEvent('callFacilities');
	    var intent = Ti.Android.createIntent({
			action: Ti.Android.ACTION_DIAL,
			data: 'tel:9204243466'
		});
		Ti.Android.currentActivity.startActivity(intent);
	}

	function safeWalkAndroidClick(e) {
	    Titanium.Analytics.featureEvent('callSafeWalk');;
	    var intent = Ti.Android.createIntent({
			action: Ti.Android.ACTION_DIAL,
			data: 'tel:9204241212'
		});
		Ti.Android.currentActivity.startActivity(intent);
	}

	function crisisHotlineAndroidClick(e) {
   	 Titanium.Analytics.featureEvent('callCrisisHotline');
  	  var intent = Ti.Android.createIntent({
			action: Ti.Android.ACTION_DIAL,
			data: 'tel:9202337707'
		});
		Ti.Android.currentActivity.startActivity(intent);
	}
}
