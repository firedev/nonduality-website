---
hide_in_sidebar: true
---
<nav aria-label="">
  <ul role="list">
    {% collections.music.resources.each do |doc_page| %}
      {% next if doc_page.data.hide_in_sidebar %}
      <li><a href="{{ doc_page.relative_url }}">
        {{ doc_page.data.title }}
      </a></li>
    {% end %}
  </ul>
</nav>
