---
layout: portfolio
title: Publications
permalink: /publications/
---
<p class="section-intro">Research in geometric deep learning, foundation models, and AI for biology. <a href="https://scholar.google.com/citations?user=WPFAXNAAAAAJ">Google Scholar ↗</a></p>
<div class="publication-tools" hidden><label for="publication-search">Search publications</label><input id="publication-search" type="search" placeholder="Search title, author, or venue…"><div class="filters" role="group" aria-label="Filter publications"><button type="button" data-filter="all" aria-pressed="true">All</button><button type="button" data-filter="conference" aria-pressed="false">Conferences</button><button type="button" data-filter="journal" aria-pressed="false">Journals</button><button type="button" data-filter="working" aria-pressed="false">Preprints</button><button type="button" data-filter="thesis" aria-pressed="false">Thesis</button></div><p id="publication-count" role="status" aria-live="polite"></p></div>
{% assign papers = site.publications | where_exp: 'paper', 'paper.duplicate != true' | sort: 'date' | reverse %}
{% for post in papers %}{% include portfolio-paper.html %}{% endfor %}
<p id="no-results" hidden>No publications match your search. Try another keyword or category.</p>
