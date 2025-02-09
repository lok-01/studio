// // for menu bar
function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    const menuIcon = document.getElementById("menu-icon");

    // Toggle the menu visibility
    menu.classList.toggle("open");

    // Toggle the menu icon visibility (hide when menu is open)
    if (menu.classList.contains("open")) {
        menuIcon.classList.add("hide");
    } else {
        menuIcon.classList.remove("hide");
    }
}
// slider
const images = [
    'url("images/cover.png")',
    'url("images/wed1.png")',
    'url("images/da1.jpeg")'
];
let currentIndex = 0;

function showImage(index) {
    const slider = document.querySelector('.background-slider');
    slider.style.backgroundImage = images[index];
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}

// Initialize the slider with the first image
showImage(currentIndex);

// Auto-slide every 5 seconds

setInterval(nextImage, 5000);

// zoom the slider
// text fill

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-cont ul li a");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            // Remove 'active' class from all items
            menuItems.forEach(link => link.classList.remove("active"));

            // Add 'active' class to clicked item
            this.classList.add("active");
        });
    });
});

// filled
function toggleFill(element) {
    // Remove 'filled' class from all items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('filled');
    });

    // Add 'filled' class to the clicked item
    element.classList.add('filled');
}
