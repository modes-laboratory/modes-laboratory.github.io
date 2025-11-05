---
title: "News"
layout: single
permalink: /news/
---

 
News, announcements and events from the MODES laboratory will be posted here. Use this page to share calls, workshop information, and important updates.
{% assign news = site.data.news | sort: 'date' | reverse %}

<div class="news-list">
	{% if news and news.size > 0 %}
		{% for item in news %}
			<article class="news-item">
				<header>
					<h2 class="news-title"><a href="{{ item.link | relative_url }}">{{ item.title }}</a></h2>
					<time datetime="{{ item.date }}" class="news-date">{{ item.date | date: "%-d %B %Y" }}</time>
				</header>
				<p class="news-summary">{{ item.summary }}</p>
				{% if item.tags %}
					<p class="news-tags">{% for t in item.tags %}<span class="tag">{{ t }}</span>{% unless forloop.last %}, {% endunless %}{% endfor %}</p>
				{% endif %}
			</article>
		{% endfor %}
	{% else %}
		<p>No news yet — check back soon.</p>
	{% endif %}
</div>
