export const getFilters = (filters, tasks) => {
  return `
    <section class="main__filter filter container">
        ${filters.map((filter) => getFilter(filter, tasks)).join(``)}
    </section>
  `;
};

const getFilter = ({title, count, isChecked = false}, tasks) => {
  return `
    <input 
        type="radio" 
        id="filter__${title.toLowerCase()}" 
        class="filter__input visually-hidden" 
        name="filter" 
        ${isChecked ? `checked` : ``}
        ${count(tasks) === 0 ? `disabled` : ``}>
    <label 
        for="filter__${title.toLowerCase()}" 
        class="filter__label">${title} 
            <span 
                class="filter__${title.toLowerCase()}-count">${count(tasks)}
            </span>
    </label>
  `;
};
