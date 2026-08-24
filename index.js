var board = [];
function generateSolution() {
    board = initializeBoard();
    //   const selection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //   for (let row = 0; row <= 9; row++) {
    //     for (let col = 0; col <= 9; col++) {
    //       const index = Math.floor(Math.random() * selection.length);
    //       board[row][col] = selection[index];
    //       selection.splice(index, 1);
    //     }
    //   }
    //   console.log("check row", checkRow(2, 0));
    console.log("board: ", board);
}
// generate random number between 1 and 9
// function getRandomNumber(): number {
//   const number = Math.floor(Math.random() * 9);
//   return number;
// }
// checks if the row includes the input
function checkRow(number, row) {
    var exist = board[row].includes(number);
    return exist;
}
function generateRow() {
    var selection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var row = [];
    for (var n = 1; n <= 9; n++) {
        var index = Math.floor(Math.random() * selection.length);
        row.push(selection[index]);
        selection.splice(index, 1);
    }
    return row;
}
function initializeBoard() {
    return Array.from({ length: 9 }, function () { return Array(9).fill(0); });
}
generateSolution();
