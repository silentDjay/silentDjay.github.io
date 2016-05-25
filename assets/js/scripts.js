$(document).ready( function () {
  "use strict";


  $(".projDiv").on("mouseover", function () { // when any iconDiv is mousovered...
    // $(this).children().filter(".projTitle").attr("id", "iconHover");
    $(this).children().filter(".line").addClass("lineHover");
    // $(this).children().filter(".projDeets").addClass("englishHover");
    $(this).children().filter(".projDeets").addClass("deutschHover");
  });

  $(".projDiv").on("mouseout", function () { // when any iconDiv is mousouted...
    // $(this).children().filter(".projTitle").attr("id", "");
    $(this).children().filter(".line").removeClass("lineHover");
    // $(this).children().filter(".english").removeClass("englishHover");
    $(this).children().filter(".projDeets").removeClass("deutschHover");
  });

});
