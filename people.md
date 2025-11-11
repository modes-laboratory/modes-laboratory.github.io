---
title: "People"
layout: single
permalink: /people/
---

### MODES Lab — Team

<div class="people-grid">
{% for person in site.data.people %}
    
	<article class="person">
		{% if person.photo and person.photo != "" %}
			<div class="person-photo-wrap">
				<img src="{{ person.photo | relative_url }}" alt="Photo of {{ person.name }}" class="person-photo">
			</div>
		{% endif %}

		<h3 class="person-name">{{ person.name }}</h3>
		{% if person.role %}
			<p class="person-role">{{ person.role }}</p>
		{% endif %}

		<div class="person-meta">
			{% if person.email %}
				<a class="person-contact" href="mailto:{{ person.email }}" title="Email {{ person.name }}"><i class="fas fa-envelope" aria-hidden="true"></i><span class="visually-hidden">Email</span></a>
			{% endif %}
			{% if person.url %}
				<a class="person-contact" href="{{ person.url }}" target="_blank" rel="noopener noreferrer" title="Website"><i class="fas fa-link" aria-hidden="true"></i><span class="visually-hidden">Website</span></a>
			{% endif %}
			{% if person.twitter %}
				<a class="person-contact" href="{{ person.twitter }}" target="_blank" rel="noopener noreferrer" title="Twitter"><i class="fab fa-twitter" aria-hidden="true"></i><span class="visually-hidden">Twitter</span></a>
			{% endif %}
			{% if person.github %}
				<a class="person-contact" href="{{ person.github }}" target="_blank" rel="noopener noreferrer" title="GitHub"><i class="fab fa-github" aria-hidden="true"></i><span class="visually-hidden">GitHub</span></a>
			{% endif %}
            
		</div>

			
	</article>
    
{% endfor %}
</div>
