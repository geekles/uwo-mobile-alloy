if (OS_IOS || OS_MOBILEWEB) {
    function uwotClick(e) {
        Titanium.Analytics.featureEvent('newsFeedUWOT');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('newsFeed', {
            url: "http://www.uwosh.edu/today/feed/?cat=5%2C6"
        }).getView());
    }

    function campusEventsClick(e) {
        Titanium.Analytics.featureEvent('newsFeedCampusEvents');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('newsFeed', {
            url: "http://www.uwosh.edu/today/events/feed/"
        }).getView());
    }

    function advanceTitanClick(e) {
        Titanium.Analytics.featureEvent('newsFeedAdvanceTitan');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('newsFeed', {
            url: "http://www.advancetitan.com/search/?q=&t=article&l=10&d=&d1=&d2=&s=start_time&sd=desc&c[]=news,news/*&f=rss"
        }).getView());
    }

    function commencementClick(e) {
        Titanium.Analytics.featureEvent('commencement');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('commencement').getView());
    }

} else if (OS_ANDROID) {
    function uwotAndroidClick(e) {
        Titanium.Analytics.featureEvent('newsFeedUWOT');
        Alloy.createController('newsFeed', {
            url: "http://www.uwosh.edu/today/feed/?cat=5%2C6"
        }).getView().open({modal : true});
    }

    function campusEventsAndroidClick(e) {
        Titanium.Analytics.featureEvent('newsFeedCampusEvents');
        Alloy.createController('newsFeed', {
            url: "http://www.uwosh.edu/today/events/feed/"
        }).getView().open({modal : true});
    }

    function advanceTitanAndroidClick(e) {
        Titanium.Analytics.featureEvent('newsFeedAdvanceTitan');
        Alloy.createController('newsFeed', {
            url: "http://www.advancetitan.com/search/?q=&t=article&l=10&d=&d1=&d2=&s=start_time&sd=desc&c[]=news,news/*&f=rss"
        }).getView().open({modal : true});
    }

    function commencementAndroidClick(e) {
        Titanium.Analytics.featureEvent('commencement');
        Alloy.createController('commencement').getView().open({modal : true});
    }

}
