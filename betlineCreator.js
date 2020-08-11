
let config = {
    numberOfRows: 3,
    numberOfcolumns: 6,
    numberOfBetlines: 25
};
// make sure numberOfBetlines===gameBetlineData.length
let gameBetlineData = [
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2],
    [0, 1, 1, 1, 1, 0],
    [2, 1, 1, 1, 1, 2],
    [1, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 2, 1],
    [0, 1, 0, 1, 0, 1],
    [1, 2, 1, 2, 1, 2],
    [1, 0, 1, 0, 1, 0],
    [2, 1, 2, 1, 2, 1],
    [2, 1, 0, 0, 0, 0],
    [0, 1, 2, 2, 2, 2],
    [0, 0, 0, 0, 1, 2],
    [2, 2, 2, 2, 1, 0],
    [0, 0, 1, 1, 2, 2],
    [2, 2, 1, 1, 0, 0],
    [0, 0, 1, 2, 2, 2],
    [2, 2, 1, 0, 0, 0],
    [1, 1, 2, 1, 0, 1],
    [1, 1, 0, 1, 2, 1],
    [1, 0, 1, 2, 1, 0],
    [1, 2, 1, 0, 1, 2],
    [0, 0, 0, 1, 1, 1],
    [2, 2, 2, 1, 1, 1]
];


let body = document.getElementsByTagName("BODY")[0]
let parentElement = document.createElement("div");
parentElement.className = "betlines"
body.appendChild(parentElement);

/**
 * function to create each betline tag,betline nu,ber
 */
function createBetlineNumber() {
    for (let index = 1; index <= config.numberOfBetlines; index++) {
        let betline = document.createElement("div");
        betline.className = "betline";
        parentElement.appendChild(betline);

        let betlineNumber = document.createElement("span");
        betlineNumber.className = "betlineNumber";
        betlineNumber.innerHTML = index;
        betline.appendChild(betlineNumber);

        this.createTableTag(betline, index);
    }

}

function createTableTag(parent, index) {
    let tableTag = document.createElement("table");
    parent.appendChild(tableTag);
    this.createRowsAndItsColumns(tableTag, index);

}

function createRowsAndItsColumns(tableTag, index) {
    for (let i = 0; i < config.numberOfRows; i++) {
        let rows = document.createElement("tr");
        for (let j = 0; j < config.numberOfcolumns; j++) {
            let column = document.createElement("td");
            rows.appendChild(column);
        }
        tableTag.appendChild(rows);
    }

    for (let b = 0; b < gameBetlineData[index - 1].length; b++) {

        tableTag.children[gameBetlineData[index - 1][b]].children[b].className = "active";
    }
}

this.createBetlineNumber();

let a = document.getElementsByClassName("ouputArea")[0];
a.innerHTML = parentElement.innerHTML;

console.log(parentElement);