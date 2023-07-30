const Board =require( "./Board");
const Player =require("./Player");
class Game { 
    constructor(board, player0, player1) { 
      this.board = board; 
      this.player0 = player0; 
      this.player1 = player1; 
      this.turn = 0; 
      this.isGameOver = false; 
    } 
   
    static newGame(player0Name, player1Name) { 
      let board = new Board(); 
      let player0 = new Player(player0Name, "X"); 
      let player1 = new Player(player1Name, "O"); 
   
      return new Game(board, player0, player1); 
    } 
   
    play(cellNumber) { 
        
       
      if (this.isGameOver) { 
        return "Game is over"; 
      } 
      if(!Number.isInteger(cellNumber)|| cellNumber<0||cellNumber>8){ 
        return ["error"," please enter numbers only",cellNumber] 
      } 
     
      let isCellEmpty = this.board.isEmpty(cellNumber); 
      let currentPlayer; 
      if (!isCellEmpty) { 
        return ["cell is used",cellNumber]; 
      } 
      if (this.turn % 2 === 0) { 
        currentPlayer = this.player0; 
      } else { 
        currentPlayer = this.player1; 
      } 
      currentPlayer.markCell(this.board.cells[cellNumber]); 
      this.turn++; 
      this.board.printBoard(); 
      let [winnerSymbol, gameState] = this.board.analyse();     
      if (gameState === "Win") { 
        this.isGameOver = true; 
        if (winnerSymbol === "X") {
            return "winner is"+this.player0.name 
        }
        return "winner is"+this.player1.name
        
      } else if (gameState === "Draw") { 
        this.isGameOver = true; 
        return "Game has been Drawn"; 
      } 
       
      return "continue"; 
    }   
  } 

  
   
  
  const g1 = Game.newGame("rayyan", "mark1"); 
  const g2 = Game.newGame("john", "sam"); 
  console.log(g1.play(1));
  console.log(g1.play(8));
  console.log(g1.play(3));
  console.log(g1.play(5));
  console.log(g1.play(2));
console.log(g1.play(7));
console.log(g1.play(4));
console.log(g1.play(6));
console.log(g1.play(0));


/*
  console.log(g1.play(0));
  console.log(g1.play(1));
  console.log(g1.play(2));
  console.log(g1.play(3));
  console.log(g1.play(5));
  console.log(g1.play(8));
  console.log(g1.play(7));
  console.log(g1.play(6));
  console.log(g1.play(4));
*/