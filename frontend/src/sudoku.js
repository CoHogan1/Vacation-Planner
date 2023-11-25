import './App.css';
import React, { useState } from 'react';

// let count = 0


// fill 2d array with sudoku board
function generateSudokuBoard() {
    const board = new Array(9).fill(null).map(() => new Array(9).fill(0));
        fillBoard(board);
        // needs random first row
        return board;
}
let arr = [1,2,3,4,5,6,7,8,9]

function fillBoard(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValidMove(board, row, col, num)) {
            board[row][col] = num;
            if (fillBoard(board)) {
              return true;
            }
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValidMove(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num || board[i][col] === num) {
      return false;
    }
  }

  const boxStartRow = Math.floor(row / 3) * 3;
  const boxStartCol = Math.floor(col / 3) * 3;
  for (let i = boxStartRow; i < boxStartRow + 3; i++) {
    for (let j = boxStartCol; j < boxStartCol + 3; j++) {
      if (board[i][j] === num) {
        return false;
      }
    }
  }
  return true;
}

let test = generateSudokuBoard();

function Sudoku() {
    let [guess, setGuess] = useState("")

    const getChoice = (e) => {
        e.preventDefault();
        console.log("set guess to", e.target.innerHTML)
        setGuess(guess = e.target.innerHTML)
    }

    const highlight = (e) =>{
        console.log(guess, e.target.innerHTML)
        if (e.target.innerHTML === guess){
            console.log("correct")
        } else {
            console.log(" wrong ");
        }
        // change all necessary squares colors
    }

    // const speak = (e) => {
    //     e.preventDefault();
    //     let text = e.target.innerHtml
    //     var msg = new SpeechSynthesisUtterance();
    //
    //     msg.text = e.target.innerHTML;
    //     window.speechSynthesis.speak(msg);
    //     console.log("speaking");
    //
    // }

    // <span>
    //     {sentence.map((value, index) => {return <p onClick={speak} >{value}</p>})}
    // </span>


    // todo:
    // fill board with some of the correct answers
    // change color of correct answers.
    // write a function to check guess with answer
    // guess selection board on bottom of screen.
    // adjust height of sudoku board on screen. 20% to top?


  return (
    <div className="game">

        <div className="board2">
            {arr.map((val, ind) =>
                <div className="square">
                    {arr.map((v, i) => <div className="squarex" onClick={highlight}>
                        {test[ind][i]}

                </div>) }
            </div>) }


        </div>
        <div className="guess">
            {arr.map((val, ind) =>
                <p className="guessSelector"
                    key={val* 2}
                    onClick={getChoice}
                >{val}</p>)}

        </div>
        <p className="x">?? {guess} ??</p>




    </div>
  );
}

export default Sudoku;


//
// <div className="board">
//     {size.map((i,v) => {
//         return <div key={v} className="cell"
//             onClick={highlight} >{v + 1}
//         </div>
//     })}
// </div>


// {test.map((row, ind) => row.map((v,i) => {
//         return <div key={ind + i} onClick={highlight}
//             className="cell" >{v}</div>
//         })
//     )
// }
