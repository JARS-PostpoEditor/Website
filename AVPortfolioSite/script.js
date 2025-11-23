// ===================================
// Translations
// ===================================
const translations = {
    en: {
        nav_home: 'Home',
        nav_about: 'About',
        nav_portfolio: 'Portfolio',
        nav_contact: 'Contact',
        hero_subtitle: 'Audiovisual Post-Production Artist',
        hero_description: 'Transforming raw footage into cinematic masterpieces',
        hero_cta: 'View My Work',
        about_title: 'About Me',
        about_heading: 'Creative Vision Meets Technical Expertise',
        about_text1: 'With years of experience in audiovisual post-production, I specialize in bringing creative visions to life through meticulous attention to detail and cutting-edge techniques. From color grading that sets the perfect mood to stunning visual effects that captivate audiences, I transform raw footage into compelling stories.',
        about_text2: 'My passion lies in pushing the boundaries of what\'s possible in post-production, combining artistic sensibility with technical mastery to deliver exceptional results.',
        skills_title: 'Software & Tools',
        portfolio_title: 'Portfolio',
        portfolio_subtitle: 'Selected Works',
        contact_title: 'Get In Touch',
        contact_subtitle: 'Let\'s create something amazing together',
        contact_heading: 'Contact Information',
        social_follow: 'Follow Me',
        form_name: 'Your Name',
        form_email: 'Your Email',
        form_message: 'Your Message',
        form_submit: 'Send Message',
        footer_copyright: '© 2025 Audiovisual Post-Production Portfolio. All rights reserved.',
        footer_github: 'View on GitHub',
        form_success: 'Thank you for your message! I\'ll get back to you soon.',
        form_error_empty: 'Please fill in all fields.',
        form_error_email: 'Please enter a valid email address.'
    },
    es: {
        nav_home: 'Inicio',
        nav_about: 'Acerca de',
        nav_portfolio: 'Portafolio',
        nav_contact: 'Contacto',
        hero_subtitle: 'Artista de Post-Producción Audiovisual',
        hero_description: 'Transformando metraje en obras maestras cinematográficas',
        hero_cta: 'Ver Mi Trabajo',
        about_title: 'Acerca de Mí',
        about_heading: 'Visión Creativa Conjuntada con Experiencia Técnica',
        about_text1: 'Con años de experiencia en post-producción audiovisual, me especializo en llevar visiones creativas a la vida con atención meticulosa a los detalles y técnicas de vanguardia. Desde corrección de color que establece el estado de ánimo perfecto hasta efectos visuales impresionantes que cautivan a las audiencias, transformo metraje en historias convincentes.',
        about_text2: 'Mi pasión radica en empujar los límites de lo posible en post-producción, combinando sensibilidad artística con dominio técnico para entregar resultados excepcionales.',
        skills_title: 'Software y Herramientas',
        portfolio_title: 'Portafolio',
        portfolio_subtitle: 'Trabajos Seleccionados',
        contact_title: 'Ponte en Contacto',
        contact_subtitle: 'Creemos algo extraordinario juntos',
        contact_heading: 'Información de Contacto',
        social_follow: 'Sígueme',
        form_name: 'Tu Nombre',
        form_email: 'Tu Email',
        form_message: 'Tu Mensaje',
        form_submit: 'Enviar Mensaje',
        footer_copyright: '© 2025 Portafolio de Post-Producción Audiovisual. Todos los derechos reservados.',
        footer_github: 'Ver en GitHub',
        form_success: '¡Gracias por tu mensaje! Te contactaré pronto.',
        form_error_empty: 'Por favor completa todos los campos.',
        form_error_email: 'Por favor ingresa una dirección de correo válida.'
    }
};

