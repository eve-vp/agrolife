// Animación suave de aparición en scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target); // evita repetir animación
        }
    });
}, {
    threshold: 0.25
});

// observar cada sección
sections.forEach(sec => observer.observe(sec));
