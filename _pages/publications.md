---
# layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
[Working Papers](#working) &nbsp; &nbsp; &nbsp; &nbsp; [Conference Proceedings](#conf) &nbsp; &nbsp; &nbsp; &nbsp; [Journal Publications](#journal)


You can also find my articles on my [Google Scholar profile](https://scholar.google.com/citations?user=WPFAXNAAAAAJ&hl=en).

{% include base_path %}

<!-- ## <span style="color: #3b5998">Working Papers </span> -->
<h2 id="working">
Working Papers
</h2>
{% for post in site.publications reversed %}
  {% include paper-single-working.html %}
{% endfor %}

<!-- ## <span style="color: #3b5998">Conference Proceedings</span> -->
<h2 id="conf">
Conference Proceedings
</h2>
{% for post in site.publications reversed %}
  {% include paper-single-conf.html %}
{% endfor %}

<!-- ## <span style="color: #3b5998">Journal Publications</span>  -->
<h2 id="journal">
Journal Publications
</h2>
{% for post in site.publications reversed %}
  {% include paper-single-journal.html %}
{% endfor %}
