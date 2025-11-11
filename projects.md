---
title: "Projects"
layout: single
permalink: /projects/
---

 
The MODES group has been involved in a number of European and industrial projects. Below is a data-driven list of representative projects.

{% assign projects = site.data.projects %}

<ul class="projects-list">
{% for p in projects %}
	<li class="project-item">
		{% if p.image %}
			<img src="{{ p.image | relative_url }}" alt="{{ p.title }} thumbnail" class="project-thumb">
		{% endif %}
		<div class="project-meta">
			<h3 class="project-title"><a href="{{ p.link | relative_url }}">{{ p.title }}</a> <small class="project-year">({{ p.year }})</small></h3>
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
		</div>
	</li>
{% endfor %}
</ul>

<script src="{{ '/assets/js/projects-summary.js' | relative_url }}" defer></script>

If you want individual project pages, I can generate a collection and per-project pages from the same data file.
