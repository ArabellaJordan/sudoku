var board = [];
function generateSolution() {
    var row = [];
    for (var r = 1; r <= 9; r++) {
        row.push(getRandomNumber());
    }
    console.log("row: ", row);
}
function getRandomNumber() {
    var number = Math.ceil(Math.random() * 9);
    return number;
}
generateSolution();
