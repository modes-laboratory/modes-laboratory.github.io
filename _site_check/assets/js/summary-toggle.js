// Toggle "Read more" / "Read less" for project summaries
(function () {
  function initToggles() {
    var toggles = Array.from(document.querySelectorAll('.project-summary-toggle'));
    toggles.forEach(function (el) {
      el.addEventListener('click', function (ev) {
        ev.preventDefault();
        var toggle = ev.currentTarget;
        var parent = toggle.closest('.project-item');
        if (!parent) return;
        var more = parent.querySelector('.project-summary-more');
        var ell = parent.querySelector('.project-summary-ellipsis');
        var expanded = toggle.getAttribute('aria-expanded') === 'true';
        if (more) {
          if (expanded) {
            more.hidden = true;
            if (ell) ell.style.display = '';
            toggle.textContent = 'Read more';
            toggle.setAttribute('aria-expanded', 'false');
          } else {
            more.hidden = false;
            if (ell) ell.style.display = 'none';
            toggle.textContent = 'Read less';
            toggle.setAttribute('aria-expanded', 'true');
          }
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggles);
  } else {
    initToggles();
  }
})();
