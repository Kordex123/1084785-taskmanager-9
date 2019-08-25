import {getBoardFilter} from "./board-filter";
import {getCard} from "./card";
import {getCardEdit} from "./edit-card";
import {getLoadButton} from "./load-button";

export const getBoard = () => {
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
