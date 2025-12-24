import { PaletteEngine } from "./models/PaletteEngine.js";
import { PaletteUI } from "./views/PaletteUI.js";

const domSelectors = {
  generateBtn: document.getElementById("generate-btn"),
  container: document.querySelector(".palette-container"),
  boxSelector: ".color-box",
};

document.addEventListener("DOMContentLoaded", () => {
  const palette = new PaletteEngine(5);
  const ui = new PaletteUI(domSelectors);

  const refreshPalette = () => {
    const newColors = palette.generate();
    ui.update(newColors);
  };

  refreshPalette();

  domSelectors.generateBtn.addEventListener("click", refreshPalette);

  domSelectors.container.addEventListener("click", async (e) => {
    const target = e.target;
    let hexValue = null;
    let copyBtn = null;

    if (target.classList.contains("copy-btn")) {
      hexValue = target.previousElementSibling.textContent;
      copyBtn = target;
    } else if (target.classList.contains("color")) {
      const info = target.nextElementSibling;
      hexValue = info.querySelector(".hex-value").textContent;
      copyBtn = info.querySelector(".copy-btn");
    }

    if (hexValue && copyBtn) {
      try {
        await navigator.clipboard.writeText(hexValue);
        ui.animateCopy(copyBtn);
      } catch (err) {
        console.error("Copy failed", err);
      }
    }
  });
});
