export const getBoardFilter = () => {
  const filters = [
    {caption: `SORT BY DAFAULT`},
    {caption: `SORT BY DATE up`},
    {caption: `SORT BY DATE down`}];
  return `
    <div class="board__filter-list">
        ${filters.map((filter) =>` 
        <a href="#" class="board__filter">${filter.caption}</a>
      `).join(``)}
    </div>
  `;
};
