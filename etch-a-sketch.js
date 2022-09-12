const NUM_OF_ROWS = 16;
const NUM_OF_COLUMNS = 16;

const squareDivContainer = document.querySelector(".square-div-container");

for (let i = 0; i < NUM_OF_ROWS; i++) {
  for (let j = 0; j < NUM_OF_COLUMNS; j++) {
    const div = document.createElement("div");
    div.classList.add(`row${i}`);
    div.classList.add(`column${j}`);
    squareDivContainer.append(div);

    div.style.width = `40px`;
    div.style.height = `40px`;
    div.style.border = "1px solid black";
  }
}
