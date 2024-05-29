// script.js
// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Add your logic here, e.g., redirect to sign-up page
            console.log("Button clicked!");
        });
    });
});