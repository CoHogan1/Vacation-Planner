
let test = [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
]


class Square{
    constructor(val, shown, hiLgh = false){
        this.val = val
        this.shown = shown
        this.hiLgh = hiLgh
        }

        showVal(){
            console.log("Value of this cell is ", this.val)
        }
        showAll(){
            console.log(this.val, this.shown, this.hiLgh);
        }
        toggleHighlight(){
            this.hiLgh ? false : true;
            console.log(this.hiLgh);

        }
}


//const one = new Square(9, true, false)

// one.showAll()
// one.toggleHighlight()
// one.showAll()



function generateSudokuBoard() {
  const board = new Array(9).fill(null).map(() => new Array(9).fill(0));
  fillBoard(board);
  return board;
}

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

function printBoard(board) {
    console.log(board);
  // for (let row = 0; row < 9; row++) {
  //   console.log(board[row].join(' '));
  // }
}

//const sudokuBoard = generateSudokuBoard();



function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = []

const board = new Array(9).fill(null).map(() => new Array(9).fill(0));

//let board[0] = [fillRow()]


function fillRow(){
    for (let i = 0; i < 9; i++){
        let num = rnd(1,9)
        // check row
        while (arr.includes(num)){
            num = rnd(1,9)
        }
        // check column


        arr.push(num)
    }
    return arr
}
// for (let i = 0; i < 9; i++){
//     let num = rnd(1,9)
//     while (arr.includes(num)){
//         num = rnd(1,9)
//     }
//     arr.push(num)
// }


let t = "Hi my name is Larry, and this is my book"

let x = t.split(' ')
console.log(x);
