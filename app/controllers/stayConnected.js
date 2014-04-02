if (OS_IOS || OS_MOBILEWEB) {
    function twitterAccountClick(e) {
        Titanium.Analytics.featureEvent('twitterAccountList');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('twitterAccountList').getView());
    }

    function facebookAccountClick(e) {
        Titanium.Analytics.featureEvent('facebookAccountList');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('facebookAccountList').getView());
    }

    function youtubeAccountClick(e) {
        Titanium.Analytics.featureEvent('youtube');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
            url: "http://www.youtube.com/uwosh",
            title: "YouTube"
        }).getView());
    }

} else {
    function twitterAccountAndroidClick(e) {
        Titanium.Analytics.featureEvent('twitterAccountList');
        Alloy.createController('twitterAccountList').getView().open();
    }

    function facebookAccountAndroidClick(e) {
        Titanium.Analytics.featureEvent('facebookAccountList');
        Alloy.createController('facebookAccountList').getView().open();
    }

    function youtubeAccountAndroidClick(e) {
        Titanium.Analytics.featureEvent('youtube');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
            url: "http://www.youtube.com/uwosh",
            title: "YouTube"
        }).getView());
    }

}
