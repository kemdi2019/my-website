document.querySelector("body").classList.add("gallery-view");

var clrs = document.querySelectorAll(".colours span");
for (var i = 0; i < clrs.length; i++) {
  var bkg = clrs[i];
  var hex = bkg.innerHTML;
  bkg.style.backgroundColor = hex;
}

var navheight = $("nav").outerHeight();
$("#projtitle").css("margin-top", navheight);

$(document).ready(function () {
  var a = $("nav").offset().top;

  $(document).scroll(function () {
    if ($(this).scrollTop() > a) {
      $("nav").css({ "background-color": "#fff" });
    } else {
      $("nav").css({ "background-color": "transparent" });
    }
  });
});

//onscroll viewport behavior
(function () {
  var prevScrollpos = window.pageYOffset;

  var imgwrapper1 = document.querySelectorAll(".card");
  var imgwrapper2 = document.querySelectorAll(".casestudy .final");

  function onScroll() {
    var currentScrollPos = window.pageYOffset;
    prevScrollpos = currentScrollPos;

    for (var i = 0; i < imgwrapper1.length; i++) {
      images = imgwrapper1[i];
      if (elementInViewport(images)) {
        images.classList.add("visible");
      } else {
        images.classList.remove("visible");
      }
    }
  }

  function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset
    );
  }
  window.onscroll = onScroll;
})();
