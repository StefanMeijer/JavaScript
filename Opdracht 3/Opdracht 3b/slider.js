const totalSlides = document.getElementById("slider").childElementCount; //Total number of slides inside the slider
let counter = 1; //Counter for not exceeding slider limit

/**
 * Go to next slide
 **/
var buttonNext = document.getElementById('buttonNext');
buttonNext.addEventListener('click', function (e) {
    if (counter < totalSlides) {
        counter++;

        document.getElementsByClassName('active')[0].nextElementSibling.className += ' active';
        document.getElementsByClassName('active')[0].classList.remove('active');
    }
});

/**
 * Go back to the previous slide
 **/
var buttonPrev = document.getElementById('buttonPrev');
buttonPrev.addEventListener('click', function (e) {
    if (counter > 1) {
        counter--;

        document.getElementsByClassName('active')[0].previousElementSibling.className += ' active';
        document.getElementsByClassName('active')[1].classList.remove('active');
    }
});
