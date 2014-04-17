if (OS_IOS || OS_MOBILEWEB) {
    function uwoshkoshClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkosh');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
            url: "https://twitter.com/uwoshkosh",
            title: "@uwoshkosh"
        }).getView());
    }

    function uwoshkoshTodayClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkoshToday');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
            url: "https://twitter.com/UWOshkoshToday",
            title: "@UWOshkoshToday"
        }).getView());
    }

    function uwoshkoshEngageClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkoshEngage');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
            url: "https://twitter.com/UWOshkoshEngage",
            title: "@UWOshkoshEngage"
        }).getView());
    }

    function uwoAdmissionsClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOAdmissions');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
            url: "https://twitter.com/UWOAdmissions",
            title: "@UWOAdmissions"
        }).getView());
    }

    function uwoshkoshTitansClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkoshTitans');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
            url: "https://twitter.com/UWOshkoshTitans",
            title: "@UWOshkoshTitans"
        }).getView());
    }

} else {
    function uwoshkoshAndroidClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkosh');
        Ti.Platform.openURL("https://twitter.com/uwoshkosh");
    }

    function uwoshkoshTodayAndroidClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkoshToday');
        Ti.Platform.openURL("https://twitter.com/UWOshkoshToday");
    }

    function uwoshkoshEngageAndroidClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkoshEngage');
        Ti.Platform.openURL("https://twitter.com/UWOshkoshEngage");
    }

    function uwoAdmissionsAndroidClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOAdmissions');
        Ti.Platform.openURL("https://twitter.com/UWOAdmissions");
    }

    function uwoshkoshTitansAndroidClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkoshTitans');
        Ti.Platform.openURL("https://twitter.com/UWOshkoshTitans");
    }

}