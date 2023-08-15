// Get references to the navigation links
const homeLink = document.querySelector('a[href="#home"]');
const aboutLink = document.querySelector('a[href="#about"]');
const servicesLink = document.querySelector('a[href="#services"]');
const contactLink = document.querySelector('a[href="#contact"]');

// Function to handle smooth scrolling
function scrollToSection(section) {
    section.scrollIntoView({
        behavior: 'smooth'
    });
}

// Add click event listeners to each navigation link
homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection(document.getElementById('home'));
});

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection(document.getElementById('about'));
});

servicesLink.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection(document.getElementById('services'));
});

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection(document.getElementById('contact'));
});