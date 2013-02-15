function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.quickLinks = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "quickLinks"
    }), "Window", null);
    $.addTopLevelView($.__views.quickLinks);
    $.__views.__alloyId5 = A$(Ti.UI.createLabel({
        text: "Quick Links",
        id: "__alloyId5"
    }), "Label", $.__views.quickLinks);
    $.__views.quickLinks.add($.__views.__alloyId5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;