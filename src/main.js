const cards = [
  {
    id: 0,
    color: 'black',
    isDeadline: false,
    text: 'Example default task with default color.',
    date: '23 September',
    time: '11:15 PM',
    hashtags: ['todo', 'personal', 'important']
  },
  {
    id: 1,
    color: 'blue',
    isDeadline: false,
    text: 'Example default task with custom color.',
    date: '23 September',
    time: '11:15 PM',
    hashtags: ['todo', 'personal', 'important']
  },
  {
    id: 2,
    color: 'yellow',
    isDeadline: false,
    text: 'Example default task with custom color and without date.',
    hashtags: ['todo', 'personal', 'important']
  },
  {
    id: 3,
    color: 'green',
    isDeadline: false,
    text: 'Example default task with custom color and without hashtags.',
    date: '23 September',
    time: '11:15 PM',
  },
  {
    id: 4,
    color: 'black',
    isDeadline: false,
    text: 'Example default task without date and hashtags.',
  },
  {
    id: 5,
    color: 'pink',
    isDeadline: false,
    isRepeat: true,
    text: 'It is example of repeating task. It marks by wave.',
    date: '23 September',
    time: '11:15 PM',
    hashtags: ['todo', 'personal', 'important']
  },
  {
    id: 6,
    color: 'red',
    isDeadline: true,
    text: 'This is card with missing deadline.',
  },
  {
    id: 7,
    color: 'black',
    isDeadline: true,
    text: 'This is card with missing deadline. Deadline always marked by red line.',
    date: '23 September',
    time: '11:25 PM',
    hashtags: ['todo', 'personal', 'important']
  }
];

const createSection = (classNameList) => {
  let section = document.createElement('section');
  let classNames = classNameList.split(' ');
  classNames.forEach((className) => section.classList.add(className));
  return section;
}

const createDiv = (className) => {
  let div = document.createElement('div');
  div.classList.add(className);
  return div;
}

const createSpan = (className) => {
  let div = document.createElement('span');
  div.classList.add(className);
  return div;
}

const createArticle = (classNameList) => {
  let article = document.createElement('article');
  classNameList.forEach(className => article.classList.add(className));
  return article;
}

const createCardControlButton = (id) => {
  let button = document.createElement('button');

  button.setAttribute('type', "button");
  button.classList.add("card__btn");
  button.classList.add("card__btn--" + id);
  if (id === 'favorites') {
    button.classList.add("card__btn--disabled");
  }
  button.innerHTML = id;
  return button;
}

const isChecked = (id) => id === 'task' || id === 'all';

const isDisabled = (id) => id === 'overdue' || id === 'today';

const getMenu = () => {
  const menu = createSection('control__btn-wrap');
  ['new-task', 'task', 'statistic'].forEach((id) =>  {
    let radio = getRadio("control", id);
  let label = getLabel("control", id);
  menu.appendChild(radio);
  menu.appendChild(label);
});
  return menu;
}
const filterCountMap = {
  "all": 13,
  "overdue": 0,
  "today": 0,
  "favorites": 1,
  "repeating": 1,
  "tags": 1,
  "archive": 115
};

const getFilter = () => {
  const filter = createSection("main__filter filter container");
  Object.entries(filterCountMap).forEach(([id, count]) =>  {
    let radio = getRadio("filter", id);
  let label = getLabel("filter", id, count);
  // label.innerHTML = getFilterTitle(id);
  filter.appendChild(radio);
  filter.appendChild(label);
})
  ;
  return filter;
}
;


const getRadio = (section, id) => {
  let radio = document.createElement('input');
  radio.setAttribute('type', 'radio');
  radio.setAttribute('id', section + "__" + id);
  radio.setAttribute('class', section + "__input visually-hidden");
  radio.setAttribute('name', section);
  if (isChecked(id)) {
    radio.setAttribute('checked', "");
  }
  if (isDisabled(id)) {
    radio.setAttribute('disabled', "");
  }
  return radio;

}

const getLabel = (section, id, count) => {
  let label = document.createElement('label');
  label.setAttribute('for', section + "__" + id);
  label.classList.add(section + "__label");
  if (id === 'new-task') {
    label.classList.add(section + "__label--" + id);
  }
  // if (idForAdditionalClass) {
  //   label.classList.add(section + "__label--" + idForAdditionalClass)
  // }
  label.append(titleMap[id]);
  if (count !== undefined) {
    label.appendChild(getSpan(section, id, count));
  }
  return label;
}

const getSpan = (section, id, count) => {
  let span = document.createElement('span');
  span.setAttribute('class', section + '__' + id + '-count');
  span.innerHTML = count;

  return span;
}

