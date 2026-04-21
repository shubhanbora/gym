document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links li a");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            if(navLinks.classList.contains("active")) {
                hamburger.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    // Close menu when a link is clicked (for mobile)
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // Sticky Navbar styling on scroll
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Scroll Animations (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Uncomment to only play animation once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
