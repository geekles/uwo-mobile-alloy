function requestSafeWalkClick(e) {
        Titanium.Analytics.featureEvent('requestSafewalk');
        var emailDialog = Ti.UI.createEmailDialog();
        emailDialog.subject = "Safewalk request from " + $.firstName.value + " " + $.lastName.value;
        emailDialog.toRecipients = ['safewalk@uwosh.edu'];
        emailDialog.messageBody = "FN: " + $.firstName.value + "\n"
            + "LN: " + $.lastName.value + "\n\n"
            + "EMAIL: " + $.emailAddress.value + "\n\n"
            + "SL: " + $.startingLocation.value + "\n\n"
            + "EL: " + $.endingLocation.value + "\n\n"
            + "P: " + $.phoneNumber.value + "\n\n"
            + "ID: " + $.identifier.value;
        if ($.firstName.value !="" && $.lastName.value !="" && $.emailAddress.value !="" && $.startingLocation.value !="" && $.endingLocation.value !="" && $.phoneNumber.value !="" && $.identifier.value !="") {
            emailDialog.open();
        }
        
        emailDialog.addEventListener("complete", function(e) {
            if (OS_IOS || OS_MOBILEWEB) {
                if (e.result == emailDialog.SENT) {
                    Titanium.Analytics.featureEvent('safewalkRequestSent');
                    Alloy.Globals.navwindow.openWindow(Alloy.createController('safewalkCompleted').getView());
                }
            } else {
                if (e.result == emailDialog.SENT) {
                    Titanium.Analytics.featureEvent('safewalkRequestSent');
                    Alloy.createController('safewalkCompleted').getView().open();
                }
            }
        });
}

if (OS_IOS || OS_MOBILEWEB) {
	function safeWalkClick(e) {
    	Titanium.Analytics.featureEvent('callSafeWalk');
    	Ti.Platform.openURL("telprompt:9204241212");
	}
} else {
	function safeWalkAndroidClick(e) {
		Titanium.Analytics.featureEvent('callSafeWalk');
		var intent = Ti.Android.createIntent({
			action: Ti.Android.ACTION_DIAL,
			data: 'tel:9204241212'
		});
		Ti.Android.currentActivity.startActivity(intent);
	}
}


