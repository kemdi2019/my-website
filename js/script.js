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
  var main = document.querySelector("#main .right");
  var gallery = document.getElementById("gallery");
  var webdesid = document.getElementById("webdes");
  var illustrationid = document.getElementById("illustration");
  var projects = document.getElementsByClassName("image");
  var galleryview = document.getElementsByClassName("gallery-view");
  var nographic = document.getElementsByClassName("nographic")[0];

  function onScroll() {
    var currentScrollPos = window.pageYOffset;
    prevScrollpos = currentScrollPos;

    var visible = document.getElementsByClassName("visible");
    /*
                        for (var i = 0; i < projects.length; i++) {
                            if (elementInViewport(projects[i])) {
                                htmlsec.classList.add("gallery-view");
                                if (elementInViewport(main)) {
                                    htmlsec.classList.remove("gallery-view");
                                }
                            }
                        }*/

    for (var i = 0; i < projects.length; i++) {
      if (visible[0]) {
        htmlsec.classList.add("gallery-view");
      } else {
        htmlsec.classList.remove("gallery-view");
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
