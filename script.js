// Get the button:
let mybutton = document.getElementById("myBtn");
let footersec = document.getElementById("footer");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 420 || document.documentElement.scrollTop > 420) {
        mybutton.style.display = "block";
        footersec.classList.add("scroll");
    } else {
        mybutton.style.display = "none";
        footersec.classList.remove("scroll");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}