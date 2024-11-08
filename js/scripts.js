// Toggle navigation menu for mobile view
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav ul");
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Menu";
    toggleButton.classList.add("nav-toggle");
    document.querySelector("nav").prepend(toggleButton);

    toggleButton.addEventListener("click", () => {
        nav.classList.toggle("visible");
    });
});

// Simple form validation for Contact page
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}
