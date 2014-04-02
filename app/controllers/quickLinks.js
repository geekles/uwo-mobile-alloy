function titanWebClick(e) {
    Titanium.Analytics.featureEvent('titanWebQuickLinks');
    Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
    	url: "https://titanweb3.uwosh.edu/titanweb_prd/signon.html",
    	title: "Titan Web"
    }).getView());
}

function d2lClick(e) {
    Titanium.Analytics.featureEvent('d2lQuickLinks');
    Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
    	url: "https://uwosh.courses.wisconsin.edu/Shibboleth.sso/Login?target=https://uwosh.courses.wisconsin.edu/d2l/shibbolethSSO/deepLinkLogin.d2l",
    	title: "D2L"
    }).getView());
}

function titanEmailClick(e) {
    Titanium.Analytics.featureEvent('titanEmailQuickLinks');
    Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
    	url: "https://mail.google.com",
    	title: "E-mail"
    }).getView());
}

function mobileSetupClick(e) {
    Titanium.Analytics.featureEvent('mobileSetupQuickLinks');
    Alloy.Globals.navwindow.openWindow(Alloy.createController('webViews', {
    	url: "http://www.uwosh.edu/titanapps/mobile-devices",
    	title: "Mobile Setup"
    }).getView());
}
