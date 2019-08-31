import {getMenu} from "./components/menu";
import {getSearch} from "./components/search";
import {getFilters} from "./components/filter";
import {getBoard} from "./components/board";
import {getTask} from "./components/task-data";
import {getCard} from "./components/card";
import {getBoardFilter} from "./components/board-filter";
import {getEditCard} from "./components/edit-card";
import {getLoadButton} from "./components/load-button";
import {filters} from "./components/filter-data";
import {boardFilters} from "./components/board-filter-data";

const TASK_COUNT = 13;
const TASKS_PER_PAGE = 8;
const PAGE_COUNT = Math.ceil(TASK_COUNT / TASKS_PER_PAGE);
let currentPage = 0;

const allTasks = new Array(TASK_COUNT)
  .fill(``)
  .map(getTask);

const getTasksForPage = (tasks, tasksPerPage, page) => {
  return tasks.slice(tasksPerPage * page, tasksPerPage * (page + 1));
};

const renderTaskCards = (container, tasks) => {
  container.insertAdjacentHTML(`beforeend`, tasks
    .map(getCard)
    .join(``));
};

const onLoadMoreClick = () => {
  currentPage++;
  renderTaskCards(boardTasksSection, getTasksForPage(allTasks, TASKS_PER_PAGE, currentPage));
  if (currentPage >= (PAGE_COUNT - 1)) {
    loadMoreButton.remove();
  }
};

const mainSection = document.querySelector(`.main`);
const mainControlSection = document.querySelector(`.main__control`);

const renderComponent = (container, template, position = `beforeend`) => {
  container.insertAdjacentHTML(position, template);
};

renderComponent(mainControlSection, getMenu());
renderComponent(mainSection, getSearch());
renderComponent(mainSection, getFilters(filters, allTasks));
renderComponent(mainSection, getBoard());

const boardSection = document.querySelector(`.board`);
const boardTasksSection = document.querySelector(`.board__tasks`);

renderComponent(boardSection, getBoardFilter(boardFilters), `afterbegin`);
renderComponent(boardTasksSection, getEditCard(getTask()));
// renderComponent(boardTasksSection, getCard());

renderTaskCards(boardTasksSection, getTasksForPage(allTasks, TASKS_PER_PAGE, currentPage));
renderComponent(boardSection, getLoadButton());

const loadMoreButton = document.querySelector(`.load-more`);
loadMoreButton.addEventListener(`click`, onLoadMoreClick);


