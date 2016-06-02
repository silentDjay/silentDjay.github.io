$(document).ready( function () {
  "use strict";

  $(".projDiv").on("mouseover", function () {
    $(this).children().filter(".line").addClass("lineHover");
    $(this).children().filter(".projDeets").addClass("projectHover");
  });

  $(".projDiv").on("mouseout", function () {
    $(this).children().filter(".line").removeClass("lineHover");
    $(this).children().filter(".projDeets").removeClass("projectHover");
  });

});
