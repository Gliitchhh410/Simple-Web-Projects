const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".paletter-container");

generateBtn.addEventListener("click", generatePalette);
paletteContainer.addEventListener("click", (e) => {
    if (e.target.classList.contain("copy-btn")){
        const hexValue = e.target.previousElementSibling.textContent
    }
})

function generatePalette() {
  const colors = [];

  for (let i = 0; i < 5; i++) {
    colors.push(generateRandomColor());
  }

  updatePaletteUI(colors);
}

function updatePaletteUI(colors) {
  const colorBoxes = document.querySelectorAll(".color-box");

  colorBoxes.forEach((box, index) => {
    const color = colors[index];
    const colorDiv = box.querySelector(".color");
    const hexDiv = box.querySelector(".hex-value");

    colorDiv.style.backgroundColor = color;
    hexDiv.textContent = color;
  });
}
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

generatePalette();
