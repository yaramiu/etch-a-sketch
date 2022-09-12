const squareDivContainer = document.querySelector(".square-div-container");

function createNewGrid(squaresPerSide) {
  for (let i = 0; i < squaresPerSide; i++) {
    for (let j = 0; j < squaresPerSide; j++) {
      const div = document.createElement("div");
      div.classList.add(`row${i}`);
      div.classList.add(`column${j}`);
      squareDivContainer.append(div);

      div.style.width = `${640 / squaresPerSide}px`;
      div.style.height = `${640 / squaresPerSide}px`;
      div.style.outline = "1px solid black";
    }
  }

  enableGridDrawing();
}

function enableGridDrawing() {
  const squareDivNodeList = squareDivContainer.childNodes;
  squareDivNodeList.forEach((squareDiv) => {
    squareDiv.addEventListener("mouseover", () => {
      squareDiv.style.backgroundColor = "black";
    });
  });
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  let userInputNumber = parseInt(
    Math.floor(
      prompt(
        "How many squares per side do you want for the grid? (min:0 , max:100)",
        "16"
      )
    )
  );

  while (
    isNaN(userInputNumber) ||
    userInputNumber < 0 ||
    userInputNumber > 100
  ) {
    userInputNumber = parseInt(
      Math.floor(
        prompt(
          "That is not a valid number, enter a valid number for the number of squares per side for the grid. (min:0, max:100)",
          "16"
        )
      )
    );
  }

  removeOldGrid();
  squareDivContainer.style.padding = "0px 440px 0px";
  createNewGrid(userInputNumber);
});

function removeOldGrid() {
  while (squareDivContainer.firstChild) {
    squareDivContainer.removeChild(squareDivContainer.firstChild);
  }
}

createNewGrid(16);
