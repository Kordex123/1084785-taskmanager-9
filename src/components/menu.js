export const getMenu = () => {
  const tabs = [
    {id: `new-task`, caption: `+ ADD NEW TASK`},
    {id: `task`, caption: `TASKS`, isChecked: true},
    {id: `statistic`, caption: `STATISTICS`}
  ];
  return `
    <section class="control__btn-wrap">
        ${tabs.map((tab) => getTab(tab)).join(``)}
    </section>
  `;
};

const getTab = ({id, caption, isChecked = false}) => {
  return `
    <input 
        type="radio" 
        name="control" 
        id="control__${id}" 
        class="control__input visually-hidden"
        ${isChecked ? `checked` : ``}>
    <label 
        for="control__${id}" 
        class="control__label control__label--${id}">
        ${caption}
    </label>
  `;
};
