---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

You can also find my articles on my [Google Scholar profile](https://scholar.google.com/citations?user=WPFAXNAAAAAJ&hl=en).

{% include base_path %}

## <span style="color: #3b5998">Working Papers </span>

{% for post in site.publications reversed %}
  {% include paper-single-working.html %}
{% endfor %}

## <span style="color: #3b5998">Conference Proceedings</span>

{% for post in site.publications reversed %}
  {% include paper-single-conf.html %}
{% endfor %}

## <span style="color: #3b5998">Journal Publications</span> 

{% for post in site.publications reversed %}
  {% include paper-single-journal.html %}
{% endfor %}
