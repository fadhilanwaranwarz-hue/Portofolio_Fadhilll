/* NAVBAR: mobile toggle */
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* CONTACT FORM (demo, tanpa backend) */
const contactForm = document.getElementById('contactForm');
const submitLabel = document.getElementById('submitLabel');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  submitLabel.textContent = 'Mengirim...';
  setTimeout(() => {
    submitLabel.textContent = 'Terkirim ✓';
    contactForm.reset();
    setTimeout(() => { submitLabel.textContent = 'Kirim Pesan'; }, 2000);
  }, 800);
});

/* FOOTER YEAR */
document.getElementById('year').textContent = new Date().getFullYear();

/* EFEK RIPPLE SAAT TOMBOL DIKLIK */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    this.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});

/* EFEK PANTUL KECIL SAAT KARTU PROYEK DIKLIK */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function () {
    this.style.transform = 'scale(0.98)';
    setTimeout(() => { this.style.transform = ''; }, 150);
  });
});