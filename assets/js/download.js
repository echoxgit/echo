const navbar = document.querySelector(".navbar");
const main = document.querySelector(".main");
const toggle = document.querySelector(".toggle");
const path = document.querySelector(".path");
const img = document.querySelector(".img");
toggle.addEventListener("click", () => {
  navbar.classList.toggle("dark");
  main.classList.toggle("dark");
  if (navbar.classList.contains("dark")) {
    path.setAttribute(
      "d",
      "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    );
    img.setAttribute("src", "assets/imgs/cfzp59aP.png");
  } else {
    path.setAttribute(
      "d",
      "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    );
    img.setAttribute("src", "assets/imgs/kBYQ0280.png");
  }
});

var $trigger = $(".modal-open");
var $close = $(".modal-close");
var $modal = $(".modal-box");

$(window)
  .on("resize", function () {
    var top = $trigger.offset().top + $trigger.outerHeight();
    var left = $trigger.offset().left;
    var width = $trigger.outerWidth();
    $trigger.attr({
      "data-top": top,
      "data-left": left,
      "data-width": width,
    });
    $modal.css({
      top: top,
      left: left,
    });
  })
  .trigger("resize");

$trigger.on("click", function () {
  $modal
    .css({
      top: "50%",
      left: "50%",
      width: "50%",
      height: "85%",
    })
    .addClass("is-open");
});

$close.on("click", function () {
  var top = $trigger.offset().top + $trigger.outerHeight();
  var left = $trigger.offset().left;
  $modal
    .css({
      top: top,
      left: left,
      width: 0,
      height: "2px",
    })
    .removeClass("is-open");
});
