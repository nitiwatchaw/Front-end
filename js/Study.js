const openBtn = document.getElementById('btn-menu-open');
const closeBtn = document.getElementById('btn-menu-close');


const nav = document.getElementById('navigation')


function disableScroll() {
    document.body.classList.add("stop-scrolling");
    nav.style.left = "0px";

}
function enableScroll() {
    document.body.classList.remove("stop-scrolling");
    nav.style.left = "-270px";
}



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {

        showSlides(slideIndex += n);

}

function currentSlide(n) {
    
        showSlides(slideIndex = n);


}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


