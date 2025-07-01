// Ensure we're using the global tsParticles instance from the CDN
document.addEventListener('DOMContentLoaded', () => {
    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- Navbar Scroll Effect ---
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }
    
    // --- Section Fade-in on Scroll ---
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });


    // --- tsParticles Initialization ---
    // This code runs only if the #tsparticles element exists on the page.
    if (document.getElementById('tsparticles')) {
        tsParticles.load('tsparticles', {
            // Increased particle density and updated color
            particles: {
                number: {
                    value: 160, // Increased density
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff' // Shiny white particles
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 2,
                    random: true,
                    anim: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: false // Disabling lines for a cleaner look
                },
                move: {
                    enable: true,
                    speed: 0.5, // Slower, more ambient movement
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            // Interactivity settings
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'bubble' // A more subtle hover effect
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 150,
                        size: 3,
                        duration: 2,
                        opacity: 0.8
                    },
                    repulse: {
                        distance: 200
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
    
    // --- Smooth Scroll for Contact Button ---
    const contactButton = document.querySelector('.contact-btn');
    if(contactButton) {
        contactButton.addEventListener('click', (e) => {
            e.preventDefault();
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

