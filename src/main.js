import {getMenu} from "./components/menu";
import {getSearch} from "./components/search";
import {getFilters} from "./components/filter";
import {getBoard} from "./components/board";

const mainSection = document.querySelector(`.main`);
const mainControlSection = document.querySelector(`.main__control`);

const renderComponent = (container, template, position = `beforeend`) => {
  container.insertAdjacentHTML(position, template);
};

renderComponent(mainControlSection, getMenu());
renderComponent(mainSection, getSearch());
renderComponent(mainSection, getFilters());
renderComponent(mainSection, getBoard());

