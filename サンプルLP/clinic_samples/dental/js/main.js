const header = document.getElementById('header');
const floatingCta = document.getElementById('floating-cta');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
    floatingCta.classList.add('visible');
  } else {
    header.classList.remove('scrolled');
    floatingCta.classList.remove('visible');
  }
});

const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
fadeElements.forEach(el => observer.observe(el));

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  header.classList.add('scrolled');
});
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-q').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.classList.add('open');
    }
  });
});

function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.textContent = '✓ 送信完了！後ほどご連絡いたします。';
  btn.style.background = '#0EA5A0';
  btn.disabled = true;
}
