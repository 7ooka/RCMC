"use strict";

var scrollTo = function (sectionEl = "", callback = function () {}) {
  $("html, body").animate(
    {
      scrollTop: sectionEl ? calculateOffset(sectionEl) : 0,
    },
    800,
    "swing",
    callback()
  );
};
var calculateOffset = function (el) {
  if ($(el).length == 0) return;
  if ($(window).width() >= 980) return Math.floor($(el).offset().top - 69);
  return Math.floor($(el).offset().top);
};
// on ready state
$(function () {
  // breakpoint and up
  // $(window).resize(function () {
  //   if ($(window).width() >= 980) {
  //     // when you hover a toggle show its dropdown menu
  //     $(".navbar .dropdown-toggle").hover(function () {
  //       $(this).parent().toggleClass("show");
  //       $(this).parent().find(".dropdown-menu").toggleClass("show");
  //     });

  //     // hide the menu when the mouse leaves the dropdown
  //     $(".navbar .dropdown-menu").mouseleave(function () {
  //       $(this).removeClass("show");
  //     });

  //     // do something here
  //   }
  // });
  $(document).scroll(function () {
    var scroll = $(this).scrollTop();
    var navbar = $(".main-navbar");
    var scrollUpBtn = $(".scroll-up");
    // if (scroll > 0) {
    //   scrollUpBtn.fadeIn();
    // } else {
    //   scrollUpBtn.fadeOut();
    // }
    // if ($(window).width() >= 992) {
    //   if (scroll > 140) {
    //     if (!navbar.hasClass("fixed")) {
    //       $("body").css({ "padding-top": navbar.height() + "px" });
    //       navbar.addClass("fixed");
    //       // $(".search-toggle").addClass("d-none");
    //     }
    //   } else {
    //     navbar.removeClass("fixed");
    //     $("body").css({ "padding-top": "0px" });
    //     $(".search-toggle").removeClass("d-none");
    //   }
    // }
 
   
  });




  
});




$(".search-toggle").on("click", function (e) {
  // $(".search-box").toggle();
  //show search action
   
    $(".search-box").fadeToggle("fast", function() {
    $(".search-box input").focus();
    // Animation complete.
    
    });
    
$(document).click(function(e) {
if (!$(e.target).is('.searchbox, .searchbox *')) {
$(".searchbox").hide();
//$(".search-input").val("");
}
});
$('.closeSearch').click(function(e) {
$(".searchbox").hide();
$(".search-input").val("");
});

  $(".search-box").toggleClass("open-search");

  $("body").toggleClass("header-popup-open");
  e.stopPropagation();
 
  
});
$(document).click(function(e) {
if (!$(e.target).is('.search-box input, .search-toggle*')) {
$(".search-box").hide();
$("body").removeClass("header-popup-open");
console.log("hhhhhhhhhhh");
$(".search-box").toggleClass("open-search");
$(".search-box input").val("");



$(".html5-video-player").contents().find(".ytp-pause-overlay").remove();
}
});