// ===================================
// Language Management
// ===================================
let currentLanguage = localStorage.getItem('portfolio-language') || 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('portfolio-language', lang);
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'BUTTON' && element.hasAttribute('data-lang')) {
                // Skip language buttons
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update language button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// Initialize language on page load
window.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
    
    // Add language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});

// ===================================
// Project Data
// ===================================
const projects = [
    {
        id: 1,
        title: 'Cinematic Short Film',
        description: 'A visually stunning short film showcasing advanced color grading techniques and seamless VFX integration. This project demonstrates mood creation through precise color correction and atmospheric effects.',
        tags: ['Color Grading', 'VFX', 'Editing'],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: 'assets/images/project1-thumb.jpg'
    },
    {
        id: 2,
        title: 'Music Video Production',
        description: 'High-energy music video featuring dynamic editing, motion graphics, and creative transitions. The project combines rhythm-based cuts with innovative visual effects to enhance the musical experience.',
        tags: ['Editing', 'Motion Graphics', 'Color Grading'],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: 'assets/images/project2-thumb.jpg'
    },
    {
        id: 3,
        title: 'Commercial Advertisement',
        description: 'Professional commercial featuring advanced compositing and visual effects. Multiple elements were seamlessly integrated to create a compelling narrative that highlights the product in a unique way.',
        tags: ['VFX', 'Compositing', 'Motion Graphics'],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: 'assets/images/project3-thumb.jpg'
    },
    {
        id: 4,
        title: 'Documentary Feature',
        description: 'Feature-length documentary with cinematic color grading and careful editing to maintain narrative flow. The project required balancing interview footage with b-roll to create an engaging story.',
        tags: ['Color Grading', 'Editing', 'Audio Mixing'],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: 'assets/images/project4-thumb.jpg'
    },
    {
        id: 5,
        title: 'Motion Graphics Reel',
        description: 'Showcase of motion graphics work including title animations, lower thirds, and dynamic infographics. The reel demonstrates proficiency in creating engaging animated content.',
        tags: ['Motion Graphics', 'Animation', 'Compositing'],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: 'assets/images/project5-thumb.jpg'
    },
    {
        id: 6,
        title: 'VFX Breakdown',
        description: 'Detailed breakdown of complex visual effects work including green screen compositing, CGI integration, and environmental effects. The video showcases before and after comparisons of various VFX techniques.',
        tags: ['VFX', 'Compositing', 'Color Grading'],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: 'assets/images/project6-thumb.jpg'
    }
];

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// ===================================
// Mobile Navigation Toggle
// ===================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ===================================
// Navbar Background on Scroll
// ===================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// Portfolio Modal Functionality
// ===================================
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Open modal when clicking portfolio item
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = parseInt(item.getAttribute('data-project'));
        const project = projects.find(p => p.id === projectId);
        
        if (project) {
            openModal(project);
        }
    });
});

// Function to open modal with project data
function openModal(project) {
    const videoContainer = document.getElementById('videoContainer');
    const projectTitle = document.getElementById('projectTitle');
    const projectDescription = document.getElementById('projectDescription');
    const projectTags = document.getElementById('projectTags');

    // Set video
    videoContainer.innerHTML = `
        <iframe 
            src="${project.videoUrl}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;

    // Set project details
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;

    // Set tags
    projectTags.innerHTML = '';
    project.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.textContent = tag;
        projectTags.appendChild(tagElement);
    });

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Clear video to stop playback
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = '';
}

// Close modal when clicking close button
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// Close modal when clicking outside content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (!name || !email || !message) {
            showFormMessage(translations[currentLanguage].form_error_empty, 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage(translations[currentLanguage].form_error_email, 'error');
            return;
        }

        // Simulate form submission (client-side only)
        console.log('Form submitted:', { name, email, message });

        // Show success message
        showFormMessage(translations[currentLanguage].form_success, 'success');

        // Reset form
        contactForm.reset();
    });
}

// Function to show form message
function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Set thumbnail images for portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        const projectId = parseInt(item.getAttribute('data-project'));
        const project = projects.find(p => p.id === projectId);
        
        if (project && project.thumbnail) {
            const thumbnailElement = item.querySelector('.thumbnail-placeholder');
            if (thumbnailElement) {
                thumbnailElement.style.backgroundImage = `url('${project.thumbnail}')`;
                thumbnailElement.style.backgroundSize = 'cover';
                thumbnailElement.style.backgroundPosition = 'center';
            }
        }
    });
    
    const animateElements = document.querySelectorAll('.portfolio-item, .skill-item, .about-content');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// ===================================
// Parallax Effect for Hero Section (Optional Enhancement)
// ===================================
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero && window.scrollY < window.innerHeight) {
        const scrolled = window.scrollY;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===================================
// Loading Animation
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});
