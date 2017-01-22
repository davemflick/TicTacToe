var $settings = document.getElementById('settings');
var $turn = document.getElementById('turn');
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


function setUp(){
	$turn.innerHTML = 'What would you like to play as?';
	$playerX.style.visibility = 'visible';
	$playerO.style.visibility = 'visible';
	}

function playerSelection(){
	$playerX.style.visibility = 'hidden';
	$playerO.style.visibility = 'hidden'
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



var scoreX = [];
var scoreO = [];

function pushBlock(val){
  if(player === 'X'){scoreX.push(val);
    } else if(player === 'O'){scoreO.push(val);
   }
}



$a1.onclick = function(){
  if( $a1.children[0].innerHTML === ''){
	$a1.children[0].innerHTML = player;
    pushBlock('a1');}
}

$a2.onclick = function(){
  if( $a2.children[0].innerHTML === ''){
	$a2.children[0].innerHTML = player;
	 pushBlock('a2');}
}

$a3.onclick = function(){
  if( $a3.children[0].innerHTML === ''){
	$a3.children[0].innerHTML = player;
	 pushBlock('a3');}
}

$b1.onclick = function(){
  if( $b1.children[0].innerHTML === ''){
	$b1.children[0].innerHTML = player;
	 pushBlock('b1');}
}

$b2.onclick = function(){
  if( $b2.children[0].innerHTML === ''){
	$b2.children[0].innerHTML = player; 
	pushBlock('b2');}
}

$b3.onclick = function(){
  if( $b3.children[0].innerHTML === ''){
	$b3.children[0].innerHTML = player;
    pushBlock('b3');}
}

$c1.onclick = function(){
  if( $c1.children[0].innerHTML === ''){
	$c1.children[0].innerHTML = player;
    pushBlock('c1');}
}

$c2.onclick = function(){
  if( $c2.children[0].innerHTML === ''){
	$c2.children[0].innerHTML = player;
    pushBlock('c2');}
}

$c3.onclick = function(){
  if( $c3.children[0].innerHTML === ''){
	$c3.children[0].innerHTML = player;
    pushBlock('c3');}
}


























