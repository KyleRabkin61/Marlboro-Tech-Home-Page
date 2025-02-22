//  Back to top button

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// button on scroll function that does not cut off div

function scrollToSection(id) {
    const element = document.getElementById(id);
    const offset = 200; // Adjust this value based on navbar height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
    });
}

function checkBackgroundImage() {
    let indexHeader = document.getElementById("indexHeader");
    let altText = document.getElementById("altText");

    function validateBackgroundImage() {
        let bgImage = window.getComputedStyle(indexHeader).backgroundImage;

        if (bgImage.startsWith('url("') || bgImage.startsWith("url('")) {
            let imageUrl = bgImage.slice(5, -2); // Extract URL

            let img = new Image();
            img.src = imageUrl;

            img.onload = function () {
                console.log("Background image loaded successfully.");
                altText.classList.add("d-none"); // Hide alt text
            };

            img.onerror = function () {
                console.log("Background image failed to load.");
                altText.classList.remove("d-none"); // Show alt text
            };
        } else {
            console.log("No background image set.");
            altText.classList.remove("d-none"); // Show alt text if no image
        }
    }

    // Run check immediately
    validateBackgroundImage();

    // Watch for background image changes
    const observer = new MutationObserver(() => {
        console.log("Background image might have changed...");
        validateBackgroundImage();
    });

    observer.observe(indexHeader, { attributes: true, attributeFilter: ["style"] });
}

// Run after the DOM is ready
document.addEventListener("DOMContentLoaded", checkBackgroundImage);

