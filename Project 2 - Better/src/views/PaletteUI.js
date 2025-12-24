export class PaletteUI {
  constructor(domSelectors) {
    this.boxes = document.querySelectorAll(domSelectors.boxSelector);
  }

  update(colors) {
    this.boxes.forEach((box, index) => {
      const color = colors[index];
      const colorDiv = box.querySelector(".color");
      const colorHex = box.querySelector(".hex-value");

      colorDiv.style.backgroundColor = color;
      hexDiv.textContent = color;
    });
  }

  animateCopy(btn) {
    btn.classList.remove("far", "fa-copy");
    btn.classList.add("fas", "fa-check");
    btn.style.color = "#48bb78";

    setTimeout(() => {
      btn.classList.remove("fas", "fa-check");
      btn.classList.add("far", "fa-copy");
      btn.style.color = "";
    }, 1000);
  }
}
