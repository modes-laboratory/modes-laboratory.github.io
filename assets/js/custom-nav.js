document.addEventListener('DOMContentLoaded', function() {
  try {
    var custom = document.querySelector('.custom-top-nav');
    var mast = document.querySelector('.masthead__menu');
    if (custom && mast) {
      // clone to keep server-side copy in body for no-JS users
      var clone = custom.cloneNode(true);
      clone.classList.add('custom-top-nav--masthead');
      // insert after the site title
      var siteTitle = mast.querySelector('.site-title');
      if (siteTitle && siteTitle.parentNode) {
        siteTitle.parentNode.insertBefore(clone, siteTitle.nextSibling);
      } else {
        mast.appendChild(clone);
      }
    }
  } catch (e) {
    console.warn('custom-nav move failed', e);
  }
});
