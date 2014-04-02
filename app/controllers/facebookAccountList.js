if (OS_IOS || OS_MOBILEWEB) {
    function uwoshkoshClick(e) {
        Titanium.Analytics.featureEvent('facebookUWOshkosh');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
            url: "https://facebook.com/uwoshkosh",
            title: "UW Oshkosh"
        }).getView());
    }

    function uwoshkoshEngageClick(e) {
        Titanium.Analytics.featureEvent('facebookUWOAlumni');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
            url: "https://facebook.com/UWOalumni",
            title: "UWO Alumni"
        }).getView());
    }

    function uwoAdmissionsClick(e) {
        Titanium.Analytics.featureEvent('facebookUWOAdmissions');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
            url: "https://facebook.com/uwo.admissions",
            title: "UWO Admissions"
        }).getView());
    }

    function uwoshkoshTitansClick(e) {
        Titanium.Analytics.featureEvent('facebookUWOAthletics');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
            url: "https://www.facebook.com/UWOshkoshAthletics",
            title: "UWO Titans"
        }).getView());
    }

} else {
    function uwoshkoshAndroidClick(e) {
        Titanium.Analytics.featureEvent('facebookUWOshkosh');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
            url: "https://facebook.com/uwoshkosh",
            title: "UW Oshkosh"
        }).getView());
    }

    function uwoshkoshEngageAndroidClick(e) {
        Titanium.Analytics.featureEvent('facebookUWOAlumni');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
            url: "https://facebook.com/UWOalumni",
            title: "UWO Alumni"
        }).getView());
    }

    function uwoAdmissionsAndroidClick(e) {
        Titanium.Analytics.featureEvent('facebookUWOAdmissions');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
            url: "https://facebook.com/uwo.admissions",
            title: "UWO Admissions"
        }).getView());
    }

    function uwoshkoshTitansAndroidClick(e) {
        Titanium.Analytics.featureEvent('facebookUWOAthletics');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
            url: "https://www.facebook.com/UWOshkoshAthletics",
            title: "UWO Titans"
        }).getView());
    }

}
