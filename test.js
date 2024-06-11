// Smooth scroll to sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Form validation and submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        // Here you can handle form submission, e.g., send data to the server
    } else {
        alert('Please fill in all fields.');
    }
});
// Event listeners are added to the feature icons for click, mouseover, and mouseout events.

/*document.addEventListener("DOMContentLoaded", function () {
    const featureIcons = document.querySelectorAll("nav ul li a");
    const features = document.querySelectorAll(".feature");

    featureIcons.forEach((icon, index) => {
        icon.addEventListener("click", (event) => {
            event.preventDefault();
            const feature = document.getElementById(`${icon.id.replace("-icon", "")}`);
            if (feature.style.display === "block") {
                feature.style.display = "none";
            } else {
                features.forEach(f => f.style.display = "none");
                feature.style.display = "block";
            }
        });

        icon.addEventListener("mouseover", () => {
            const feature = document.getElementById(`${icon.id.replace("-icon", "")}`);
            feature.style.display = "block";
        });

        icon.addEventListener("mouseout", () => {
            const feature = document.getElementById(`${icon.id.replace("-icon", "")}`);
            setTimeout(() => {
                if (!feature.matches(":hover")) {
                    feature.style.display = "none";
                }
            }, 500);  // Add a delay before hiding to ensure smooth user experience
        });
    });

    features.forEach(feature => {
        feature.addEventListener("mouseleave", () => {
            feature.style.display = "none";
        });
    });
});*/


