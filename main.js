
let boxes = document.querySelectorAll(".box");

let resBtn = document.querySelector("#reset-btn");

let newgamebtn = document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");



let turnO = true; //to make alternative turns

let count = 0;  //counter to track draw



const winPatterns = [    //array of winning state: 2D array

    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () => {
    turn0 = true;
    count = 0;
    EnableBtns();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => { //looping over all boxes


    box.addEventListener("click", () => {

        console.log("box was clicked");
        
        if(turnO){

            //player 1
            box.innerHTML = "<span style='color: blue;'>O</span>";
            turnO = false;

        } else {

            //player 2
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true; 
        count++;

         let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw = () => {

    msg.innerText = `Game has been drawn`;
    msgContainer.classList.remove("hide");
    disableBtns();
};

const disableBtns = () => {   //once a winner is selected , rest all stop
    for(let box of boxes){
        box.disabled  = true;
    }

};

const EnableBtns = () => {   //when new game begins, all boxes are enabled

    for(let box of boxes){
        box.disabled  = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {

    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            
            showWinner(pos1Val);
            return true;
        } 
      }
    }
  };

  newgamebtn.addEventListener("click", resetGame);
  resBtn.addEventListener("click", resetGame);

  


