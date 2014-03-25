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

function safeWalkClick(e) {
    Titanium.Analytics.featureEvent('callSafeWalk');
    Ti.Platform.openURL("telprompt:9204241212");
}


