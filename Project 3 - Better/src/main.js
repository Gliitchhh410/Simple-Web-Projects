import { Draggable, Droppable } from "./DragDrop.js";

class KanbanBoard {
  constructor() {
    this.cards = document.querySelectorAll(".card");
    this.lists = document.querySelectorAll(".list");
    this.addBtn = document.getElementById("add-btn");
    this.todoList = document.getElementById("task-list1");
    this.init();
  }

  init() {
    this.cards.forEach((card) => {
      this._makeDraggable(card);
    });

    this.lists.forEach((list) => {
      new Droppable(list, (cardID, listID) => {
        console.log(`Card ${cardID} dropped into List ${listID}`);
      });
    });

    this.addBtn.addEventListener("click", () => {
      const input = prompt("What is the task ?");
      if (input) {
        this.addCard(input);
      }
    });
  }

  _makeDraggable(card) {
    new Draggable(card);
  }
  _createCardHtml(text) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = "card-" + Date.now();
    card.innerText = text;
    return card;
  }

  addCard(text) {
    //text for now but will be object

    const card = this._createCardHtml(text);
    this.todoList.prepend(card);
    this._makeDraggable(card);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new KanbanBoard();
});
