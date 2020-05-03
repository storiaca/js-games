const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;

function randomSquare() {
  square.forEach((className) => {
    className.classList.remove("mole");
  });

  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  // assign the id of the randomPosition to hitPosition
  hitPosition = randomPosition.id;
}

square.forEach(id => {
  id.addEventListener("mouseup", () => {
    if(id.id === hitPosition) {
      result = result + 1;
      score.textContent =  result
    }
  })
})
