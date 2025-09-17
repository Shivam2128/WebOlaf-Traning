// assets/js/main.js

// Function to load header & footer
async function loadPartials() {
    try {
        const header = await fetch("includes/header.html").then(res => res.text());
        document.getElementById("header").innerHTML = header;

        const footer = await fetch("includes/footer.html").then(res => res.text());
        document.getElementById("footer").innerHTML = footer;
    } catch (error) {
        console.error("Error loading header/footer:", error);
    }
}

// Scroll To Top Button
function initScrollTop() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
        scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
    loadPartials();
    initScrollTop();

    // Init AOS if available
    if (typeof AOS !== "undefined") {
        AOS.init({ duration: 1200, once: true });
    }
});
