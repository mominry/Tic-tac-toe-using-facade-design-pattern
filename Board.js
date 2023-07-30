const Cell = require("./Cell.js");
class Board {
    constructor() {
        this.cells = [
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),

        ]
    }
    isEmpty(cellNumber) {
        return this.cells[cellNumber].isEmpty()
    }
    printBoard() {
        console.log(this.cells);
    }
   
    analyse() {

        let machingSeries = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let eachSeries of machingSeries) {
            let [a, b, c] = eachSeries;
            if (this.cells[a].mark === this.cells[b].mark && this.cells[b].mark === this.cells[c].mark && (this.cells[a].mark == "X"||this.cells[a].mark=="O")) {
                
                return [this.cells[a].mark, "Win"];
            }
            
        }
        let isDraw=true
        for (let index = 0; index < this.cells.length; index++) {
            if (this.cells[index].mark=="Z") {
               
                isDraw=false
                return ["", ""]
                
            }
            
        }
        if (isDraw==true) {
            return ["","Draw"]
        }

        //return["",""]

    }
}
module.exports = Board













































 /*
    analyse(symbol){
        if (this.cells[0]==this.cells[1]==this.cells[2]||this.cells[3]==this.cells[4]==this.cells[5]||this.cells[6]==Board.cells[7]==Board.cells[8]||
            this.cells[0]==this.cells[3]==this.cells[6]||this.cells[1]==this.cells[4]==this.cells[7]||this.cells[2]==Board.cells[5]==Board.cells[8]||
            this.cells[0]==this.cells[4]==this.cells[8]||this.cells[2]==this.cells[4]==this.cells[6]) 
        {
           return[symbol,"win"]  
        }

        for (let index = 0; index < this.cells.length; index++) {
            if (this.cells[index].mark=="Z") {
                return ["",""]
            }
            return["","draw"]
        }
        return["",""]
    }
    */