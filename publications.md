---
title: "Publications"
layout: single
permalink: /publications/
---

Publications by MODES Lab members from 2021 onwards. For a complete list, see the individual Google Scholar profiles of [Juri Di Rocco](https://scholar.google.com/citations?user=PNagLbIAAAAJ), [Davide Di Ruscio](https://scholar.google.com/citations?user=Pn0T4rQAAAAJ), [Alfonso Pierantonio](https://scholar.google.com/citations?user=JVTAEMMAAAAJ), and [Phuong T. Nguyen](https://scholar.google.com/citations?user=vxFDCLUAAAAJ).

{% assign years = site.data.publications | map: "year" | uniq | sort | reverse %}

{% for year in years %}
<section class="pub-year-section">
  <h2 class="pub-year-heading">{{ year }}</h2>
  <ul class="pub-list">
  {% for pub in site.data.publications %}
    {% if pub.year == year %}
    <li class="pub-item pub-item--{{ pub.type }}">
      <div class="pub-meta-bar">
        <span class="pub-type-badge pub-type-badge--{{ pub.type }}">
          {% if pub.type == "journal" %}Journal{% elsif pub.type == "conference" %}Conference{% elsif pub.type == "workshop" %}Workshop{% elsif pub.type == "book_chapter" %}Book Chapter{% else %}{{ pub.type }}{% endif %}
        </span>
        {% if pub.award %}
          <span class="pub-award-badge"><i class="fas fa-award" aria-hidden="true"></i> {{ pub.award }}</span>
        {% endif %}
      </div>
      <p class="pub-title">
        {% if pub.url %}
          <a href="{{ pub.url }}" target="_blank" rel="noopener noreferrer">{{ pub.title }}</a>
        {% else %}
          {{ pub.title }}
        {% endif %}
      </p>
      <p class="pub-authors">{{ pub.authors }}</p>
      <p class="pub-venue">{{ pub.venue }}</p>
    </li>
    {% endif %}
  {% endfor %}
  </ul>
</section>
{% endfor %}
