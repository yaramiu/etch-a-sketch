const squareDivContainer = document.querySelector(".square-div-container");
let blacknessCounter = 1;

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
      const randomRed = Math.floor(Math.random() * 256);
      const randomGreen = Math.floor(Math.random() * 256);
      const randomBlue = Math.floor(Math.random() * 256);
      squareDiv.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

      const hue = rgbToHue(randomRed, randomGreen, randomBlue);

      squareDiv.style.background = `hwb(${hue} 0% ${blacknessCounter}0%)`;
      if (blacknessCounter < 10) {
        blacknessCounter++;
      }
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
  blacknessCounter = 1;
  squareDivContainer.style.padding = "0px 440px 0px";
  createNewGrid(userInputNumber);
});

function removeOldGrid() {
  while (squareDivContainer.firstChild) {
    squareDivContainer.removeChild(squareDivContainer.firstChild);
  }
}

function rgbToHue(red, green, blue) {
  let hue = 0;

  redPrime = red / 255;
  greenPrime = green / 255;
  bluePrime = blue / 255;
  colorMax = Math.max(redPrime, greenPrime, bluePrime);
  colorMin = Math.min(redPrime, greenPrime, bluePrime);
  delta = colorMax - colorMin;

  if (colorMax === redPrime) {
    hue = 60 * (((greenPrime - bluePrime) / delta) % 6);
  } else if (colorMax === greenPrime) {
    hue = 60 * ((bluePrime - redPrime) / delta + 2);
  } else if (colorMax === bluePrime) {
    hue = 60 * ((redPrime - greenPrime) / delta + 4);
  } else {
    hue = 0;
  }

  if (hue < 0) {
    hue += 360;
  }

  return Math.round(hue);
}

createNewGrid(16);
