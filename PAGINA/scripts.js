document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    menuButton.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the form from submitting normally

        successMessage.style.display = "block"; // Show success message
        contactForm.reset(); // Clear form fields
        setTimeout(function() {
            successMessage.style.display = "none"; // Hide success message after 3 seconds
        }, 3000);
    });
});