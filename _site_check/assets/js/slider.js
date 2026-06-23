/* Lightweight slideshow for homepage
   - Reads DOM slides rendered server-side
   - Auto-advances, supports prev/next and dots
*/
(function () {
  var container = document.querySelector('.site-slider');
  if (!container) return;

  var slides = Array.from(container.querySelectorAll('.slide'));
  var prevBtn = container.querySelector('.slide-prev');
  var nextBtn = container.querySelector('.slide-next');
  var dots = Array.from(container.querySelectorAll('.slide-dot'));
  var wrapper = container.querySelector('.slides-wrapper');
  var current = 0;
  var interval = 6000; // ms
  var timer = null;

  function show(idx) {
    if (!slides.length) return;
    current = (idx + slides.length) % slides.length;
    slides.forEach(function (s, i) {
      if (i === current) {
        s.classList.add('active');
        s.setAttribute('aria-hidden', 'false');
        // ensure inline styles match visibility so CSS overrides don't block transitions
        try { s.style.opacity = '1'; s.style.zIndex = '2'; } catch (e) {}
      } else {
        s.classList.remove('active');
        s.setAttribute('aria-hidden', 'true');
        try { s.style.opacity = '0'; s.style.zIndex = '1'; } catch (e) {}
      }
    });
    dots.forEach(function (d, i) { d.classList.toggle('active', i === current); });
  }

  function next() { show(current + 1); }
  function prev() { show(current - 1); }

  nextBtn && nextBtn.addEventListener('click', function (e) { e.preventDefault(); next(); resetTimer(); });
  prevBtn && prevBtn.addEventListener('click', function (e) { e.preventDefault(); prev(); resetTimer(); });

  dots.forEach(function (d) {
    d.addEventListener('click', function (e) { e.preventDefault(); var idx = parseInt(d.dataset.index, 10); show(idx); resetTimer(); });
  });

  function startTimer() {
    timer = setInterval(next, interval);
  }
  function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }
  function resetTimer() { stopTimer(); startTimer(); }

  // initialize
  // ensure slides have the expected positioning even if CSS is overridden
  slides.forEach(function (s, i) {
    try {
      s.style.position = 'absolute';
      s.style.left = '0';
      s.style.top = '0';
      s.style.right = '0';
      s.style.bottom = '0';
      s.style.transition = 'opacity 600ms ease';
      s.style.zIndex = (s.classList.contains('active')) ? '2' : '1';
      s.style.opacity = (s.classList.contains('active')) ? '1' : '0';
    } catch (e) {
      // ignore DOM exceptions in older browsers
    }
  });
  show(0);
  startTimer();

  // pause on hover/touch
  container.addEventListener('mouseenter', stopTimer);
  container.addEventListener('mouseleave', startTimer);
  // keyboard navigation: left/right arrows
  function onKeydown(e) {
    if (e.key === 'ArrowLeft') { prev(); resetTimer(); }
    if (e.key === 'ArrowRight') { next(); resetTimer(); }
  }
  document.addEventListener('keydown', onKeydown);

  // cleanup on page unload (good practice)
  window.addEventListener('unload', function () {
    stopTimer();
    document.removeEventListener('keydown', onKeydown);
  });
})();
