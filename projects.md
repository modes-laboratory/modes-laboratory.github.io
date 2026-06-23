---
title: "Projects"
layout: single
permalink: /projects/
---

The MODES group has been involved in a number of European and industrial projects funded by the EU Framework Programmes and Horizon Europe.

{% assign projects = site.data.projects %}

<ul class="projects-list">
{% for p in projects %}
  <li class="project-item">
    <div class="project-thumb-wrap">
      {% if p.image and p.image != "" %}
        {% if p.link and p.link != "" %}
          <a href="{{ p.link }}" target="_blank" rel="noopener noreferrer">
            <img src="{{ p.image | relative_url }}" alt="{{ p.title }} logo" class="project-thumb">
          </a>
        {% else %}
          <img src="{{ p.image | relative_url }}" alt="{{ p.title }} logo" class="project-thumb">
        {% endif %}
      {% else %}
        <div class="project-thumb project-thumb--placeholder">
          <span>{{ p.title | slice: 0, 2 | upcase }}</span>
        </div>
      {% endif %}
    </div>
    <div class="project-body">
      <h3 class="project-title">
        {% if p.link and p.link != "" %}
          <a href="{{ p.link }}" target="_blank" rel="noopener noreferrer">{{ p.title }}</a>
        {% else %}
          {{ p.title }}
        {% endif %}
        <span class="project-year-range">
          {{ p.year_start }}{% if p.year_end and p.year_end != "" %}–{{ p.year_end }}{% else %}–present{% endif %}
        </span>
        <span class="project-funding-badge">{{ p.funding }}</span>
      </h3>
      <p class="project-summary">
        {% assign text = p.summary | strip %}
        {% assign preview = text | slice: 0, 400 %}
        {{ preview }}
        {% assign rest = text | slice: 400, 100000 %}
        {% if rest and rest != "" %}
          <span class="project-summary-ellipsis">... </span>
          <span class="project-summary-more">{{ rest }}</span>
          <a href="#" class="project-summary-toggle" aria-expanded="false">Read more</a>
        {% endif %}
      </p>
      {% if p.partners %}
        <p class="project-partners"><strong>Partners:</strong> {{ p.partners | join: ", " }}</p>
      {% endif %}
      {% if p.link and p.link != "" %}
        <a href="{{ p.link }}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
          Visit project site <i class="fas fa-external-link-alt" aria-hidden="true"></i>
        </a>
      {% endif %}
    </div>
  </li>
{% endfor %}
</ul>

<script src="{{ '/assets/js/projects-summary.js' | relative_url }}" defer></script>
