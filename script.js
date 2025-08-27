// JAVASCRIPT - Final Version

// 1. Header background change on scroll
const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// 2. Typewriter Effect
const typewriterElement = document.getElementById('typewriter');
if (typewriterElement) {
    const phrases = ["A Software Developer.", "A Creative Problem Solver.", "A Quick Learner."];
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = "";
    let isDeleting = false;

    function type() {
        const currentTargetPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            currentPhrase = currentTargetPhrase.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            currentPhrase = currentTargetPhrase.substring(0, letterIndex + 1);
            letterIndex++;
        }

        typewriterElement.textContent = currentPhrase;

        let typeSpeed = 100; // Adjusted for a natural feel
        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && letterIndex === currentTargetPhrase.length) {
            typeSpeed = 2000; // Pause at the end
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause before starting new phrase
        }

        setTimeout(type, typeSpeed);
    }
    // Start the typewriter effect after the page is loaded
    document.addEventListener('DOMContentLoaded', () => setTimeout(type, 1000));
}

// 3. Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
if (faders.length > 0) {
    const appearOptions = {
        threshold: 0.1,
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
}

// 4. Skills Orb Interaction
const skillsOrbContainer = document.querySelector('.skills-orb-container');
const skillsOrb = document.getElementById('skills-orb');
if (skillsOrbContainer && skillsOrb) {
    skillsOrb.addEventListener('click', () => {
        skillsOrbContainer.classList.toggle('open');
    });
}

// 5. Dropdown Menu Logic
const mainNav = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.menu-toggle');
const navLinksList = document.querySelector('.nav-links');
if (mainNav && menuToggle && navLinksList) {
    // Toggle the dropdown when the menu button is clicked
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from closing the menu immediately
        mainNav.classList.toggle('menu-open');
    });

    // Close the dropdown when a link is clicked (for mobile view)
    navLinksList.addEventListener('click', () => {
        if (mainNav.classList.contains('menu-open')) {
            mainNav.classList.remove('menu-open');
        }
    });

    // Close the dropdown if the user clicks anywhere outside of it
    document.addEventListener('click', (e) => {
        if (mainNav.classList.contains('menu-open') && !mainNav.contains(e.target)) {
            mainNav.classList.remove('menu-open');
        }
    });
}
// 6. Remove focus from buttons and logo after click
const clickableElements = document.querySelectorAll('.btn, .logo');

clickableElements.forEach(element => {
    element.addEventListener('click', () => {
        // Use a short timeout to fix the issue on mobile browsers
        setTimeout(() => {
            element.blur();
        }, 100);
    });
});