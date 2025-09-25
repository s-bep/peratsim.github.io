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

// Variables globales pour optimisation
const navbar = document.querySelector('.navbar');
const backToTopButton = document.querySelector('.back-to-top');
const heroContent = document.querySelector('.hero-content');

let lastScrollY = window.scrollY;
let backToTopVisible = false;
let scrollTicking = false;

// Gestionnaire unique et optimisé pour le scroll
function handleScroll() {
    if (!scrollTicking) {
        requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;

            // Parallax effet
            if (heroContent && currentScrollY < window.innerHeight) {
                heroContent.style.transform = `translateY(${currentScrollY * 0.1}px)`;
            }

            // Back to top button
            const shouldShow = currentScrollY > 300;
            if (shouldShow && !backToTopVisible) {
                backToTopVisible = true;
                backToTopButton.style.display = 'flex';
                backToTopButton.style.opacity = '1';
                backToTopButton.style.transform = 'translateY(0)';
            } else if (!shouldShow && backToTopVisible) {
                backToTopVisible = false;
                backToTopButton.style.opacity = '0';
                backToTopButton.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    if (!backToTopVisible) {
                        backToTopButton.style.display = 'none';
                    }
                }, 150);
            }

            // Navbar handling
            if (currentScrollY > 50) {
                navbar.classList.add('shadow');
                navbar.style.padding = '0.5rem 0';
                navbar.style.backdropFilter = 'blur(15px)';
            } else {
                navbar.classList.remove('shadow');
                navbar.style.padding = '1rem 0';
                navbar.style.backdropFilter = 'blur(10px)';
            }

            // Navbar reste toujours visible
            navbar.style.transform = 'translateY(0)';

            lastScrollY = currentScrollY;
            scrollTicking = false;
        });
        scrollTicking = true;
    }
}

// Event listener unique
window.addEventListener('scroll', handleScroll, { passive: true });

// Back to top click
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
});

// Navigation instantanée
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') {
            window.scrollTo(0, 0);
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo(0, targetElement.offsetTop - 80);
        }
    });
});

// Optimisation du chargement initial
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    document.body.style.opacity = '1';

    // Animation différée mais plus rapide
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 50);
        });
    }, 100);
});

// Interactions boutons optimisées
document.querySelectorAll('.btn').forEach(button => {
    let isHovered = false;

    button.addEventListener('mouseenter', function() {
        if (!isHovered) {
            isHovered = true;
            this.style.transform = 'translateY(-2px) scale(1.02)';
        }
    });

    button.addEventListener('mouseleave', function() {
        if (isHovered) {
            isHovered = false;
            this.style.transform = 'translateY(0) scale(1)';
        }
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