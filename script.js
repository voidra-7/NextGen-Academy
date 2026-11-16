
document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Check if elements exist
    if (!navbar || !hamburger || !navLinks) {
        console.error("Navbar elements not found!");
        return;
    }

    // Navbar blur on scroll
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 30);
    });

    // Open and close hamburger menu
    hamburger.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("show");

        hamburger.classList.toggle("active", isOpen);

        hamburger.setAttribute("aria-expanded", isOpen);

        hamburger.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

    // Close menu after clicking a navigation link
    const links = navLinks.querySelectorAll("a[href^='#']");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");
            hamburger.classList.remove("active");

            hamburger.setAttribute("aria-expanded", "false");

        });

    });

});
