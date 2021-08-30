'use strict';
//selecting Elements E1 and E2 isliye likha kyoki yeh element denge na ki
//value . nice point !
const player0EL=document.querySelector('.player--0');
const player1EL=document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1'); // it's more faster as compared to queryselector
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const diceEL = document.querySelector('.dice');
const current0EL=document.getElementById('current--0');
const current1EL=document.getElementById('current--1');

// isko function ke andar define nahi kar sakte 
// kyoki har baar call hoga function , or value bhi har baar 
// 0 ban jaegi , we lost the prev record

// const scores=[0,0];
// let currentScore=0; 
// let activePlayer=0;
// let playing=true;

let scores,currentScore,activePlayer,playing
const init=function()
{
  scores=[0,0];
 currentScore=0; 
 activePlayer=0;
score0EL.textContent = 0;
score1EL.textContent = 0; // hamne yaha 0 as a number likha par JS auto matically convert them into string
 playing=true;
  // score0EL.textContent=0;
  // score1EL.textContent=0;
  current0EL.textContent=0;
  current1EL.textContent=0;
 //  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
 //  document.querySelector(`.player--1`).classList.add('player--active');
player0EL.classList.remove('player--winner');
player1EL.classList.remove('player--winner');
player0EL.classList.add('player--active');
player1EL.classList.remove('player--active');
};


init();
const switchPlayer=function()
{
  document.getElementById(`current--${activePlayer}`).textContent= 0;

  activePlayer=activePlayer===0 ? 1:0;
  currentScore=0;
   player0EL.classList.toggle('player--active');    
   player1EL.classList.toggle('player--active');  
}

diceEL.classList.add('hidden');

// ab hame pata hai ki niche waala button hai 
// so we have to use addEventListener 
btnRoll.addEventListener('click',function(){

    //
    if(playing){

    
    const dice = Math.trunc(Math.random()*6)+1;

    diceEL.classList.remove('hidden');
    diceEL.src= `dice-${dice}.png`;


    if(dice!==1)
    {
      currentScore+=dice; 
      document.getElementById(`current--${activePlayer}`).textContent= currentScore;

    //   current0EL.textContent=currentScore;

    }else{
        // document.getElementById(`current--${activePlayer}`).textContent= 0;

        // activePlayer=activePlayer===0 ? 1:0;
        // currentScore=0;
        //  player0EL.classList.toggle('player--active');    
        //  player1EL.classList.toggle('player--active');    
        switchPlayer();
    }
  }
});

btnHold.addEventListener('click',function(){

  // console.log("jai maata di ");
  if(playing){
  scores[activePlayer]+=currentScore;
   
  document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

  // document.getElementById(`current--${activePlayer}`).textContent= 0;

  // activePlayer=activePlayer===0 ? 1:0;
  // currentScore=0;
  //  player0EL.classList.toggle('player--active');    
  //  player1EL.classList.toggle('player--active');
  
  if(scores[activePlayer]>=100)
  {
    playing=false;
    diceEL.classList.add('hidden');

    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  }
  else{
    switchPlayer();

  }
}
});

btnNew.addEventListener('click',init );

