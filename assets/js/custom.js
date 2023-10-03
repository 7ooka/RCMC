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
// console.log("hhhhhhhhhhh");
$(".search-box").toggleClass("open-search");
$(".search-box input").val("");



$(".html5-video-player").contents().find(".ytp-pause-overlay").remove();
}
});

















/*

relatedFields
*/



$("#relatedFields .form-check-input").on("click", function (e) {
  $("#relatedFields tr").removeClass("selected")

  console.log("index" ,  $(this).parents("tr").index());
  $(this).parents("tr").find("input").prop('disabled', false).focus();
  $(this).parents("tr").addClass("selected")

})



function addSubTasks(){
  console.log("addSubTasks()");
  $(".Subtasks .add-table").addClass("d-none");
  $(".Subtasks .hidden-section").fadeIn();

  
}

function addTableRow(){
  console.log("ggg");
  $("#subTasksTable > tbody:last-child")
  .append($('<tr>')
    .append($('<td>')

      .append($('<input>')
      .attr('type', 'text')
      .attr('placeholder', 'أدخل عنوان*')
      .attr('class', 'input-box')
      )
    )
    .append($('<td>')

      .append($('<input>')
      .attr('type', 'text')
      .attr('placeholder', 'أدخل وصف مختصر عن المهمة')
      )
    )
    .append($('<td>')
      .append($(' <select>')
        .append($(' <option>  يرجى تحديد اختيار</option>').attr('value', '0'))
        .append($(' <option>  1</option>') .attr('value', '1'))
        .append($(' <option>  2</option>').attr('value', '2'))
        
      )
    )
    .append($('<td>')
      .append($('<input>')
      .attr('type', 'text')
      .attr('placeholder', 'أدخل النسبة*')
      )
    )

    .append($('<td>')
      .append($('<button>')
      .attr('class', 'delete-btn')
      // .attr('onclick', 'deleteRow()')
        .append($('<div>')
        .attr('class', 'img-box')
          .append($('<img>')
          .attr('src', '../assets/images/delete.svg'
          )
        )
        
        
        )
      )
    )

  )

  $("#subTasksTable > tbody tr .input-box").focus();
}

$("#subTasksTable").on("click", ".delete-btn", function() {
  $(this).closest("tr").remove();
});











// $(".save-btn button").on('click', function() {
//   console.log("ooooo");
//   $('html, body').animate({
//     scrollTop: $('.scroll-sec').offset().top,
//   });
// });


$('.owl-carousel-fav').owlCarousel({
  margin:15,
  nav:false,
  rtl: true,
  items:4,
  dots:true,
  mouseDrag:true,
  // slideBy:1,
  
//   responsive : {
//     // breakpoint from 0 up
//     0 : {
//       items:2,
//     },
//     // breakpoint from 480 up
//     480 : {

//     },
//     // breakpoint from 768 up
//     768 : {
//       items:2,
//     },
//     1650 : {
//       items:4,
//     }
// }

})




















const pie1 = document.getElementById('pieChart1');

var pie1Colors =[
  '#2ACE97',
  '#E96363',
  "#DCB456",
  '#6399E9'

]

  new Chart(pie1, {
    type: 'pie',
    data: {
      labels: [
        'مشروع',
        'اجتماع',
        'موائمة',
        'تقرير',
     
    ],
      datasets: [{
        data: [
          45,
          35,
          12,
          17,
        ],
        borderWidth: 0,
        backgroundColor: pie1Colors,
        color:'#756B65'
      },
    ]
    },
    options: {
      // scales: {
      //   y: {
      //     beginAtZero: true
      //   }
      // }
      plugins: {
        legend: {
          position:'right',
          align:'center',
            labels: {
              padding:30,
              usePointStyle:true,
              // pointStyle:'circle',
                // This more specific font property overrides the global property
                font: {
                    size: 12,
                    family:"Tajwal"
                }
            }
        }
      }
    }
  });









  const pie2 = document.getElementById('pieChart2');

  var pie2Colors =[
    '#2ACE97',
    '#E96363',
    '#6399E9'
  
  ]
  
    new Chart(pie2, {
      type: 'pie',
      data: {
        labels: [
          'على المسار',
          'مكتمل',
          'متأخر',
       
      ],
        datasets: [{
          data: [
            40,
            45,
            15,
          ],
          borderWidth: 0,
          backgroundColor: pie2Colors,
          color:'#756B65'
        },
      ]
    },
    options: {
      rotation:180,
        // scales: {
        //   y: {
        //     beginAtZero: true
        //   }
        // }
        plugins: {
          legend: {
            position:'right',
            align:'center',
              labels: {
                padding:30,
                usePointStyle:true,
                // pointStyle:'circle',
                  // This more specific font property overrides the global property
                  font: {
                      size: 12,
                      family:"Tajwal"
                  }
              }
          }
        }
      }
    });
  

    
















const bar1 = document.getElementById('barChart1');

var bar2Colors =[
  "#DCB456",
  '#6399E9',
  '#E96363',
  '#2ACE97',
]
  new Chart(bar1, {
    type: 'bar',
    data: {
      labels: [
       'غير ربحي',
       'شبه حكومي',
       'خاص',
       'حكومي',
     
    ],
      datasets: [{
        label: 'حكومي',
        maxBarThickness: 25,
        data: [
          12,
          19,
          3,
          5,
        ],
        borderWidth: 0,
        backgroundColor: bar2Colors,
        color:'#756B65'
      }]
    },
    options: {
      plugins: {
        legend: {
          display:false,
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      },

    }
  });








const bar2 = document.getElementById('barChart2');

  new Chart(bar2, {
    type: 'bar',
    data: {
      labels: [
        'وزارة النقل',
        'هيئة الحكومة الرقمية',
        'هيئة الأمن السيبراني',
        'وزارة الصحة',
        'وزارة السياحة',
        'وزارة النقل',
        'هيئة الحكومة الرقمية',
        'هيئة الأمن السيبراني',
        'وزارة الصحة',
        'وزارة السياحة',
        'وزارة النقل',
        'هيئة الحكومة الرقمية',
        'هيئة الأمن السيبراني',
        'وزارة الصحة',
        'وزارة السياحة',
        'وزارة النقل',
        'هيئة الحكومة الرقمية',
        'هيئة الأمن السيبراني',
        'وزارة الصحة',
        'وزارة السياحة',
     
    ],
      datasets: [{
        label: 'اهلا وسهلا',
        maxBarThickness: 25,
        data: [
          15,
          55,
          73,
          42,
          66,
          3,
          12,
          19,
          3,
          5,
          2,
          3,
          15,
          55,
          73,
          42,
          66,
          3,
          12,
          19,
          3,
          5,
          2,
          3
        ],
        borderWidth: 0,
        backgroundColor:'#6399E9',
        color:'#756B65'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display:false,
            // labels: {
            //     // This more specific font property overrides the global property
            //     font: {
            //         size: 50,
            //         family:"Tajwal"
            //     }
            // }
        }
      }
    }
  });



  