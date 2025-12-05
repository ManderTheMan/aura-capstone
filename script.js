// ============================================
// AURA Portfolio JavaScript
// Interactive functionality for the portfolio
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.project-card, .guide-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Active navigation highlight based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.style.color = 'var(--primary-color)';
                } else {
                    navLink.style.color = 'var(--text-dark)';
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Log welcome message to console
    console.log('%c🌟 Welcome to AURA Portfolio! 🌟', 'color: #6366f1; font-size: 20px; font-weight: bold;');
    console.log('%cExplore the GitHub guides to learn while you browse!', 'color: #ec4899; font-size: 14px;');
    console.log('%cCheck out the repository: https://github.com/ManderTheMan/aura-capstone', 'color: #6b7280; font-size: 12px;');
});

// Copy to clipboard functionality for code blocks
function copyToClipboard(button, text) {
    // Update button text to show copying
    const originalText = button.textContent;
    
    // Try modern Clipboard API first (preferred method)
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text)
            .then(() => {
                button.textContent = '✓ Copied!';
                button.classList.add('copied');
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('copied');
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                button.textContent = '✗ Failed';
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            });
    } else {
        // Fallback for older browsers or non-secure contexts
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        
        textarea.select();
        textarea.setSelectionRange(0, 99999);
        
        try {
            document.execCommand('copy');
            button.textContent = '✓ Copied!';
            button.classList.add('copied');
            
            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            button.textContent = '✗ Failed';
            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        }
        
        document.body.removeChild(textarea);
    }
}

// Add typing effect to hero title (optional enhancement)
function typeEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }

    // Uncomment to enable typing effect
    // type();
}

// Parallax effect for hero section (optional enhancement)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroIllustration = document.querySelector('.hero-illustration');
    
    if (heroIllustration) {
        const parallax = scrolled * 0.5;
        heroIllustration.style.transform = `translateY(${-50 + parallax * 0.1}%)`;
    }
});

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    // Add rainbow effect to the page
    document.body.style.animation = 'rainbow 5s linear infinite';
    
    // Add CSS for rainbow animation if not already present
    if (!document.getElementById('easter-egg-style')) {
        const style = document.createElement('style');
        style.id = 'easter-egg-style';
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    // Show celebration message
    const message = document.createElement('div');
    message.textContent = '🎉 You found the secret! 🎉';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #6366f1, #ec4899);
        color: white;
        padding: 2rem 3rem;
        border-radius: 16px;
        font-size: 2rem;
        font-weight: bold;
        z-index: 9999;
        animation: fadeIn 0.5s ease;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
    `;
    document.body.appendChild(message);

    // Remove message and effect after 3 seconds
    setTimeout(() => {
        message.remove();
        document.body.style.animation = '';
    }, 3000);

    console.log('%c🎮 Konami Code Activated! You are a true GitHub explorer! 🎮', 'color: #ec4899; font-size: 16px; font-weight: bold;');
}

// Performance optimization: Lazy load images (for future use)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    // Usage: Add data-src attribute to images and class 'lazy-load'
    document.querySelectorAll('img.lazy-load').forEach(img => {
        imageObserver.observe(img);
    });
}

// Smooth reveal for sections on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    revealOnScroll();
    
    // Add a subtle fade-in effect to the entire page
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Console art for fun!
console.log(`
    ___   __  __ ___    ___ 
   / _ | / / / // _ \\  / _ |
  / __ |/ /_/ // , _/ / __ |
 /_/ |_|\\____//_/|_| /_/ |_|
                            
 Data Science Portfolio & GitHub Learning Hub
 Built with ❤️ for learning and sharing
 
 🌟 Tips:
 - Try the Konami code: ↑↑↓↓←→←→BA
 - Explore the GitHub guides section
 - Fork this repo to create your own portfolio!
`);
