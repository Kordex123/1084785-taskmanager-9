export const getBoardFilter = (boardFilters) => {
  return `
    <div class="board__filter-list">
        ${boardFilters.map((filter) =>` 
        <a href="#" class="board__filter">${filter.title}</a>
      `).join(``)}
    </div>
  `;
};
