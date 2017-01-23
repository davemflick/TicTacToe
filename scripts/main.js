var $settings = document.getElementById('settings');
var $turn = document.getElementById('turn');
var $status = document.getElementById('status');
var $playerX = document.getElementById('playerX');
var $playerO = document.getElementById('playerO');
var $gameContainer = document.getElementById('gameContainer');
var $a1 = document.getElementById('a1');
var $a2 = document.getElementById('a2');
var $a3 = document.getElementById('a3');
var $b1 = document.getElementById('b1');
var $b2 = document.getElementById('b2');
var $b3 = document.getElementById('b3');
var $c1 = document.getElementById('c1');
var $c2 = document.getElementById('c2');
var $c3 = document.getElementById('c3');
var $box = document.getElementsByClassName('box');
var scoreX = [];
var scoreO = [];
var boxUsed = [$a1, $a2, $a3,
               $b1, $b2, $b3,
               $c1, $c2, $c3];
var turnCount = 0;
var totalTurnCount = 0;


function setUp(){
	$turn.innerHTML = 'What would you like to play as?';
	$playerX.style.visibility = 'visible';
	$playerO.style.visibility = 'visible';
	}

function playerSelection(){
	$playerX.style.visibility = 'hidden';
	$playerO.style.visibility = 'hidden';
	$status.innerHTML = '';
	scoreX = [];
    scoreO = [];
    boxUsed = [$a1, $a2, $a3,
               $b1, $b2, $b3,
               $c1, $c2, $c3];
    totalTurnCount = 0;
    turnCount = 0;
	for(i=0; i<$box.length; i++){
		$box[i].innerHTML = '';
	}
}

var player = '';
var computer = '';

$playerX.onclick = function(){
   $turn.innerHTML = 'You are playing as X';
    playerSelection();
    return player = 'X', computer = 'O';
}

$playerO.onclick = function(){
   $turn.innerHTML = 'You are playing as O';
    playerSelection();
    return player = 'O', computer = 'X';
}




function pushBlock(val){
  if(player === 'X'){scoreX.push(val);
    } else if(player === 'O'){scoreO.push(val);
   }
}

function boxesLeft(box){
	box = boxUsed.indexOf(box);
	boxUsed.splice(box, 1);
}


$a1.onclick = function(){
  if( $a1.children[0].innerHTML === '' && turnCount%2===0){
	$a1.children[0].innerHTML = player;
    pushBlock($a1);
    gameOver();
    turnCount++;
    boxesLeft($a1);
    compTurn();
}
}

$a2.onclick = function(){
  if( $a2.children[0].innerHTML === '' && turnCount%2===0){
	$a2.children[0].innerHTML = player;
	 pushBlock($a2);
	gameOver();
	turnCount++;
    boxesLeft($a2);
    compTurn();
}
}

$a3.onclick = function(){
  if( $a3.children[0].innerHTML === '' && turnCount%2===0){
	$a3.children[0].innerHTML = player;
	pushBlock($a3);
	gameOver();
	turnCount++;
	boxesLeft($a3);
	compTurn();

}
}

$b1.onclick = function(){
  if( $b1.children[0].innerHTML === '' && turnCount%2===0){
	$b1.children[0].innerHTML = player;
	 pushBlock($b1);
	gameOver();
	turnCount++;
	boxesLeft($b1);
	compTurn();

}
}

$b2.onclick = function(){
  if( $b2.children[0].innerHTML === '' && turnCount%2===0){
	$b2.children[0].innerHTML = player; 
	pushBlock($b2);
    gameOver();
    turnCount++;
    boxesLeft($b2);
	compTurn();

}
}

$b3.onclick = function(){
  if( $b3.children[0].innerHTML === '' && turnCount%2===0){
	$b3.children[0].innerHTML = player;
    pushBlock($b3);
    gameOver();
    turnCount++;
    boxesLeft($b3);
	compTurn();

}
}

$c1.onclick = function(){
  if( $c1.children[0].innerHTML === '' && turnCount%2===0){
	$c1.children[0].innerHTML = player;
    pushBlock($c1);
    gameOver();
    turnCount++;
    boxesLeft($c1);
	compTurn();

}
}

$c2.onclick = function(){
  if( $c2.children[0].innerHTML === '' && turnCount%2===0){
	$c2.children[0].innerHTML = player;
    pushBlock($c2);
    gameOver();
    turnCount++;
    boxesLeft($c2);
	compTurn();

}
}

$c3.onclick = function(){
  if( $c3.children[0].innerHTML === '' && turnCount%2===0){
	$c3.children[0].innerHTML = player;
    pushBlock($c3);
    gameOver();
    turnCount++;
    boxesLeft($c3);
	compTurn();
}
}


// Ways to Win
var winner = [[$a1, $a2, $a3],
[$a1, $b1, $c1],
[$a1, $b2, $c3],
[$a2, $b2, $c2],
[$a3, $b3, $c3],
[$a3, $b2, $c1],
[$b1, $b2, $b3],
[$c1, $c2, $c3]];

//If the Player Wins round
function win (){
  $status.innerHTML = 'You Win!';
  setTimeout(playerSelection, 3000);
}
//If computer wins round.
function lost (){
 $status.innerHTML = 'You Lost';
 setTimeout(playerSelection, 3000);	
}


function indexX(val){
 return scoreX.indexOf(val);
}

function indexO(val){
 return scoreO.indexOf(val);
}

function findWinner(){
 for(v=0; v<winner.length; v++){
 	if(indexX(winner[v][0]) !== -1 && indexX(winner[v][1]) !== -1 && indexX(winner[v][2]) !== -1 && player === 'X'){
 		win();
 	} else if(indexX(winner[v][0]) !== -1 && indexX(winner[v][1]) !== -1 && indexX(winner[v][2]) !== -1 && computer === 'X'){
 		lost();
 	} else if(indexO(winner[v][0]) !== -1 && indexO(winner[v][1]) !== -1 && indexO(winner[v][2]) !== -1 && player === 'O'){
 		win();
 	} else if(indexO(winner[v][0]) !== -1 && indexO(winner[v][1]) !== -1 && indexO(winner[v][2]) !== -1 && computer === 'O'){
 		lost();
 	}
 }
}

function gameOver(){
	totalTurnCount += 1;
  if(totalTurnCount === 9){$status.innerHTML = 'Game Is A Draw';
  setTimeout(playerSelection, 3000);
 }
}


//Set Up computer AI

function compPush(val){
	if(computer === 'X'){
		scoreX.push(val);
	} else if (computer === 'O'){
		scoreO.push(val);
	}
}

function computerSelection(){
	var max1 = boxUsed.length-1;
	var min1 = 0; 
	var selected = boxUsed[Math.floor(Math.random()*boxUsed.length)];
	if(totalTurnCount < 9){
	selected.children[0].innerHTML = computer;
	boxesLeft(selected);
	compPush(selected);
}
}

function compTurn(){
	turnCount++;
	gameOver();
	computerSelection();
	findWinner();
}



// if(indexX($a1) !== -1 && indexX($a2) !== -1 && indexX($a3) !== -1){
// 	winX();
// }
























