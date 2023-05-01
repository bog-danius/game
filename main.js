let currentPlayer = "X";

let board = ["", "", "", "", "", "", "", "", ""];

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleClick(event) {
  const cell = event.target;
  const index = cell.id;

  if (board[index] !== "") {
    return;
  }

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;

  const winner = checkForWinner();
  if (winner) {
    alert(`Победитель: ${winner}`);
    reset();
    return;
  }

  if (!board.includes("")) {
    alert("Ничья!");
    reset();
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkForWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function reset() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  const cells = document.querySelectorAll("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
}

const cells = document.querySelectorAll("td");
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", handleClick);
}
