document.querySelectorAll('[data-slideshow]').forEach(slideshow => {
  const slides = [...slideshow.querySelectorAll('.slide')];
  const dots = [...slideshow.querySelectorAll('.slide-dot')];
  if (slides.length < 2) return;

  let current = 0;
  const show = index => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
      dot.setAttribute('aria-pressed', String(i === current));
    });
  };

  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
  window.setInterval(() => show(current + 1), 5000);
});
