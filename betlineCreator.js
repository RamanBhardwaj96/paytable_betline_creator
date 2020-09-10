
let config = {
    numberOfRows: 3,
    numberOfcolumns: 6,
    // provide here winline data array from init if ways game make sure it is empty

    betlinesPattern: [],

    // keeping this as an example
    // e.g      betlinesPattern: [       
    //     [0, 0, 0, 0, 0, 0],
    //     [1, 1, 1, 1, 1, 1],
    //     [2, 2, 2, 2, 2, 2],
    //     [0, 1, 1, 1, 1, 0],
    //     [2, 1, 1, 1, 1, 2],
    //     [1, 0, 0, 0, 0, 1],
    //     [1, 2, 2, 2, 2, 1],
    //     [0, 1, 0, 1, 0, 1],
    //     [1, 2, 1, 2, 1, 2],
    //     [1, 0, 1, 0, 1, 0],
    //     [2, 1, 2, 1, 2, 1],
    //     [2, 1, 0, 0, 0, 0],
    //     [0, 1, 2, 2, 2, 2],
    //     [0, 0, 0, 0, 1, 2],
    //     [2, 2, 2, 2, 1, 0],
    //     [0, 0, 1, 1, 2, 2],
    //     [2, 2, 1, 1, 0, 0],
    //     [0, 0, 1, 2, 2, 2],
    //     [2, 2, 1, 0, 0, 0],
    //     [1, 1, 2, 1, 0, 1],
    //     [1, 1, 0, 1, 2, 1],
    //     [1, 0, 1, 2, 1, 0],
    //     [1, 2, 1, 0, 1, 2],
    //     [0, 0, 0, 1, 1, 1],
    //     [2, 2, 2, 1, 1, 1]
    // ],


    // provide here waysWin data array, if line-game make sure it is empty
    waysPattern: [
        [
           
            [false, false, true, false, false, false],
            [false, true, false, false, false, false],    // each patten mxn length  should match  numberOfRows,  numberOfcolumns
            [true, false, false, false, false, false]
        ]
    ]

};


let body = document.getElementsByTagName("BODY")[0]
let parentElement = document.createElement("div");
parentElement.className = "betlines"
body.appendChild(parentElement);

/**
 * function to create each betline tag,betline nu,ber
 */
function createBetlineNumber() {
    let numberOfPatterns = config.betlinesPattern.length > 0 ? config.betlinesPattern.length : config.waysPattern.length;
    for (let index = 1; index <= numberOfPatterns; index++) {
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


    this.startActivatingCellsBasedOnGameType(tableTag, index);

}


function startActivatingCellsBasedOnGameType(tableTag, index) {
    if (config.betlinesPattern.length) {
        for (let b = 0; b < config.betlinesPattern[index - 1].length; b++) {
            tableTag.children[config.betlinesPattern[index - 1][b]].children[b].className = "active";
        }
    }
    else {
        for (let i = 0; i < config.waysPattern[index - 1].length; i++) {
            let singlePatternData = config.waysPattern[index - 1];
            for (let j = 0; j < singlePatternData.length; j++) {
                for (let k = 0; k < singlePatternData[j].length; k++) {
                    if (singlePatternData[j][k]) {
                        tableTag.children[j].children[k].className = "active";
                    }

                }
            }
        }

    }
}



this.createBetlineNumber();

let a = document.getElementsByClassName("ouputArea")[0];
a.innerHTML = parentElement.innerHTML;

console.log(parentElement);