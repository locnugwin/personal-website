// Function to toggle between light and dark mode
function toggleMode() {
    const colorElement = document.body;
    colorElement.classList.toggle("light-mode"); // Toggle the "light-mode" class on the body element

    const modeToggle = document.getElementById("modeToggle"); // Get the anchor element with the ID "modeToggle"
    const button = modeToggle.querySelector("button"); // Get the button element inside the anchor

    // Get all project cards
    const projectCards = document.querySelectorAll(".project-card");

    if (colorElement.classList.contains("light-mode")) {
        // If in light mode, change button text to "Toggle Dark Mode" and update link colors
        button.textContent = "Toggle Dark Mode";
        updateLinkColors("#171717", "#dbd6cb"); // Update link colors with dark mode colors
        // Add the "light-mode" class to project cards
        projectCards.forEach(card => {
            card.classList.add("light-mode");
        });
    } else {
        // If in dark mode, change button text to "Toggle Light Mode" and update link colors
        button.textContent = "Toggle Light Mode";
        updateLinkColors("#dbd6cb", "#171717"); // Update link colors with light mode colors
                // Remove the "light-mode" class from project cards
                projectCards.forEach(card => {
                    card.classList.remove("light-mode");
                });
    }
}

// Function to update link colors based on mode
function updateLinkColors(linkColor, hoverColor) {
    const links = document.querySelectorAll("a"); // Select all links in the document

    links.forEach(link => {
        link.style.color = linkColor; // Set the link's color

        // Add mouseover and mouseout event listeners for hover effect
        link.addEventListener("mouseover", function() {
            this.style.color = hoverColor; // Change color on mouseover
        });

        link.addEventListener("mouseout", function() {
            this.style.color = linkColor; // Change back to original color on mouseout
        });
    });
}