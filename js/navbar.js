
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// Handle active link styling when clicked
function setActiveLink(clickedLink) {
    // Remove active class from all navbar links
    document.querySelectorAll(".actions-link").forEach(link => {
        link.classList.remove("active");
    });
    
    // Add active class to the clicked link
    clickedLink.classList.add("active");
}

// Desktop navbar links
document.querySelectorAll(".navbar-actions .actions-link").forEach(link => {
    link.addEventListener("click", (e) => {
        // Only prevent default for placeholder links
        const href = link.getAttribute("href");
        if (href === "#") {
            e.preventDefault();
        }
        setActiveLink(link);
    });
});

// Mobile menu links
mobileMenu.querySelectorAll(".actions-link").forEach(link => {
    link.addEventListener("click", (e) => {
        // Only prevent default for placeholder links
        const href = link.getAttribute("href");
        if (href === "#") {
            e.preventDefault();
        }
        setActiveLink(link);
        // close menu when a link is clicked
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
    });
});
