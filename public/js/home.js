// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

const slideshow = document.querySelector('.slideshow');
const slideshowPictures = document.querySelectorAll(".slideshow-pictures");

const firstButton = document.querySelector("#r1");
const secondButton = document.querySelector("#r2");
const thirdButton = document.querySelector("#r3");
const fourthButton = document.querySelector("#r4");

let counter = 0;
const size = slideshowPictures[0].clientWidth;
document.querySelector("#radio1").style.backgroundColor = "rgba(255,255,255,100)";

firstButton.addEventListener('click' , () => {
    slideshow.style.transition = "transform 0.4s ease-in-out";
    counter = 0;
    slideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    document.querySelector("#radio1").style.backgroundColor = "rgba(255,255,255,100)";
    document.querySelector("#radio2").style.backgroundColor = "rgba(255,255,255,0)";
    document.querySelector("#radio3").style.backgroundColor = "rgba(255,255,255,0)";
    document.querySelector("#radio4").style.backgroundColor = "rgba(255,255,255,0)";
})
secondButton.addEventListener('click' , () => {
    slideshow.style.transition = "transform 0.4s ease-in-out";
    counter = 1;
    slideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    document.querySelector("#radio1").style.backgroundColor = "rgba(255,255,255,0)";
    document.querySelector("#radio2").style.backgroundColor = "rgba(255,255,255,100)";
    document.querySelector("#radio3").style.backgroundColor = "rgba(255,255,255,0)";
    document.querySelector("#radio4").style.backgroundColor = "rgba(255,255,255,0)";
})
thirdButton.addEventListener('click' , () => {
    slideshow.style.transition = "transform 0.4s ease-in-out";
    counter = 2;
    slideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    document.querySelector("#radio1").style.backgroundColor = "rgba(255,255,255,0)";
    document.querySelector("#radio2").style.backgroundColor = "rgba(255,255,255,0)";
    document.querySelector("#radio3").style.backgroundColor = "rgba(255,255,255,100)";
    document.querySelector("#radio4").style.backgroundColor = "rgba(255,255,255,0)";
})
fourthButton.addEventListener('click' , () => {
    slideshow.style.transition = "transform 0.4s ease-in-out";
    counter = 3;
    slideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    document.querySelector("#radio1").style.backgroundColor = "rgba(255,255,255,0)";
    document.querySelector("#radio2").style.backgroundColor = "rgba(255,255,255,0)";
    document.querySelector("#radio3").style.backgroundColor = "rgba(255,255,255,0)";
    document.querySelector("#radio4").style.backgroundColor = "rgba(255,255,255,100)";
})