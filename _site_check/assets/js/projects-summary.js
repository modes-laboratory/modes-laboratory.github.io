document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.project-summary-toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var toggle = e.currentTarget;
      // find the .project-summary parent
      var p = toggle.closest('.project-summary');
      if (!p) return;
      var more = p.querySelector('.project-summary-more');
      var ell = p.querySelector('.project-summary-ellipsis');
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        // collapse
        p.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Read more';
      } else {
        // expand
        p.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.textContent = 'Read less';
      }
    });
  });
});
