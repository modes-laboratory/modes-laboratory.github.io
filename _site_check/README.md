MODES Lab — Jekyll site
======================

This repository contains a lightweight Jekyll site for the MODES laboratory (Model-Driven Engineering and Software Mining Laboratory). The site uses the Minimal Mistakes theme as a remote theme to get a clean, modern layout.

Local preview
-------------

Requirements: Ruby (2.7+ recommended), Bundler, Jekyll.

Install dependencies:

```bash
cd /Users/juridirocco/MODES-site
bundle install
bundle exec jekyll serve
```

Open http://127.0.0.1:4000 in your browser.

Publishing
----------

You can publish this site on GitHub Pages. If you push to the repository `main` branch and use the included GitHub Actions workflow, the site will be built and deployed automatically.

Next steps / Notes
------------------

- Replace `url` and `email` in `_config.yml` with real values.
- Add bios and photos to the `people.md` page or convert to `_data/people.yml` for structured listing.
- Add project pages and publications (we left placeholders).
