import { Draggable, Droppable } from "./DragDrop.js";

class KanbanBoard {
  constructor() {
    this.cards = document.querySelectorAll(".card");
    this.lists = document.querySelectorAll(".list");
    this.init();
  }

  init() {
    this.cards.forEach((card) => {
      new Draggable(card);
    });

    this.lists.forEach((list) => {
      new Droppable(list, (cardID, listID) => {
        console.log(`Card ${cardID} dropped into List ${listID}`);
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new KanbanBoard();
});
