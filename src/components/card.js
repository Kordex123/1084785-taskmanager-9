export const getCard = (card) => {
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
