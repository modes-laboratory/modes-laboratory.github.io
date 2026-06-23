---
title: "MODES Lab"
layout: single
permalink: /
---

<section class="site-hero">
  <div class="site-hero__inner">
    <div class="site-hero__eyebrow">University of L'Aquila</div>
    <h1 class="site-hero__title">Model-Driven Engineering<br><span>&amp; Software Mining</span></h1>
    <p class="site-hero__lead">MODES Lab develops intelligent tools and techniques that combine Model-Driven Engineering, software mining, and machine learning to advance software development at scale.</p>
    <div class="site-hero__actions">
      <a href="/research/" class="btn btn-primary">Our Research</a>
      <a href="/people/" class="btn btn-outline">Meet the Team</a>
    </div>
  </div>
</section>

<div class="stat-strip">
  <div class="stat-strip__inner">
    <div class="stat-item">
      <span class="stat-value">8+</span>
      <span class="stat-label">Researchers</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">9</span>
      <span class="stat-label">EU Projects</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">500+</span>
      <span class="stat-label">Publications</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">18+</span>
      <span class="stat-label">Years Active</span>
    </div>
  </div>
</div>

<div class="site-main__inner">

{% include slider.html %}

<section class="home-section">
  <div class="home-section__header">
    <div class="section-label">About</div>
    <h2 class="home-section__title">Who We Are</h2>
    <p class="home-section__lead">A leading research group in Model-Driven Engineering at the University of L'Aquila.</p>
  </div>
  <p>The MODES laboratory (Model-Driven Engineering and Software Mining Laboratory) is one of the most active international research groups in Model-Driven Engineering. It is led by four faculty members — Juri Di Rocco (RTD/B), Davide Di Ruscio (Full Professor), Alfonso Pierantonio (Full Professor), and Phuong T. Nguyen (Associate Professor) — together with postdoctoral researchers and PhD students at the Department of Information Engineering, Computer Science and Mathematics (DISIM) of the University of L'Aquila.</p>
  <p>The group has participated in nine EU-funded projects — including MANCOOSI, OSSMETER, CROSSMINER, TYPHON, LOWCOMOTE, LEARNPAD, EMELIOT, MOSAICO, and AIM-PRO — and in industrial collaborations with organizations such as Rete Ferroviaria Italiana. Faculty hold editorial roles at SoSyM, JOT, Software Quality Journal, IEEE Software, and Applied Intelligence, and have received over 15 best-paper awards at venues including MODELS, ICSE, JSS, EASE, and SEAA.</p>
  <a href="/research/" class="home-section__more">Explore our research lines <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
</section>

<section class="home-section">
  <div class="home-section__header">
    <div class="section-label">Latest</div>
    <h2 class="home-section__title">News &amp; Updates</h2>
  </div>
  <div class="news-list">
  {% for item in site.data.news limit:3 %}
    <article class="news-item">
      <time class="news-date" datetime="{{ item.date }}">{{ item.date | date: "%B %-d, %Y" }}</time>
      <h3 class="news-title">{{ item.title }}</h3>
      <p class="news-summary">{{ item.summary }}</p>
      {% if item.tags %}
      <div class="news-tags">
        {% for tag in item.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
      </div>
      {% endif %}
    </article>
  {% endfor %}
  </div>
  <a href="/news/" class="home-section__more">All news <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
</section>

<section class="home-section">
  <div class="home-section__header">
    <div class="section-label">Team</div>
    <h2 class="home-section__title">People</h2>
    <p class="home-section__lead">Faculty, researchers and PhD students working at MODES Lab.</p>
  </div>
  <div class="people-grid">
  {% for person in site.data.people limit:5 %}
    <article class="person">
      {% if person.photo and person.photo != "" %}
        <div class="person-photo-wrap">
          <img src="{{ person.photo | relative_url }}" alt="Photo of {{ person.name }}" class="person-photo" loading="lazy">
        </div>
      {% endif %}
      <h3 class="person-name">{{ person.name }}</h3>
      {% if person.role %}<p class="person-role">{{ person.role }}</p>{% endif %}
      <div class="person-meta">
        {% if person.url %}<a class="person-contact" href="{{ person.url }}" target="_blank" rel="noopener noreferrer" title="Website"><i class="fas fa-link" aria-hidden="true"></i></a>{% endif %}
        {% if person.email %}<a class="person-contact" href="mailto:{{ person.email }}" title="Email {{ person.name }}"><i class="fas fa-envelope" aria-hidden="true"></i></a>{% endif %}
      </div>
    </article>
  {% endfor %}
  </div>
  <a href="/people/" class="home-section__more">Full team <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
</section>

</div>
