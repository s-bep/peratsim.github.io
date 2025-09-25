// Enhanced scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in, .animate-on-scroll').forEach(el => {
    fadeInObserver.observe(el);
});

// Animate list items when section becomes visible
const listObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const listItems = entry.target.querySelectorAll('.sector-features li');
            listItems.forEach(li => {
                li.classList.add('animate-in');
            });
        }
    });
}, observerOptions);

document.querySelectorAll('.service-content, .sector-content').forEach(section => {
    listObserver.observe(section);
});

// Parallax effect for hero content
let ticking = false;
function updateParallax() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
    ticking = false;
}

function requestParallaxUpdate() {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

window.addEventListener('scroll', requestParallaxUpdate);

// Enhanced back to top button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'flex';
        backToTopButton.style.opacity = '1';
        backToTopButton.style.transform = 'translateY(0)';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.transform = 'translateY(20px)';
        setTimeout(() => {
            if (window.pageYOffset <= 300) {
                backToTopButton.style.display = 'none';
            }
        }, 300);
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Scroll instantané vers le haut
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

// Enhanced navbar scroll effect with smooth transitions
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
        navbar.classList.add('shadow');
        navbar.style.padding = '0.5rem 0';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.classList.remove('shadow');
        navbar.style.padding = '1rem 0';
        navbar.style.backdropFilter = 'blur(10px)';
    }

    // Hide/show navbar on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScrollY;
});

// Smooth scrolling for anchor links with easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const targetPosition = targetElement.offsetTop - 80;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = Math.abs(distance) / 3; // Adaptive duration
            let start = null;

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }
            requestAnimationFrame(animation);
        }
    });
});

// Add class to body when page is loaded for initial animations
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    // Trigger initial fade-in animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 100);
        });
    }, 200);
});

// Enhanced button interactions
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading state for better UX
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';

    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
});

// WhatsApp Form Handler
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Build WhatsApp message
    let whatsappMessage = `Bonjour Pératsim Innovation,\n\n`;
    whatsappMessage += `*Nouvelle demande de contact :*\n\n`;
    whatsappMessage += `👤 *Nom :* ${name}\n`;
    whatsappMessage += `📧 *Email :* ${email}\n`;

    if (company) {
        whatsappMessage += `🏢 *Entreprise :* ${company}\n`;
    }

    if (phone) {
        whatsappMessage += `📱 *Téléphone :* ${phone}\n`;
    }

    if (service !== 'Sélectionnez un service...') {
        whatsappMessage += `🎯 *Service souhaité :* ${service}\n`;
    }

    whatsappMessage += `\n💬 *Message :*\n${message}\n\n`;
    whatsappMessage += `_Envoyé depuis peratsim.com_`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp
    const whatsappURL = `https://wa.me/22677554509?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');

    // Optional: Show success message and reset form
    alert('Redirection vers WhatsApp... Votre message a été préparé automatiquement !');
    this.reset();
});