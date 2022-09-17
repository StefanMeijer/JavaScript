const totalSlides = document.getElementById("slider").childElementCount; //Total number of slides inside the slider
const waitTime = 2000; //Time between slides in milliseconds
let counter = 1; //Counter for not exceeding slider limit
let ispaused = false; //Boolean to check if slider is paused

/**
 * Auto slider
 **/
setInterval(function (e) {
    if (!ispaused) {
        if (counter < totalSlides) {
            counter++;

            document.getElementsByClassName('active')[0].nextElementSibling.className += ' active';
            document.getElementsByClassName('active')[0].classList.remove('active');

            if (counter == totalSlides) { //If slider is at the end, reset counter and slider
                ispaused = true;

                setTimeout(function (e) { // timeout for last image in slider
                    counter = 1;
                    document.getElementsByClassName('active')[0].classList.remove('active');
                    document.getElementById("slider").firstElementChild.className += ' active';

                    ispaused = false;
                }, waitTime);
            }
        }
    }
}, waitTime);
