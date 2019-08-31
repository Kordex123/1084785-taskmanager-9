import {COLORS} from "./task-data";

export const getEditCard = (editCard) => {
  return `
    <article 
        class="card card--edit card--${editCard.color} 
        ${Object.keys(editCard.repeatingDays).some((day) => editCard.repeatingDays[day]) ? `card--repeat` : ``}
        ${editCard.isDeadline ? `card--deadline` : ``}
    ">
        ${getEditCardForm(editCard)}
    </article>
  `;
};
const getEditCardForm = (editCard) => {
  return `
    <form class="card__form" method="get">
      <div class="card__inner">
        ${getEditCardControl(editCard)}
        ${getEditCardColorBar()}
        ${getEditCardTextArea(editCard)}
        ${getEditCardSettings(editCard)}
        ${getEditCardStatus()}
      </div>
    </form>
  `;
};

const getEditCardControl = ({isDisabled}) => {
  return `
    <div class="card__control">
      <button 
        type="button" 
        class="card__btn card__btn--archive ${isDisabled ? `card__btn--disabled` : ``}">
        archive
      </button>
      <button type="button" 
        class="card__btn card__btn--favorites ${isDisabled ? `card__btn--disabled` : ``}">
        favorites
      </button>
    </div>
  `;
};

const getEditCardColorBar = () => {
  return `
    <div class="card__color-bar">
      <svg 
        class="card__color-bar-wave" 
        width="100%" 
        height="10">
            <use xlink:href="#wave"></use>
      </svg>
    </div>
  `;
};

const getEditCardTextArea = ({description}) => {
  return `
    <div class="card__textarea-wrap">
      <label>
        <textarea 
          class="card__text" 
          placeholder="Start typing your text here..." 
          name="text">
          ${description}
        </textarea>
      </label>
    </div>
  `;
};

const getEditCardSettings = (editCard) => {
  return `
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
                     ${Object.entries(editCard.repeatingDays).map(getEditCardRepeatDay).join(``)}
                  </div>
                </fieldset>
            </div>

          <div class="card__hashtag">
            <div class="card__hashtag-list">
                ${editCard.tags.map((tag) => getEditCardHashtag(tag)).join(``)}
            </div>
            <label>
                <input type="text" class="card__hashtag-input" name="hashtag-input" placeholder="Type new hashtag here">
            </label>
          </div>
      </div>
      <div class="card__colors-inner">
        <h3 class="card__colors-title">Color</h3>
        <div class="card__colors-wrap">
            ${COLORS.map((color) => getEditCardColorsWrap(editCard.repeatingDays, color)).join(``)}
        </div>
      </div>
    </div>
  `;
};

const getEditCardRepeatDay = ([day, isRepeating]) => {
  return `
      <input 
            class="visually-hidden card__repeat-day-input" 
            type="checkbox" 
            id="repeat-${day}-4" 
            name="repeat" 
            value="${day}" 
            ${isRepeating ? `checked` : ``}>
      <label 
            class="card__repeat-day" 
            for="repeat-${day}-4">
            ${day}
      </label>
   `;
};

const getEditCardHashtag = (tag) => {
  return `
    <span class="card__hashtag-inner">
      <input 
        type="hidden" 
        name="hashtag" 
        value="repeat" 
        class="card__hashtag-hidden-input">
      <p 
        class="card__hashtag-name">
        ${tag}
      </p>
      <button 
        type="button" 
        class="card__hashtag-delete">
        delete
      </button>
    </span>
  `;
};

const getEditCardColorsWrap = (repeatingDays, color) => {

  return `
    <input 
        type="radio" 
        id="color-${color}-4" 
        class="card__color-input card__color-input--${color} visually-hidden" 
        name="color" 
        value="${color}"
         ${Object.keys(repeatingDays).some((day) => repeatingDays[day]) ? `checked` : ``}>
    <label 
        for="color-${color}-4" 
        class="card__color card__color--${color}">
        ${color}
    </label>
  `;
};

const getEditCardStatus = () => {
  return `
    <div class="card__status-btns">
      <button class="card__save" type="submit">save</button>
      <button class="card__delete" type="button">delete</button>
    </div>
  `;
};
