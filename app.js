
var scores, round_score, activePlayer, dice, gamePlaying, dice1, winScore;
//Call initialize function
init();


document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        
    //1. Random number
    dice = Math.floor(Math.random()*6) + 1;
    dice1 = Math.floor(Math.random()*6) + 1;
    
    
    //2. Display the result dice 0
    var diceDOM = document.querySelector('#dice0');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    console.log('dice0: ' + dice);
    
    // Display the result Dice 1
    var diceDOM = document.querySelector('#dice1');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice1 + '.png';
    console.log('dice1: ' + dice1);
    
    //3. Update the round score if the rolled number was Not a 1 on either die
    if (dice !== 1 && dice1 !== 1){
        //Add score
        round_score += dice + dice1;
        document.querySelector('#current-'+activePlayer).textContent = round_score;
        
    } else{
        //Next player
        nextPlayer();    
    }
        
    }
    
});

//button hold
document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
    //1. add current score to the global score
    scores[activePlayer] += round_score;
    
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //check if the player won the game
    if (scores[activePlayer] >= winScore){
        gamePlaying = false;
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('#dice0').style.display = 'none';
        document.querySelector('#dice1').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        
    }   else{
            
    //Next player
    nextPlayer();
        
    }  
        
    }
    

    
});


//new game
document.querySelector('.btn-new').addEventListener('click',init);


function init(){
    gamePlaying = true;
    scores = [0,0];
    activePlayer = 0;
    round_score = 0;
    dice1 = 0;
    dice = 0;
    document.querySelector('#dice0').style.display = 'none';
    document.querySelector('#dice1').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    winScore = parseInt(prompt('Enter Winning Score!'));
}


function nextPlayer(){
    //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        round_score = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
        
        document.querySelector('#dice0').style.display = 'none';
        document.querySelector('#dice1').style.display = 'none';
}









