//back to top button behaviour
let mybutton = document.getElementById("mybtn");
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//onscroll viewport behavior
(function () {
  var prevScrollpos = window.pageYOffset;

  var htmlsec = document.getElementsByTagName("html")[0];
  var section = document.querySelectorAll("section");
  var projectswrapper = document.querySelector("#projects .container");
  var projects = document.getElementsByClassName("project");
  var galleryview = document.getElementsByClassName("gallery-view");
  var imgwrapper1 = document.querySelectorAll(".casestudy .card");
  var imgwrapper2 = document.querySelectorAll(".casestudy .final");

  function onScroll() {
    var currentScrollPos = window.pageYOffset;
    prevScrollpos = currentScrollPos;

    var visible = document.getElementsByClassName("visible");

    document.getElementsByTagName("body")[0].classList.remove("intro");

    for (var i = 0; i < projects.length; i++) {
      if (elementInViewport(projectswrapper)) {
        htmlsec.classList.add("gallery-view");
      } else {
        htmlsec.classList.remove("gallery-view");
      }
    }

    for (var i = 0; i < imgwrapper1.length; i++) {
      images = imgwrapper1[i];
      images.classList.add("testing");
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

//adds id name to project onload and adds 'visible' class to project when project is in viewport
var projects = document.getElementsByClassName("image");
var list = [];
for (var i = 0; i < projects.length; i++) {
  var projs = projects[i];

  list.push("div" + i);

  var listindex = list.length;

  if (listindex > 0) {
    projs.setAttribute("id", "div" + i);
  }
}

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("visible", entry.isIntersecting);
  });
};
let observer = new IntersectionObserver(callback, {
  threshold: [0.5], // If 50% of the element is in the screen, we count it!
});

list.forEach((d) => {
  const div = document.getElementById(d);
  if (div) observer.observe(div);
});
