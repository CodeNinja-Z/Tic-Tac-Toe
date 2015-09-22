function Game(){
  this.gameOver = false;
  // this.winConditions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], 
  // [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  $("td").text('').removeClass('taken');
}

Game.prototype.begin = function(){
  var currentGame = this;
  var counter = 0;
  $("h3").text("Your turn, X");
  $("body").on("click", "td", function(){
    if(currentGame.gameOver === true){
      // setTimeout(function(){$('body').click(currentGame.clear_board())}, 1);
      currentGame.clear_board();
    }
    if(counter % 2 === 0){
      $(this).addClass("taken").text('X');
      $("h3").text("Your turn, O");
    } else {
      $(this).addClass("taken").text('O');
      $("h3").text("Your turn, X");
    }
    counter++;
    $(this).off('click');
    currentGame.check_winner();
    if(currentGame.gameOver === true){
      // console.log("gameOver = true");  // for debugging
      if($(this).text() === 'X'){
        $("h3").text("Game over, X won. Click to play again.");
        // Freeze the rest cells
        // $("td").off('click');
        // setTimeout(function(){$('body').click(currentGame.clear_board())}, 1);
        // $("body").on('click', function(){
        //   currentGame.clear_board();
        // });
        
      } else if($(this).text() === 'O'){
        $("h3").text("Game over, O won. Click to play again.");
        // $("td").off('click');
        // setTimeout(function(){$('body').click(currentGame.clear_board())}, 1);
        // $("td").on('click', function(){
        //   currentGame.clear_board();
        // });
      }
    } else if(counter === 9){
      $("h3").text("Game over, tie game. Click to play again.");
      // $("td").off('click');
      // setTimeout(function(){$('body').click(currentGame.clear_board())}, 1); 
        // $("td").on('click', function(){
        //   currentGame.clear_board();
        // });
    }
  });
}

Game.prototype.check_winner = function(){
  // Winning conditions
  if($("#1").text() == $("#2").text() && $("#2").text() == $("#3").text() && $("#1").text()!='' ) {
    this.gameOver = true;
    // console.log("Win");  // for debugging
    // Highlight winning grids
    $("#1, #2, #3").css('background-color', 'blue');
  } else if($("#4").text() == $("#5").text() && $("#5").text() == $("#6").text() && $("#4").text()!='' ){
    this.gameOver = true;
    $("#4, #5, #6").css('background-color', 'blue');
  } else if($("#7").text() == $("#8").text() && $("#8").text() == $("#9").text() && $("#7").text()!='' ){
    this.gameOver = true;
    $("#7, #8, #9").css('background-color', 'blue');
  } else if($("#1").text() == $("#4").text() && $("#4").text() == $("#7").text() && $("#1").text()!='' ){
    this.gameOver = true;
    $("#1, #4, #7").css('background-color', 'blue');
  } else if($("#2").text() == $("#5").text() && $("#5").text() == $("#8").text() && $("#2").text()!='' ){
    this.gameOver = true;
    $("#2, #5, #8").css('background-color', 'blue');
  } else if($("#3").text() == $("#6").text() && $("#6").text() == $("#9").text() && $("#3").text()!='' ){
    this.gameOver = true;
    $("#3, #6, #9").css('background-color', 'blue');
  } else if($("#1").text() == $("#5").text() && $("#5").text() == $("#9").text() && $("#1").text()!='' ){
    this.gameOver = true;
    $("#1, #5, #9").css('background-color', 'blue');
  } else if($("#3").text() == $("#5").text() && $("#5").text() == $("#7").text() && $("#3").text()!='' ){
    this.gameOver = true;
    $("#3, #5, #7").css('background-color', 'blue');
  } 

  
  // for(var i = 0; i < winConditions.length; i++){
  //   if(($("#" + winConditions[i][0]).text() === player) && 
  //     ($("#" + winConditions[i][1]).text() === player) && 
  //     ($("#" + winConditions[i][2] === player)){
  //       $("h3").text();
  //     }
  // }
  
}

Game.prototype.clear_board = function(){
  this.gameOver = false;
  $("td").text('').removeClass('taken').css('background-color', 'white');
  this.begin();
}

game = new Game();

$(function(){
  game.begin();
});