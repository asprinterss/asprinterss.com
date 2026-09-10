const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

// Explicit email fallback for mobile browsers where a mailto link is intercepted.
document.querySelectorAll('.email-button, .email-direct a').forEach(link => {
  link.addEventListener('click', function () {
    window.location.href = this.href;
  });
});
