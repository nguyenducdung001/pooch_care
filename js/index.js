$(document).ready(function () {
  $(".owl-one").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      480: {
        items: 1,
        nav: false,
      },
      667: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 1,
        nav: true,
      },
    },
  });
});

// testimonial owle-carousel

$(".owl-two").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    736: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 2,
      nav: false,
      loop: false,
    },
  },
});
// popup

$(".popup-with-zoom-anim").magnificPopup({
  type: "inline",

  fixedContentPos: false,
  fixedBgPos: true,

  overflowY: "auto",

  closeBtnInside: true,
  preloader: false,

  midClick: true,
  removalDelay: 300,
  mainClass: "my-mfp-zoom-in",
});
$(".popup-with-move-anim").magnificPopup({
  type: "inline",

  fixedContentPos: false,
  fixedBgPos: true,

  overflowY: "auto",

  closeBtnInside: true,
  preloader: false,

  midClick: true,
  removalDelay: 300,
  mainClass: "my-mfp-slide-bottom",
});
// Counting up
$(".counter").countUp();

// scroll header

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
    $("#site-header").addClass("nav-fixed");
  } else {
    $("#site-header").removeClass("nav-fixed");
  }
});
// dark theme and light theme
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}
toggleSwitch.addEventListener("change", switchTheme);
