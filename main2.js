
/*slideshow*/
var images = [
    "https://sudha-y.github.io/website/warwick.png",
    "https://sudha-y.github.io/website/cmrcet.png",
"https://sudha-y.github.io/website/fiitjee.png",
    "https://sudha-y.github.io/website/chirec.png"
];

var i=1;
function change(){
 document.getElementById("IMG").src=images[i];
  i++;
  if(i==4)
{
  i=0;
}
  
}


/* CAROUSEL*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function minusSlides(n) {
    showSlides(slideIndex -= n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
/* back to top button--------*/
function GoToHomePage()
{
   window.location = 'https://sudha-y.github.io/website/personal.html';      
}
