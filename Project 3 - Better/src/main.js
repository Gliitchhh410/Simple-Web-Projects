import { Draggable, Droppable } from "./DragDrop.js";

class KanbanBoard {
  constructor() {
    this.cards = document.querySelectorAll(".card");
    this.lists = document.querySelectorAll(".list");
    this.addBtn = document.getElementById("add-btn");
    this.todoList = document.getElementById("task-list1");
    this.logList = document.getElementById("activity-log");

    this.modal = document.getElementById("task-modal");
    this.closeBtn = document.getElementById("close-btn");
    this.taskForm = document.getElementById("task-form");
    this.init();
  }

  init() {
    this.cards.forEach((card) => {
      this._makeDraggable(card);
    });

    this.lists.forEach((list) => {
      new Droppable(list, (cardID, targetListID, sourceListID) => {
        if (targetListID === sourceListID) return;
        const cardTitle = document.querySelector(`#${cardID} strong`).innerText;
        const sourceName = document.querySelector(
          `#${sourceListID} h2`
        ).innerText;
        const targetName = document.querySelector(
          `#${targetListID} h2`
        ).innerText;

        this.addLog(cardTitle, sourceName, targetName);
      });
    });

    this.addBtn.addEventListener("click", () => {
      this.modal.classList.remove("hidden");
    });

    this.closeBtn.addEventListener("click", () => {
      this.modal.classList.add("hidden");
    });

    this.taskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const taskData = {
        title: document.getElementById("task-title").value,
        desc: document.getElementById("task-desc").value,
        priority: document.getElementById("task-priority").value,
      };

      this.addCard(taskData);
      this.taskForm.reset();
      this.modal.classList.add("hidden");
    });
  }

  addLog(taskName, fromList, toList) {
    const logItem = document.createElement("li");
    const user = "USER1-4NOW";
    const timestamp = new Date().toLocaleTimeString();

    logItem.innerHTML = `[${timestamp}] <span class="log-highlight">${taskName}</span> moved from <span class="log-highlight">${fromList}</span> to <span class="log-highlight">${toList}</span> by ${user}`;
    this.logList.prepend(logItem);
  }

  _makeDraggable(card) {
    new Draggable(card);
  }
  _createCardHtml(data) {
    const card = document.createElement("div");
    card.classList.add("card");

    // Add priority class (low, medium, high) for styling
    card.classList.add(data.priority);

    card.id = "card-" + Date.now();

    // Construct the card content
    card.innerHTML = `
        <strong>${data.title}</strong>
        <p>${data.desc}</p>`;

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
