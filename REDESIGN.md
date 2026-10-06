# Research portfolio redesign

This redesign preserves Jekyll and GitHub Pages. The homepage, publication list, publication details, and CV share a responsive portfolio layout. Existing publication permalinks and about/resume redirects remain intact.

## Content editing

- Homepage: `_pages/about.md`.
- Publications: `_publications/*.md`. Each record has a title, date, venue, author list, type, and optional paper/code links. `duplicate: true` retains the detail URL but hides a duplicate from the index.
- CV: `_pages/cv.md`. The PDF remains explicitly labeled as an archived September 2025 document.
- Design: `assets/css/portfolio.css`; navigation and metadata: `_layouts/portfolio.html`.
- Publication search and category filters: `assets/js/portfolio.js`. All papers remain visible without JavaScript.

## Sources and editorial notes

The supplied Google Scholar screenshots informed eight new records and corrections to ProCyon, TopoBench, the multimodal graph paper, and publication years. Duplicate Scholar versions are represented by one record. Patents remain in the CV. Truncated author lists use “et al.”; citation counts are not displayed because they change over time. Dates used for sorting are not claimed as exact publication days; the site displays years only.

The current Isomorphic Labs role and Switzerland location come from George's public LinkedIn announcement:
https://www.linkedin.com/posts/george-dasoulas-23369786_machinelearning-drugdiscovery-aiforscience-activity-7459978906511675392-SpeV

The exact Isomorphic start date and Merck end date are not verified, so those entries use Current/Previously. Earlier career and education facts come from the existing website. Reference layout: https://valegiunchiglia.github.io/personal_website/ . No reference-site code, images, or biography was copied.

## Local development

Use the repository's existing `bundle install` and `bundle exec jekyll serve` workflow. Local validation was performed with Jekyll 3.10.0 and the configured plugins, installed into a workspace-only Ruby 3.1.4 environment. No dependency manifest changes are required by the redesign.

## Publishing

Review the preview and content, then merge the redesign into the repository's GitHub Pages publishing branch. This work does not publish or push changes automatically.

## October 2026 updates

The publication records now show the TMLR acceptance and August 2026 camera-ready verification for *Better Models, Faster Training*, plus the September 2026 NeurIPS acceptance for *STRAND*. These statuses came directly from George. The homepage news and selected publications use the same records. The Huawei experience now names the Mathematical and Algorithmic Sciences Lab at Huawei Paris Research Center.

Timeline logos are local assets. The black Isomorphic Labs mark came from its official light-background favicon, the Merck & Co. mark from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Merck_Logo.svg), the Harvard shield from Harvard's website, and the white-background NTUA seal from [NTUA's account portal](https://myaccount.ntua.gr/). The Merck SVG viewBox is cropped to its icon for visual centering. The École Polytechnique and Huawei logos were already in this repository. These marks identify affiliations and do not imply institutional endorsement.
