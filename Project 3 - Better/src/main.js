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
      new Draggable(card);
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

  addCard(text) {
    //text for now but will be object
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = "card-" + Date.now();
    card.innerText = text;
    this.todoList.prepend(card);

    new Draggable(card);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new KanbanBoard();
});
