var webservices = require("libraryWS"),
    header = require("HeaderRow"),
    datetime = require("datetimeJS");

function groupSection(section, data) {
    for(var i=0; i<section.length; i++) {
        var groupHeader = new header.HeaderRow(section[i].title,'#414444');
        var locationRow = Ti.UI.createTableViewRow();
        var locationLabel = Titanium.UI.createLabel({
            text:section[i].location,
            font:{fontSize:18},
            color: '#414444',
            left:10,
            textAlign: 'left',
            top:10
        });
        locationRow.add(locationLabel);
        var openTime = datetime.cleanTime(section[i].start);
        var closeTime = datetime.cleanTime(section[i].end);
        var time = openTime + " - " + closeTime;
        var timeRow = Ti.UI.createTableViewRow();
        var timeLabel = Titanium.UI.createLabel({
            text:time,
            font:{
                fontSize:18
            },
            color: '#414444',
            left:10,
            top:10,
            textAlign: 'left'
        });
        timeRow.add(timeLabel);

        data.push(groupHeader);
        data.push(locationRow);
        data.push(timeRow);
    }
}

function groupFinder(groups, entry){
    /* Create a row at top linking to:
    Schedule a group - http://www.uwosh.edu/library/groupfinder/create */
    var data = [];
    if(groups.today.length >= 1) {
        var todayHeader = new header.HeaderRow("Today's Groups", '#D79A27');
        data.push(todayHeader);
        groupSection(groups.today,data);
    }

    if(groups.tomorrow.length >= 1) {
        var tomorrowHeader = new header.HeaderRow("Tomorrow's Groups", '#D79A27');
        data.push(tomorrowHeader);
        groupSection(groups.tomorrow, data);
    }

    if(groups.upcoming.length >= 1) {
        var upcomingHeader = new header.HeaderRow("Upcoming Groups", '#D79A27');
        data.push(upcomingHeader);
        var lastDate = '';
        for(var i=0; i<groups.upcoming.length; i++) {
            var startDate = new Date(groups.upcoming[i].start);
            // If there is a new session time, insert a header in the table.
            if(lastDate === '' || startDate.toDateString() !== lastDate) {
                lastDate = startDate.toDateString();
                var dateRow = new header.HeaderRow(datetime.cleanDate(startDate), '#cc3333');
                data.push(dateRow);
            }
            var groupHeader = new header.HeaderRow(groups.upcoming[i].title,'#414444');
            var locationRow = Ti.UI.createTableViewRow();
            var locationLabel = Titanium.UI.createLabel({
                text:groups.upcoming[i].location,
                font:{fontSize:18},
                color: '#414444',
                left:10,
                textAlign: 'left',
                top:10
            });
            locationRow.add(locationLabel);
            var openTime = datetime.cleanTime(groups.upcoming[i].start);
            var closeTime = datetime.cleanTime(groups.upcoming[i].end);
            var time = openTime + " - " + closeTime;
            var timeRow = Ti.UI.createTableViewRow();
            var timeLabel = Titanium.UI.createLabel({
                text:time,
                font:{fontSize:18},
                color: '#414444',
                left:10,
                textAlign: 'left',
                top:10
            });
            timeRow.add(timeLabel);

            data.push(groupHeader);
            data.push(locationRow);
            data.push(timeRow);
        }
    }
    if (groups.today.length === 0 && groups.tomorrow.length === 0 && groups.upcoming.length === 0 ) {
        var noData = new header.HeaderRow("No Groups are scheduled");
        data.push(noData);
    }

    $.groupFinderTable.setData(data);
}

function getLibrary(entry) {
    webservices.groupFinder({
        success: groupFinder,
        onerror: onerror,
        entry: entry
    });
}

function onerror() {
    alert("Group Finder encountered an error");
}

if(Ti.Network.online) {
    getLibrary("GroupFinder");
} else {
    alert("No network connection detected");
}