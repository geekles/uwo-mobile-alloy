var search = require('search');

function peopleSearch(path) {
    search.doPeopleSearch({
        success: function(data){
            var rows = [];
            _.each(data, function(item) {
                rows.push(Alloy.createController("campusSearchRow", {
                   item: item
                }).getView());
            });
            $.campusSearchTable.setData(rows);

        }
    }, path);
}

// Is this a people search or a department search?
var peopleOrDeptUrl = arguments[0].peopleOrDeptUrl;

// Search Bar
$.sb.addEventListener('cancel', function(e) {
    $.sb.blur();
});
$.sb.addEventListener('return', function(e) {
    var searchPath = peopleOrDeptUrl + Titanium.Network.encodeURIComponent(e.value);
    var path = "http://m.uwosh.edu/api/beta/2.0" + searchPath;

    if(Ti.Network.online) {
        // Perform the search
        peopleSearch(path);
    } else {
        alert('No network connection detected.');
    }
});