export class Draggable {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.element.setAttribute("draggable", true);
    this.element.addEventListener("dragstart", this.handleDragStart);
    this.element.addEventListener("dragend", this.handleDragEnd);
  }

  handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", this.element.id);
    this.element.classList.add("dragging");
  };

  handleDragEnd = (e) => {
    this.element.classList.remove("dragging");
  };
}

export class Droppable {
  constructor(element, onDrop) {
    this.element = element;
    this.onDrop = onDrop;
    this.init();
  }

  init() {
    this.element.addEventListener("dragover", this.handleDragOver);
    this.element.addEventListener("dragenter", this.handleDragEnter);
    this.element.addEventListener("dragleave", this.handleDragLeave);
    this.element.addEventListener("drop", this.handleDrop);
  }

  handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  handleDragEnter = (e) => {
    e.preventDefault();
    this.element.classList.add("over");
  };

  handleDragLeave = (e) => {
    //    if (e.relatedTarget && !this.element.contains(e.relatedTarget)) {
    this.element.classList.remove("over");
    //    }
  };

  handleDrop = (e) => {
    e.preventDefault();

    this.element.classList.remove("over");
    const id = e.dataTransfer.getData("plain/text");
    const draggableElement = document.getElementById(id);

    if (draggableElement) {
      this.element.appendChild(draggableElement);
    }

    if (this.onDrop) {
      this.onDropCallback(id, this.element.id);
    }
  };
}
