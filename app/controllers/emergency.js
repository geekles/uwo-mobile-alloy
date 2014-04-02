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
