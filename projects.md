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
			<p class="project-summary">{{ p.summary }}</p>
			{% if p.partners %}
				<p class="project-partners"><strong>Partners:</strong> {{ p.partners | join: ", " }}</p>
			{% endif %}
		</div>
	</li>
{% endfor %}
</ul>

If you want individual project pages, I can generate a collection and per-project pages from the same data file.
