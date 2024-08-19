let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let winMsg = document.querySelector(".msg");
let main = document.querySelector(".main");

let playerTurn = true;
let winner = false;
const patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerTurn) {
            box.innerText = "O";
            box.style.color = "red";
            box.style.backgroundColor = "#ff000034";
            playerTurn = false;
        } else {
            box.innerText = "X";
            box.style.color = "#33beac";
            box.style.backgroundColor = "#6cf3e13d";
            playerTurn = true;
        }
        count++;
        if (count == 9) {
            winMsg.innerHTML = `Tie Game !!`;
            resetGame.style.display = "none";
            newGame.innerText = "Play Again";
        }
        check();
        box.disabled = true;
    });
});

const check = () => {
    for (const onePattern of patterns) {
        let val1 = boxes[onePattern[0]].innerText;
        let val2 = boxes[onePattern[1]].innerText;
        let val3 = boxes[onePattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val1 === val3) {
                winner = "true";
                if (winner) {
                    winMsg.innerHTML = `<p><u>Congratulation player <strong>${val1}</strong> is Winner<u></p>`;
                    resetGame.style.display = "none";
                    boxes.forEach((box)=> {
                        box.disabled = true;
                    });
                }
            }
        }
    }
};

resetGame.addEventListener("click", () => {
    count = 0;
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.backgroundColor = "";
        box.removeAttribute("disabled");
        playerTurn = true;
    });
});

newGame.addEventListener("click", () => {
    count = 0;
    boxes.forEach((box) => {
        box.innerText = "";
        newGame.innerText = "New Game";
        box.style.backgroundColor = "";
        box.disabled = true;
        box.removeAttribute("disabled");
        playerTurn = true;
        resetGame.style.display = "block";
        winMsg.innerHTML = "";
    });
});
