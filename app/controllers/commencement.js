if (OS_IOS || OS_MOBILEWEB) {
    function commencementFacebookClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', { url: "http://m.facebook.com/UWOshkoshCommencement", title: "UWO Commencement"}).getView());
    }

    function commencementTwitterClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', { url: "https://twitter.com/uwocommencement", title: "@uwocommencement"}).getView());
    }

    function commencementMapClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('commencementMap').getView());
    }

    function commencementWebsiteClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', { url: "http://www.uwosh.edu/commencement/", title: "UWO Commencement"}).getView());
    }

    function commencementProgramClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', { url: "http://www.uwosh.edu/commencement/documents/program.pdf", title: "Commencement Program"}).getView());
    }

    function commencementChecklistClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('commencementChecklist').getView());
    }

} else {
    function commencementFacebookClick(e) {
        Alloy.createController('webViews', { url: "http://m.facebook.com/UWOshkoshCommencement", title: "UWO Commencement"}).getView().open();
    }

    function commencementTwitterClick(e) {
        Alloy.createController('webViews', { url: "https://twitter.com/uwocommencement", title: "@uwocommencement"}).getView().open();
    }

    function commencementMapClick(e) {
        Alloy.createController('commencementMap').getView().open();
    }

    function commencementWebsiteClick(e) {
        Alloy.createController('webViews', { url: "http://www.uwosh.edu/commencement/", title: "UWO Commencement"}).getView().open();
    }

    function commencementProgramClick(e) {
        Alloy.createController('webViews', { url: "http://www.uwosh.edu/commencement/documents/program.pdf", title: "Commencement Program"}).getView().open();
    }

    function commencementChecklistClick(e) {
        Alloy.createController('commencementChecklist').getView().open();
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
    $.fb.height = 170;
    $.fb.width = 204;
    $.tw.height = 170;
    $.tw.width = 204;
    $.maps.height = 170;
    $.maps.width = 204;
    $.website.height = 170;
    $.website.width = 204;
    $.program.height = 170;
    $.program.width = 204;
    $.check.height = 170;
    $.check.width = 204;
    imageSuffix = "_ipad";
}

if(OS_ANDROID && Alloy.Globals.isHighDensityScreen()) {
    imageSuffix = "@2x";
}

$.fb.image = "/images/commence/fb" + imageSuffix + ".png";
$.tw.image = "/images/commence/tw" + imageSuffix + ".png";
$.maps.image = "/images/commence/maps" + imageSuffix + ".png";
$.website.image = "/images/commence/website" + imageSuffix + ".png";
$.program.image = "/images/commence/program" + imageSuffix + ".png";
$.check.image = "/images/commence/check" + imageSuffix + ".png";

// Set proper dashboard properties
if(Alloy.Globals.isLargeScreen()) {
    options = {
        mainBackgroundImage: '/images/grad_home_ipad.png',
        dashboardHeight: 340,
        dashboardWidth: 612,
        mainBackgroundImageLandscape: '/images/grad_home_ipad_l.png',
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
        mainBackgroundImage: '/images/grad_home@2x.png',
        mainBackgroundImageLandscape: '/images/grad_home_l@2x.png',
        dashboardBottom: 40,
        dashboardBottomLandscape: 20
    };
    Ti.API.info(screenHeight);
    // scale for android heights
    if(screenHeight == '569.0') {
        options.mainBackgroundImage = '/images/grad_home_854.png';
        options.mainBackgroundImageLandscape = '/images/grad_home_854_l.png';
        options.dashboardBottom = 80;
    } else if(screenHeight == '533.0') {
        options.mainBackgroundImage = '/images/grad_home_800.png';
        options.mainBackgroundImageLandscape = '/images/grad_home_800_l.png';
    }
} else {
    options = {
        mainBackgroundImage: '/images/grad_home.png',
        mainBackgroundImageLandscape: '/images/grad_home_l.png',
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
    $.commencementWindow.backgroundImage = options.mainBackgroundImage;
    $.commencementDashboard.height = options.dashboardHeight;
    $.commencementDashboard.width = options.dashboardWidth;
    $.commencementDashboard.bottom = options.dashboardBottom;
    $.commencementDashboard.left = "auto";
}
if(currentOrientation == "landscape") {
    $.commencementWindow.backgroundImage = options.mainBackgroundImageLandscape;
    $.commencementDashboard.height = options.dashboardHeightLandscape;
    $.commencementDashboard.width = options.dashboardWidthLandscape;
    $.commencementDashboard.bottom = options.dashboardBottomLandscape;
    $.commencementDashboard.left = (Alloy.Globals.isLargeScreen()) ? 40 : 10;
}

Ti.Gesture.addEventListener('orientationchange', function(ev) {
    if(Alloy.Globals.isLandscape(ev.orientation)) {
        $.commencementWindow.backgroundImage = options.mainBackgroundImageLandscape;
        $.commencementDashboard.height = options.dashboardHeightLandscape;
        $.commencementDashboard.width = options.dashboardWidthLandscape;
        $.commencementDashboard.bottom = options.dashboardBottomLandscape;
        $.commencementDashboard.left = (Alloy.Globals.isLargeScreen()) ? 40 : 10;
    } else {
        $.commencementWindow.backgroundImage = options.mainBackgroundImage;
        $.commencementDashboard.height = options.dashboardHeight;
        $.commencementDashboard.width = options.dashboardWidth;
        $.commencementDashboard.bottom = options.dashboardBottom;
        $.commencementDashboard.left = "auto";
    }
});

//$.commencementWindow.addEventListener('click', function(e) {
//    Alloy.createController('index');
//});