'use strict';

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

const getMenu = () => {
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

const getSearch = () => {
  return `
    <section class="main__search search container">
      <input 
          type="text" 
          id="search__input" 
          class="search__input" 
          placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE">
      <label 
          class="visually-hidden" 
          for="search__input">
          Search
      </label>
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

const getFilters = () => {
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

const getBoardFilter = () => {
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

const getCard = (card) => {
  return `
    <article 
      class="card card--${card.color}
      ${card.isRepeat ? `card--repeat` : ``}
      ${card.isDeadline ? `card--deadline` : ``}
    ">
        ${getCardForm(card)}          
    </article>
  `;
};

const getCardForm = (card) => {
  return ` 
    <div class="card__form">
      <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive">
              archive
            </button>
            <button type="button" class="card__btn card__btn--favorites card__btn--disabled">
              favorites
            </button>
          </div>
  
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>
         
            ${getCardMessage(card)}
            ${getCardSettings(card)}
      </div>
    </div>
  `;
};

const getCardSettings = ({isDate = ``, isHashtag = ``}) => {
  return `
    <div class="card__settings">
      <div class="card__details">
        ${isDate ? `        
            <div class="card__dates">
              <div class="card__date-deadline">
                <p class="card__input-deadline-wrap">
                  <span class="card__date">23 September</span>
                  <span class="card__time">11:15 PM</span>
                </p>
              </div> 
          </div>
        ` : ``}
  
          ${isHashtag ? ` 
            <div class="card__hashtag">
                <div class="card__hashtag-list">
                  <span class="card__hashtag-inner">
                    <span class="card__hashtag-name">
                      #todo
                    </span>
                  </span>
        
                  <span class="card__hashtag-inner">
                    <span class="card__hashtag-name">
                      #personal
                    </span>
                  </span>
        
                  <span class="card__hashtag-inner">
                    <span class="card__hashtag-name">
                      #important
                    </span>
                  </span>
                </div>
              </div>
          ` : ``}
      </div>
    </div>
  `;
};

const getCardMessage = ({message}) => {
  return `
    <div class="card__textarea-wrap">
        <p class="card__text">${message}</p>
    </div>
  `;
};

const getLoadButton = () => {
  return `
    <button 
      class="load-more" 
      type="button">
      load more
    </button>
  `;
};

const getBoard = () => {
  const cards = [
    {
      color: `black`,
      isRepeat: false,
      isDeadline: false,
      message: `Example default task with default color.`,
      isDate: true,
      isHashtag: true
    },
    {
      color: `yellow`,
      isRepeat: false,
      isDeadline: false,
      message: `Example default task with custom color and without date.`,
      isDate: false,
      isHashtag: true
    },
    {
      color: `red`,
      isRepeat: false,
      isDeadline: true,
      message: `This is card with missing deadline.`,
      isDate: false,
      isHashtag: false
    }];
  return `
    <section class="board container">
        ${getBoardFilter()}
        <div class="board__tasks">
            ${getCardEdit(cards)}
            ${cards.map((card) => getCard(card)).join(``)}
        </div>
        ${getLoadButton()}
    </section>
  `;
};

const getCardEdit = ({color, isRepeat = false, isDeadline = false}) => {
  return `
    <article 
        class="card card--edit card--${color} 
        ${isRepeat ? `card--repeat` : ``}
        ${isDeadline ? `card--deadline` : ``}
    ">
        ${getEditCardForm()}
    </article>
  `;
};

const getEditCardForm = () => {
  return `
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button type="button" class="card__btn card__btn--favorites card__btn--disabled">
            favorites
          </button>
        </div>

        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        <div class="card__textarea-wrap">
          <label>
            <textarea class="card__text" placeholder="Start typing your text here..." name="text">Here is a card with filled data</textarea>
          </label>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">yes</span>
              </button>

              <fieldset class="card__date-deadline">
                <label class="card__input-deadline-wrap">
                  <input class="card__date" type="text" placeholder="" name="date" value="23 September 11:15 PM">
                </label>
              </fieldset>

              <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">yes</span>
              </button>

              <fieldset class="card__repeat-days">
                <div class="card__repeat-days-inner">
                  <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-mo-4" name="repeat" value="mo">
                  <label class="card__repeat-day" for="repeat-mo-4">mo</label>
                  <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-tu-4" name="repeat" value="tu" checked="">
                  <label class="card__repeat-day" for="repeat-tu-4">tu</label>
                  <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-we-4" name="repeat" value="we">
                  <label class="card__repeat-day" for="repeat-we-4">we</label>
                  <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-th-4" name="repeat" value="th">
                  <label class="card__repeat-day" for="repeat-th-4">th</label>
                  <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-fr-4" name="repeat" value="fr" checked="">
                  <label class="card__repeat-day" for="repeat-fr-4">fr</label>
                  <input class="visually-hidden card__repeat-day-input" type="checkbox" name="repeat" value="sa" id="repeat-sa-4">
                  <label class="card__repeat-day" for="repeat-sa-4">sa</label>
                  <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-su-4" name="repeat" value="su" checked="">
                  <label class="card__repeat-day" for="repeat-su-4">su</label>
                </div>
              </fieldset>
            </div>

            <div class="card__hashtag">
              <div class="card__hashtag-list">
                <span class="card__hashtag-inner">
                  <input type="hidden" name="hashtag" value="repeat" class="card__hashtag-hidden-input">
                  <p class="card__hashtag-name">
                    #repeat
                  </p>
                  <button type="button" class="card__hashtag-delete">
                    delete
                  </button>
                </span>

                <span class="card__hashtag-inner">
                  <input type="hidden" name="hashtag" value="repeat" class="card__hashtag-hidden-input">
                  <p class="card__hashtag-name">
                    #cinema
                  </p>
                  <button type="button" class="card__hashtag-delete">
                    delete
                  </button>
                </span>

                <span class="card__hashtag-inner">
                  <input type="hidden" name="hashtag" value="repeat" class="card__hashtag-hidden-input">
                  <p class="card__hashtag-name">
                    #entertaiment
                  </p>
                  <button type="button" class="card__hashtag-delete">
                    delete
                  </button>
                </span>
              </div>

              <label>
                <input type="text" class="card__hashtag-input" name="hashtag-input" placeholder="Type new hashtag here">
              </label>
            </div>
          </div>

          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              <input type="radio" id="color-black-4" class="card__color-input card__color-input--black visually-hidden" name="color" value="black">
              <label for="color-black-4" class="card__color card__color--black">black</label>
              <input type="radio" id="color-yellow-4" class="card__color-input card__color-input--yellow visually-hidden" name="color" value="yellow" checked="">
              <label for="color-yellow-4" class="card__color card__color--yellow">yellow</label>
              <input type="radio" id="color-blue-4" class="card__color-input card__color-input--blue visually-hidden" name="color" value="blue">
              <label for="color-blue-4" class="card__color card__color--blue">blue</label>
              <input type="radio" id="color-green-4" class="card__color-input card__color-input--green visually-hidden" name="color" value="green">
              <label for="color-green-4" class="card__color card__color--green">green</label>
              <input type="radio" id="color-pink-4" class="card__color-input card__color-input--pink visually-hidden" name="color" value="pink">
              <label for="color-pink-4" class="card__color card__color--pink">pink</label>
            </div>
          </div>
        </div>

        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  `;
};

const mainSection = document.querySelector(`.main`);
const mainControlSection = document.querySelector(`.main__control`);

const renderComponent = (container, template, position = `beforeend`) => {
  container.insertAdjacentHTML(position, template);
};

renderComponent(mainControlSection, getMenu());
renderComponent(mainSection, getSearch());
renderComponent(mainSection, getFilters());
renderComponent(mainSection, getBoard());

