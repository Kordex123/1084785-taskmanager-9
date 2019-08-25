export const getFilters = () => {
  const filters = [
    {caption: `All`, count: 13, isChecked: true},
    {caption: `Overdue`, count: 0, isDisabled: true},
    {caption: `Today`, count: 0, isDisabled: true},
    {caption: `Favorites`, count: 1},
    {caption: `Repeating`, count: 1},
    {caption: `Tags`, count: 1},
    {caption: `Archive`, count: 115}
  ];

  return `
    <section class="main__filter filter container">
        ${filters.map((filter) => getFilter(filter)).join(``)}
    </section>
  `;
};

const getFilter = ({caption, count, isChecked = false, isDisabled = false}) => {
  return `
    <input 
        type="radio" 
        id="filter__${caption.toLowerCase()}" 
        class="filter__input visually-hidden" 
        name="filter" 
        ${isChecked ? `checked` : ``}
        ${isDisabled ? `disabled` : ``}>
    <label 
        for="filter__${caption.toLowerCase()}" 
        class="filter__label">${caption} 
            <span 
                class="filter__${caption.toLowerCase()}-count">${count}
            </span>
    </label>
  `;
};
