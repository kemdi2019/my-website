var html = document.getElementsByTagName("html")[0];
var body = document.getElementsByTagName("body")[0];
var burger = document.querySelector(".burger");
var link = document.querySelectorAll("nav a");
var header1 = document.getElementsByTagName("header")[0];

for (var i = 0; i < link.length; i++) {
  var links = link[i];
  if (header1) {
    links.setAttribute("onclick", "isNavClicked()");
  }
}

burger.onclick = function () {
  if (html.classList.contains("clicked")) {
    html.classList.remove("clicked");
  } else {
    html.classList.add("clicked");
  }
};

function isNavClicked() {
  var delayInMilliseconds = 700; //in millisec

  setTimeout(function () {
    html.classList.remove("clicked");
  }, delayInMilliseconds);
}

(function () {
  var prevScrollpos = window.pageYOffset;

  var spacing = document.querySelector(".snap .spacing");
  var projects = document.querySelectorAll(".wrapper .project");
  var heading = document.querySelectorAll(".wrapper h2");
  var sections = document.getElementsByTagName("section");
  var footer = document.getElementsByTagName("footer")[0];
  var hero = document.getElementsByTagName("header")[0];
  var scroll = document.querySelectorAll(".scrollbar .dot");
  var scrollsec = document.getElementsByClassName("section");

  var spacingcomp = document.getElementById("spacing");
  var summary = document.getElementById("summary");
  var navbar = document.querySelectorAll("#summary nav")[0];
  var totop = document.getElementsByClassName("totop")[0];

  function onScroll() {
    var currentScrollPos = window.pageYOffset;

    prevScrollpos = currentScrollPos;

    if (hero) {
      hero.classList.add("proceed");
      if (elementInViewport(sections[0]) || elementInViewport(footer)) {
        hero.classList.add("proceed");
      } else {
        hero.classList.remove("proceed");
      }
    }

    if (navbar) {
      if (elementInViewport(summary) && !elementInViewport(spacingcomp)) {
        summary.classList.add("scrolled");
        totop.style.opacity = "1";
      } else {
        summary.classList.remove("scrolled");
        totop.style.opacity = "0";
      }
    }

    for (var i = 0; i < projects.length; i++) {
      var projs = projects[i];

      if (!elementInViewport(spacing) && elementInViewport(sections[0])) {
        sections[0].classList.add("portfolio");
      } else {
        sections[0].classList.remove("portfolio");
      }

      if (elementInViewport(sections[0])) {
        if (elementInViewport(heading[0])) {
          projs.classList.remove("view");
          projects[0].classList.add("view");
        }
        if (elementInViewport(heading[1])) {
          projs.classList.remove("view");
          projects[1].classList.add("view");
        }
        if (elementInViewport(heading[2])) {
          projs.classList.remove("view");
          projects[2].classList.add("view");
        }
      } else {
        projs.classList.remove("view");
      }

      var thumbnail = document.querySelectorAll(".thumbnail img")[0];
      var imgsources = document.querySelectorAll(".view img");
      var imgalt = document.querySelectorAll(".view h2");

      var source = imgsources[i];
      var alts = imgalt[i];

      if (source) {
        thumbnail.src = source.src;
        thumbnail.alt = "screenshot of " + alts.innerText;
      }
    }

    if (scroll[0]) {
      scroll[0].classList.add("active");
    }

    for (var i = 0; i < scrollsec.length; i++) {
      var scrolls = scroll[i];

      if (elementInViewport(scrollsec[0])) {
        scrolls.classList.remove("active");
        scroll[0].classList.add("active");
      }
      if (elementInViewport(scrollsec[1])) {
        scrolls.classList.remove("active");
        scroll[1].classList.add("active");
      }
      if (elementInViewport(scrollsec[2])) {
        scrolls.classList.remove("active");
        scroll[2].classList.add("active");
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

let mybutton = document.getElementById("myBtn");
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var clrs = document.querySelectorAll(".description .colours li");
var thumbnail = document.querySelectorAll(".thumbnail img")[0];
var imgsources = document.querySelectorAll(".description img")[0];
var footerimg = document.querySelectorAll("footer img");
var footerdesc = document.querySelectorAll("footer .description");

if (imgsources) {
  thumbnail.src = imgsources.src;
}

for (var i = 0; i < clrs.length; i++) {
  var bkg = clrs[i];
  var hex = bkg.innerHTML;
  bkg.style.backgroundColor = hex;
}

for (var i = 0; i < footerimg.length; i++) {
  var footerimgs = footerimg[i];
  var footeralt = footerdesc[i].innerHTML;
  footerimgs.alt = footeralt;
}
