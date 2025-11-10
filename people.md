---
title: "People"
layout: single
permalink: /people/
---

### MODES Lab — Key Personnel


{% for person in site.data.people %}
<article class="person">
	{% if person.image %}
	<img src="{{ person.image | relative_url }}" alt="Photo of {{ person.name }}" class="person-photo">
	{% endif %}

		<div class="person-body">
			<h4 class="person-name">{{ person.name }}</h4>

			<p class="person-role"><strong>Role:</strong> {{ person.role }}</p>

			{% if person.email %}
			<p class="person-email"><a href="mailto:{{ person.email }}">{{ person.email }}</a></p>
			{% endif %}

			<div class="person-bio">{{ person.bio | markdownify }}</div>
		</div>

</article>

---
{% endfor %}

### MODES Lab — Key Personnel

- Lead: Dr. Juri Di Rocco
- Faculty: Prof. Davide Di Ruscio, Prof. Alfonso Pierantonio
- Researchers: Dr. Juri Di Rocco, Dr. Phuong Than Nguyen
- Post-docs, research fellows and students: Dr. Claudio Di Sipio, Dr. Riccardo Rubei, Dr. Damiano Di Vincenzo, Dr. Giordano Tinella

If you would like to be added to the people page with a short bio and photo, please send the details (name, role, short bio, and a square photo) to the contact address on the Contact page.
