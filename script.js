// Плавная прокрутка при клике на ссылки меню
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Анимация появления карточек проектов
const projects = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

projects.forEach(project => {
    observer.observe(project);
});

// Анимация появления навыков
const skillCards = document.querySelectorAll('.skill-card');

const skillsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

skillCards.forEach(card => skillsObserver.observe(card));
