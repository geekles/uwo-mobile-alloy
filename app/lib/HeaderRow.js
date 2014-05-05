/*
 * Header Row UI component
 */

exports.HeaderRow = function(title, color) {

  var headerRow = Ti.UI.createTableViewRow({
    classname: 'header_row',
    height: 45,
    backgroundColor:'#ddd',
    touchEnabled: false
  });
  var headerLabel = Ti.UI.createLabel({
    text: title,
    color: color,
    font: {
      fontSize: 25,
      fontWeight: 'bold'
    },
    left: 10,
    touchEnabled: false
  });
  headerRow.add(headerLabel);

  return headerRow;
};
