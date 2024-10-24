// your code goes here
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Automatic Slideshow - change image every 3 seconds
setInterval(function() {
    plusSlides(1);
}, 3000);


// Toggle dropdown menu visibility when the hamburger is clicked
hamburger.addEventListener('click', () => {
    dropdown.classList.toggle('show');
});

// Function to open the sidenav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// Function to close the sidenav
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//our mission
function showContent(index) {
    // Hide the default text
    document.getElementById('default-text').style.display = 'none';

    // Hide all content paragraphs
    const paragraphs = document.querySelectorAll('.content p:not(#default-text)');
    paragraphs.forEach((p) => p.style.display = 'none');

    // Show the selected paragraph
    document.getElementById(`content-${index}`).style.display = 'block';
}


// Leaflet Map
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
