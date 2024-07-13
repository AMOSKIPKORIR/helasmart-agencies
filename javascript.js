let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    updateSlideDisplay();
}

function updateSlideDisplay() {
    const slideWidth = slides[0].clientWidth;
    const offset = slideIndex * slideWidth * -1;
    document.querySelector('.slides').style.transform = `translateX(${offset}px)`;

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === slideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Initial call to start the slideshow
showSlides();

// Set interval to repeat slideshow
setInterval(showSlides, 3000); // Change slide every 3 seconds (adjust as needed)

// popup
// script.js
let popupDisplayed = false;
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');
let lastScrollTop = 0;
let scrollTimeout;

// Function to display the popup
function displayPopup() {
    if (!popupDisplayed) {
        popup.style.display = 'flex';
        popupDisplayed = true;
    }
}

// Function to hide the popup
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    popupDisplayed = false;
    setScrollTimeout();
});

// Function to set a timeout for the next popup
function setScrollTimeout() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(displayPopup, 3000); // Display the popup after 3 seconds of scrolling
}

// Event listener for scroll
window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) { // Check if user is scrolling down
        if (!popupDisplayed) {
            setScrollTimeout();
        }
    }

    lastScrollTop = currentScrollTop;
});