const titleMap = {
  "new-task": "+ ADD NEW TASK",
  "task": "TASKS",
  "statistic": "STATISTICS",
  "all": "All ",
  "overdue": "Overdue ",
  "today": "Today ",
  "favorites": "Favorites ",
  "repeating": "Repeating ",
  "tags": "Tags ",
  "archive": "Archive "
};

const getSearch = () => {
  const searchId = 'search__input';
  const placeholderValue = 'START TYPING — SEARCH BY WORD, #HASHTAG OR DATE';

  const search = createSection('main__search search container');
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', searchId);
  input.setAttribute('class', searchId);
  input.setAttribute('placeholder', placeholderValue);

  let label = document.createElement('label');
  label.setAttribute('class', 'visually-hidden');
  label.setAttribute('for', searchId);
  label.innerHTML = 'Search';

  search.appendChild(input);
  search.appendChild(label);

  return search;
}

const getLoadMore = () => {
  const button = document.createElement('button');
  button.setAttribute('class', 'load-more');
  button.setAttribute('type', 'button');
  button.innerHTML = 'load more';
  return button;
}

const getBoardFilter = () => {
  const boardFilter = createDiv('board__filter-list');
  ['DEFAULT', 'DATE up', 'DATE down'].forEach((sortBy) =>  {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', '#');
    anchor.setAttribute('class', 'board__filter');
    anchor.innerHTML = `SORT BY ${sortBy}`;
    boardFilter.appendChild(anchor);
  });
  return boardFilter;
};

const getCardControl = () => {
  const control = createDiv('card__control');
  ['edit', 'archive', 'favorites'].forEach((clazz) =>  {
    control.appendChild(createCardControlButton(clazz));
  });
  return control;
};

const getCardBar = () => {
  const bar = createDiv('card__color-bar');

  const svg = document.createElement('svg');
  svg.setAttribute("class", "card__color-bar-wave");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "10");

  const use = document.createElement('use');
  use.setAttribute('xlink:href', '#wave');

  bar
    .appendChild(svg)
    .appendChild(use)
  return bar;
};

const getCardText = (cardText) => {
  const areaWrap = createDiv('card__textarea-wrap');
  const text = document.createElement('p');
  text.setAttribute('class', 'card__text');
  text.innerHTML = cardText;
  areaWrap.appendChild(text);
  return areaWrap;
};

const getCardSettings = (card) => {
  const settings = createDiv('card__settings');
    const details = createDiv('card__details');
      const dates = createDiv('card__dates');
        const deadline = createDiv('card__date-deadline');
          const deadlineInput = document.createElement('p');
            deadlineInput.setAttribute('class', 'card__input-deadline-wrap');
            const deadlineDate = createSpan('card__date');
              deadlineDate.innerHTML = card.date;
            const deadlineTime = createSpan('card__time');
              deadlineTime.innerHTML = card.time;
      const hashtag = createDiv('card__hashtag');
        const hashtagList = createDiv('card__hashtag-list');
        card.hashtags && card.hashtags.forEach((hashtag) => {
          const hashtagInner = createSpan('card__hashtag-inner');
            const hashtagName = createSpan('card__hashtag-name');
            hashtagName.innerHTML = `#${hashtag}`;


          hashtagList.appendChild(hashtagInner);
            hashtagInner.appendChild(hashtagName);
        });

  settings.appendChild(details);
    details.appendChild(dates);
      dates.appendChild(deadline);
        deadline.appendChild(deadlineInput);
          card.date && deadlineInput.appendChild(deadlineDate);
          card.time && deadlineInput.appendChild(deadlineTime);
    details.appendChild(hashtag);
      hashtag.appendChild(hashtagList);

  return settings;
};

const getBoard = () => {
  const board = createSection('board container');
  const boardFilter = getBoardFilter();
  const tasks = createDiv('board__tasks');

    cards.forEach((card) =>  {
      const classList = ['card', `card--${card.color}`];
      if (card.isDeadline) {
        classList.push('card--deadline');
      }
      if (card.isRepeat) {
        classList.push('card--repeat');
      }
      let article = createArticle(classList);
      const form = createDiv('card__form');
      const inner = createDiv('card__inner');

      inner.appendChild(getCardControl());
      inner.appendChild(getCardBar());
      inner.appendChild(getCardText(card.text));
      inner.appendChild(getCardSettings(card));

      tasks
        .appendChild(article)
        .appendChild(form)
        .appendChild(inner);
    });
  board.appendChild(boardFilter);
  board.appendChild(tasks);
  board.appendChild(getLoadMore());
  return board;
}

const mainControl = document.querySelector('.main__control');
mainControl.appendChild(getMenu());

const main = document.querySelector('.main');
main.appendChild(getSearch());
main.appendChild(getFilter());
main.appendChild(getBoard());
