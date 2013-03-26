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


var imageSuffix = '',
    options,
    screenHeight = Ti.Platform.displayCaps.platformHeight,
    screenWidth = Ti.Platform.displayCaps.platformWidth,
    currentOrientation;

if (screenWidth > screenHeight) {
    currentOrientation = 'landscape';
} else {
    currentOrientation = 'portrait';
}

if(Alloy.Globals.isLargeScreen()) {
    $.news.height = 170;
    $.news.width = 204;
    $.people.height = 170;
    $.people.width = 204;
    $.links.height = 170;
    $.links.width = 204;
    $.connected.height = 170;
    $.connected.width = 204;
    $.services.height = 170;
    $.services.width = 204;
    $.emergency.height = 170;
    $.emergency.width = 204;
    imageSuffix = "_ipad";
}

if(OS_ANDROID && Alloy.Globals.isHighDensityScreen()) {
    imageSuffix = "@2x";
}

$.news.image = "/images/dashboard/news" + imageSuffix + ".png";
$.people.image = "/images/dashboard/people" + imageSuffix + ".png";
$.links.image = "/images/dashboard/links" + imageSuffix + ".png";
$.connected.image = "/images/dashboard/connected" + imageSuffix + ".png";
$.services.image = "/images/dashboard/services" + imageSuffix + ".png";
$.emergency.image = "/images/dashboard/emergency" + imageSuffix + ".png";

// Set proper dashboard properties
if(Alloy.Globals.isLargeScreen()) {
    options = {
        mainBackgroundImage: '/images/home_ipad.png',
        dashboardHeight: 340,
        dashboardWidth: 612,
        mainBackgroundImageLandscape: '/images/home_ipad_l.png',
        dashboardHeightLandscape: 510,
        dashboardWidthLandscape: 410,
        dashboardBottom: 120,
        dashboardBottomLandscape: 130
    };
} else if(Alloy.Globals.isHighDensityScreen() && OS_ANDROID) {
    options = {
        dashboardHeight: 170,
        dashboardWidth: 306,
        dashboardHeightLandscape: 260,
        dashboardWidthLandscape: 220,
        mainBackgroundImage: '/images/home@2x.png',
        mainBackgroundImageLandscape: '/images/home_l@2x.png',
        dashboardBottom: 40,
        dashboardBottomLandscape: 20
    };
    Ti.API.info(screenHeight);
    // scale for android heights
    if(screenHeight == '569.0') {
        options.mainBackgroundImage = '/images/home_854.png';
        options.mainBackgroundImageLandscape = '/images/home_854_l.png';
        options.dashboardBottom = 80;
    } else if(screenHeight == '533.0') {
        options.mainBackgroundImage = '/images/home_800.png';
        options.mainBackgroundImageLandscape = '/images/home_800_l.png';
    }
} else {
    options = {
        mainBackgroundImage: '/images/home.png',
        mainBackgroundImageLandscape: '/images/home_l.png',
        dashboardHeight: 170,
        dashboardWidth: 306,
        dashboardBottom: 40,
        dashboardHeightLandscape: 260,
        dashboardWidthLandscape: 220,
        dashboardBottomLandscape: 20
    };
}

// Set initial orientation
if(currentOrientation == "portrait") {
    if (OS_IOS || OS_MOBILEWEB) {
        $.win.backgroundImage = options.mainBackgroundImage;
    }
    $.index.backgroundImage = options.mainBackgroundImage;
    $.dashboard.height = options.dashboardHeightL
    $.dashboard.width = options.dashboardWidth;
    $.dashboard.bottom = options.dashboardBottom;
    $.dashboard.left = 'auto';
}
if(currentOrientation == "landscape") {
    if (OS_IOS || OS_MOBILEWEB) {
        $.win.backgroundImage = options.mainBackgroundImageLandscape;
    }
    $.index.backgroundImage = options.mainBackgroundImageLandscape;
    $.dashboard.height = options.dashboardHeightLandscape;
    $.dashboard.width = options.dashboardWidthLandscape;
    $.dashboard.bottom = options.dashboardBottomLandscape;
    $.dashboard.left = (Alloy.Globals.isLargeScreen()) ? 40 : 10;
}

Ti.Gesture.addEventListener('orientationchange', function(ev) {
    if(Ti.Gesture.orientation !== Titanium.UI.FACE_UP && Ti.Gesture.orientation !== Titanium.UI.FACE_DOWN) {
        if(Alloy.Globals.isLandscape(ev.orientation)) {
            if (OS_IOS || OS_MOBILEWEB) {
                $.win.backgroundImage = options.mainBackgroundImageLandscape;
            }
            $.index.backgroundImage = options.mainBackgroundImageLandscape;
            $.dashboard.height = options.dashboardHeightLandscape;
            $.dashboard.width = options.dashboardWidthLandscape;
            $.dashboard.bottom = options.dashboardBottomLandscape;
            $.dashboard.left = (Alloy.Globals.isLargeScreen()) ? 40 : 10;
        } else {
            if (OS_IOS || OS_MOBILEWEB) {
                $.win.backgroundImage = options.mainBackgroundImage;
            }
            $.index.backgroundImage = options.mainBackgroundImage;
            $.dashboard.height = options.dashboardHeight;
            $.dashboard.width = options.dashboardWidth;
            $.dashboard.bottom = options.dashboardBottom;
            $.dashboard.left = 'auto';
        }
    }
});

$.index.open();
