if (OS_IOS || OS_MOBILEWEB) {
    Alloy.CFG.navgroup = $.navgroup;

    function newsEventsClick(e) {
        $.navgroup.open(Alloy.createController('newsEvents').getView());
    }

    function peoplePlacesClick(e) {
        $.navgroup.open(Alloy.createController('peoplePlaces').getView());
    }

    function quickLinksClick(e) {
        $.navgroup.open(Alloy.createController('quickLinks').getView());
    }

    function stayConnectedClick(e) {
        $.navgroup.open(Alloy.createController('stayConnected').getView());
    }

    function campusServicesClick(e) {
        $.navgroup.open(Alloy.createController('campusServices').getView());
    }

    function emergencyClick(e) {
        $.navgroup.open(Alloy.createController('emergency').getView());
    }
} else {
    function newsEventsClick(e) {
        Alloy.createController('newsEvents').getView().open();
    }

    function peoplePlacesClick(e) {
        Alloy.createController('peoplePlaces').getView().open();
    }

    function quickLinksClick(e) {
        Alloy.createController('quickLinks').getView().open();
    }

    function stayConnectedClick(e) {
        Alloy.createController('stayConnected').getView().open();
    }

    function campusServicesClick(e) {
        Alloy.createController('campusServices').getView().open();
    }

    function emergencyClick(e) {
        Alloy.createController('emergency').getView().open();
    }
}

var imageSuffix = '';

if(Alloy.Globals.__isLargeScreen) {
    imageSuffix = "_ipad";
}
$.win.backgroundImage = "/Default.png";
$.news.image = "/images/dashboard/news" + imageSuffix + ".png";
$.people.image = "/images/dashboard/people" + imageSuffix + ".png";
$.links.image = "/images/dashboard/links" + imageSuffix + ".png";
$.connected.image = "/images/dashboard/connected" + imageSuffix + ".png";
$.services.image = "/images/dashboard/services" + imageSuffix + ".png";
$.emergency.image = "/images/dashboard/emergency" + imageSuffix + ".png";

if(Ti.Gesture.orientation == Titanium.UI.LANDSCAPE_LEFT || Ti.Gesture.orientation == Titanium.UI.LANDSCAPE_RIGHT) {
    $.index.backgroundImage = "/Default-Landscape.png";
}

Ti.Gesture.addEventListener('orientationchange', function(ev) {
    if(Alloy.Globals.isLandscape(ev.orientation)) {
        alert("you rotated");
        $.win.backgroundImage = "/Default-Landscape.png";
    }
});

$.index.open();
