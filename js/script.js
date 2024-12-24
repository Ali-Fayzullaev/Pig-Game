const userOne = document.getElementById("userOne");
const userTwo = document.getElementById("userTwo");
const currentOne = document.getElementById("currentOne");
const currentTwo = document.getElementById("currentTwo");
const restart = document.getElementById("restart");
const roll = document.getElementById("roll");
const hold = document.getElementById("hold");
const dice = document.querySelector(".dice");
const playerOneCard = document.getElementById("playerOneCard");
const playerTwoCard = document.getElementById("playerTwoCard");
const resultTextOne = document.getElementById("resultTextOne");
const resultTextTwo = document.getElementById("resultTextTwo");

const nameOne = document.getElementById("nameOne");
const nameTwo = document.getElementById("nameTwo");

dice.style.display = "none";

let currentPlayer = 1; // 1 — игрок 1, 2 — игрок 2

let currentScoreOne = 0;
let currentScoreTwo = 0;
let totalScoreOne = 0;
let totalScoreTwo = 0;

const firstPlyer = prompt("What first plyer name ?");
const secondPlyer = prompt("What second plyer name");

nameOne.textContent = (firstPlyer)
nameTwo.textContent = (secondPlyer)


function switchPlayer() {
  if (currentPlayer === 1) {
    currentPlayer = 2;
    playerOneCard.classList.remove("active");
    playerTwoCard.classList.add("active");
  } else {
    currentPlayer = 1;
    playerTwoCard.classList.remove("active");
    playerOneCard.classList.add("active");
  }
}

roll.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 6) + 1; // Генерация случайного числа от 1 до 6

  dice.style.display = "block";
  dice.src = `./img/dice-${randomNum}.png`; // Устанавливаем изображение кубика

  if (currentPlayer === 1) {
    if (randomNum === 1) {
      currentScoreOne = 0;
      currentOne.textContent = 0;
      switchPlayer();
    } else {
      currentScoreOne += randomNum;
      currentOne.textContent = currentScoreOne;
    }
  } else {
    if (randomNum === 1) {
      currentScoreTwo = 0;
      currentTwo.textContent = 0;
      switchPlayer();
    } else {
      currentScoreTwo += randomNum;
      currentTwo.textContent = currentScoreTwo;
    }
  }
});

hold.addEventListener("click", () => {
  if (currentPlayer === 1) {
    totalScoreOne += currentScoreOne; // Добавляем текущий счёт к общему счёту игрока 1
    userOne.textContent = totalScoreOne; // Обновляем общий счёт игрока 1
    currentScoreOne = 0;
    currentOne.textContent = 0; // Сбрасываем текущий счёт игрока 1
  } else {
    totalScoreTwo += currentScoreTwo; // Добавляем текущий счёт к общему счёту игрока 2
    userTwo.textContent = totalScoreTwo; // Обновляем общий счёт игрока 2
    currentScoreTwo = 0;
    currentTwo.textContent = 0; // Сбрасываем текущий счёт игрока 2
  }

  console.log(userOne.textContent);
  if (userOne.textContent >= 100) {
    playerOneCard.classList.add("bg-warning");
    playerOneCard.classList.add("bg-opacity-50");
    playerOneCard.classList.add("text-light");
    playerOneCard.classList.add("shadow");
    playerOneCard.classList.add("rounded");
    hold.disabled = true;
    roll.disabled = true;
    playerTwoCard.classList.add("bg-danger");
    playerTwoCard.classList.add("bg-opacity-50");
    resultTextOne.textContent = `🎉 ${firstPlyer} Won 🎉`;
    resultTextTwo.textContent = `😢 ${secondPlyer} Lost😢`;
  }
  if (userTwo.textContent >= 100) {
    playerTwoCard.classList.add("bg-warning");
    playerTwoCard.classList.add("bg-opacity-50");
    playerTwoCard.classList.add("text-light");
    playerTwoCard.classList.add("shadow");
    playerTwoCard.classList.add("rounded");
    hold.disabled = true;
    roll.disabled = true;
    playerOneCard.classList.add("bg-danger");
    playerOneCard.classList.add("bg-opacity-50");
    resultTextTwo.textContent = `🎉 Win ${secondPlyer} 🎉`;
    resultTextOne.textContent = `😢Lose ${firstPlyer}😢`;
  }
  switchPlayer(); // Переключаемся на другого игрока
});

restart.addEventListener("click", () => {
  // Сброс всех значений
  currentScoreOne = 0;
  currentScoreTwo = 0;
  totalScoreOne = 0;
  totalScoreTwo = 0;
  currentOne.textContent = 0;
  currentTwo.textContent = 0;
  userOne.textContent = 0;
  userTwo.textContent = 0;
  dice.style.display = "none";
  currentPlayer = 1;
  playerOneCard.classList.add("active");
  playerTwoCard.classList.remove("active");

  playerOneCard.classList.remove("bg-danger");
  playerTwoCard.classList.remove("bg-danger");
  playerOneCard.classList.remove("bg-warning");
  playerTwoCard.classList.remove("bg-warning");

  playerOneCard.classList.remove("bg-opacity-50");
  playerOneCard.classList.remove("text-light");
  playerOneCard.classList.remove("shadow");
  playerOneCard.classList.remove("rounded");
  playerTwoCard.classList.remove("bg-opacity-50");
  playerTwoCard.classList.remove("text-light");
  playerTwoCard.classList.remove("shadow");
  playerTwoCard.classList.remove("rounded");

  hold.disabled = false;
  roll.disabled = false;
  resultTextTwo.textContent = "";
  resultTextOne.textContent = "";

  if (userOne.textContent >= 100) {
    playerOneCard.classList.add("bg-warning");
    playerOneCard.classList.add("bg-opacity-50");
    playerOneCard.classList.add("text-light");
    playerOneCard.classList.add("shadow");
    playerOneCard.classList.add("rounded");
    hold.disabled = true;
    roll.disabled = true;
    playerTwoCard.classList.add("bg-danger");
    playerTwoCard.classList.add("bg-opacity-50");
    resultTextOne.textContent = `🎉 Win ${firstPlyer} 🎉`;
    resultTextTwo.textContent = `😢Lose ${secondPlyer}😢`;
  }
  if (userTwo.textContent >= 100) {
    playerTwoCard.classList.add("bg-warning");
    playerTwoCard.classList.add("bg-opacity-50");
    playerTwoCard.classList.add("text-light");

    playerTwoCard.classList.add("shadow");
    playerTwoCard.classList.add("rounded");
    hold.disabled = true;
    roll.disabled = true;
    playerOneCard.classList.add("bg-danger");
    playerOneCard.classList.add("bg-opacity-50");
    resultTextTwo.textContent = `🎉 Win ${secondPlyer} 🎉`;
    resultTextOne.textContent = `😢Lose ${firstPlyer}😢`;
  }
});
