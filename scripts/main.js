//Define initial variable values
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
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');
var $draws = document.getElementById('draws');
var scoreX = [];
var scoreO = [];
var boxUsed = [$a1, $a2, $a3,
               $b1, $b2, $b3,
               $c1, $c2, $c3];
var turnCount = 0;
var totalTurnCount = 0;
var player = '';
var computer = '';
var winCount = 0;
var lossCount = 0;
var drawCount = 0;

$wins.innerHTML = winCount;
$losses.innerHTML = lossCount;
$draws.innerHTML = drawCount;
//Determine if you're X or O
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



//Adjust Array Values to determine outcomes
function pushBlock(val){
  if(player === 'X'){scoreX.push(val);
    } else if(player === 'O'){scoreO.push(val);
   }
}

function boxesLeft(box){
	box = boxUsed.indexOf(box);
	boxUsed.splice(box, 1);
}

//Will mark your choice and then tell computer to make its choice. 
$a1.onclick = function(){
  if( $a1.children[0].innerHTML === '' && turnCount%2===0){
	$a1.children[0].innerHTML = player;
    pushBlock($a1);
    gameOver();
    turnCount++;
    boxesLeft($a1);
    findWinner();
    delay();
}
}

$a2.onclick = function(){
  if( $a2.children[0].innerHTML === '' && turnCount%2===0){
	$a2.children[0].innerHTML = player;
	 pushBlock($a2);
	gameOver();
	turnCount++;
    boxesLeft($a2);
    findWinner();
    delay();
}
}

$a3.onclick = function(){
  if( $a3.children[0].innerHTML === '' && turnCount%2===0){
	$a3.children[0].innerHTML = player;
	pushBlock($a3);
	gameOver();
	turnCount++;
	boxesLeft($a3);
	findWinner();
	delay();

}
}

$b1.onclick = function(){
  if( $b1.children[0].innerHTML === '' && turnCount%2===0){
	$b1.children[0].innerHTML = player;
	 pushBlock($b1);
	gameOver();
	turnCount++;
	boxesLeft($b1);
	findWinner();
	delay();

}
}

$b2.onclick = function(){
  if( $b2.children[0].innerHTML === '' && turnCount%2===0){
	$b2.children[0].innerHTML = player; 
	pushBlock($b2);
    gameOver();
    turnCount++;
    boxesLeft($b2);
    findWinner();
	delay();

}
}

$b3.onclick = function(){
  if( $b3.children[0].innerHTML === '' && turnCount%2===0){
	$b3.children[0].innerHTML = player;
    pushBlock($b3);
    gameOver();
    turnCount++;
    boxesLeft($b3);
    findWinner();
	delay();

}
}

$c1.onclick = function(){
  if( $c1.children[0].innerHTML === '' && turnCount%2===0){
	$c1.children[0].innerHTML = player;
    pushBlock($c1);
    gameOver();
    turnCount++;
    boxesLeft($c1);
    findWinner();
	delay();

}
}

$c2.onclick = function(){
  if( $c2.children[0].innerHTML === '' && turnCount%2===0){
	$c2.children[0].innerHTML = player;
    pushBlock($c2);
    gameOver();
    turnCount++;
    boxesLeft($c2);
    findWinner();
	delay();

}
}

$c3.onclick = function(){
  if( $c3.children[0].innerHTML === '' && turnCount%2===0){
	$c3.children[0].innerHTML = player;
    pushBlock($c3);
    gameOver();
    turnCount++;
    boxesLeft($c3);
    findWinner();
	delay();
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

//Search through scoreX array to determine if nputed value is present and if so its index 
function indexX(val){
 return scoreX.indexOf(val);
}

//Search through scoreO array to determine if inputed value is present and if so its index
function indexO(val){
 return scoreO.indexOf(val);
}
//If functions indexO or indexX can find combinations of given values, returns true.
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

// If game ends in tie
function gameOver(){
	totalTurnCount += 1;
  if(totalTurnCount === 9){$status.innerHTML = 'Game Is A Draw';
  setTimeout(playerSelection, 3000);
 }
}


//When computer makes choice, will push that choice into its array.
function compPush(val){
	if(computer === 'X'){
		scoreX.push(val);
	} else if (computer === 'O'){
		scoreO.push(val);
	}
}

//Computer will make a random choice of available decisions. 
function computerSelection(){
	var selected = boxUsed[Math.floor(Math.random()*boxUsed.length)];
	if(totalTurnCount < 9){
	selected.children[0].innerHTML = computer;
	boxesLeft(selected);
	compPush(selected);
	findWinner();
}
}

function stopProgram(){
	if($status.innerHTML !== '') {
		findWinner();
	} else computerSelection();
	if($status.innerHTML === 'You Win!'){
		$wins.innerHTML = winCount += 1;
	} else if ($status.innerHTML === 'You Lost'){
		$losses.innerHTML = lossCount += 1;
	} else if ($status.innerHTML === 'Game Is A Draw'){
		$draws.innerHTML = drawCount += 1;
	}
}

//Combines functions to determine whether to continue round, end due to winner, end due to draw
function compTurn(){
	turnCount++;
	gameOver();
	stopProgram();
}



function delay(){ setTimeout(compTurn, 500)}



// if(indexX($a1) !== -1 && indexX($a2) !== -1 && indexX($a3) !== -1){
// 	winX();
// }
























