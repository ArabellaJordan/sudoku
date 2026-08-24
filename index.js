"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRow = checkRow;
var board = [];
function generateSolution() {
    board = initializeBoard();
    var selection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var updatedSelection;
    for (var row = 0; row < 9; row++) {
        updatedSelection = __spreadArray([], selection, true);
        for (var col = 0; col < 9; col++) {
            var index = Math.floor(Math.random() * updatedSelection.length);
            board[row][col] = updatedSelection[index];
            updatedSelection.splice(index, 1);
        }
        console.log("board: ", board);
    }
    //   console.log("check row", checkRow(2, 0));
}
// generate random number between 1 and 9
// function getRandomNumber(): number {
//   const number = Math.floor(Math.random() * 9);
//   return number;
// }
// checks if the row includes the input
function checkRow(number, row) {
    var exist = row.includes(number);
    return exist;
}
// function generateRow(): number[] {
//   const selection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const row: number[] = [];
//   for (let n = 1; n <= 9; n++) {
//     const index = Math.floor(Math.random() * selection.length);
//     row.push(selection[index]);
//     selection.splice(index, 1);
//   }
//   return row;
// }
function initializeBoard() {
    return Array.from({ length: 9 }, function () { return Array(9).fill(0); });
}
generateSolution();
