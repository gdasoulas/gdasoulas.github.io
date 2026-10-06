(() => {
  const tools = document.querySelector('.publication-tools');
  if (!tools) return;
  const papers = [...document.querySelectorAll('[data-publication]')];
  const search = document.querySelector('#publication-search');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  let category = 'all';
  function filter() {
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    papers.forEach(paper => {
      const matches = (category === 'all' || paper.dataset.type === category) && paper.textContent.toLocaleLowerCase().includes(query);
      paper.hidden = !matches;
      if (matches) count++;
    });
    document.querySelector('#publication-count').textContent = `${count} publication${count === 1 ? '' : 's'}`;
    document.querySelector('#no-results').hidden = count !== 0;
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.filter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    filter();
  }));
  search.addEventListener('input', filter);
  tools.hidden = false;
  filter();
})();
