var $ = require("jquery");

require("../stylesheets/style.css");
var body = require("./body.jade")();

$(function() {
  document.title = "Material UI app";
  $("body").html(body);
});