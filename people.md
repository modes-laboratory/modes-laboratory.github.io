---
title: "People"
layout: single
permalink: /people/
---

### MODES Lab — Key Personnel


{% for person in site.data.people %}
#### {{ person.name }}

**Role:** {{ person.role }}

{% if person.email %}Email: [{{ person.email }}](mailto:{{ person.email }}){% endif %}

{{ person.bio }}

---
{% endfor %}

### MODES Lab — Key Personnel

- Lead: Dr. Juri Di Rocco
- Faculty: Prof. Davide Di Ruscio, Prof. Alfonso Pierantonio
- Researchers: Dr. Juri Di Rocco, Dr. Phuong Than Nguyen
- Post-docs, research fellows and students: Dr. Claudio Di Sipio, Dr. Riccardo Rubei, Dr. Damiano Di Vincenzo, Dr. Giordano Tinella

If you would like to be added to the people page with a short bio and photo, please send the details (name, role, short bio, and a square photo) to the contact address on the Contact page.
