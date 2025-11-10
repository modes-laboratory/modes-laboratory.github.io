---
title: "Publications"
layout: single
permalink: /publications/
---
{% if site.data.publications and site.data.publications.size > 0 %}
{% for pub in site.data.publications %}
- **{{ pub.title }}**, {{ pub.authors }} ({{ pub.year }}). _{{ pub.venue }}_. {% if pub.url %}[PDF]({{ pub.url }}){% endif %}
{% endfor %}
{% else %}
There are no publications listed yet. Please add entries to `_data/publications.yml`.
{% endif %}
