"use strict"
const score0 = document.getElementById("score-0")
const score1 = document.getElementById("score-1")
const dice = document.querySelector(".dice-img") 
const btnroll = document.querySelector(".roll")
const btnhold = document.querySelector(".hold")
const current0 = document.getElementById("current-score-0")
const current1 = document.getElementById("current-score-1")
const player1 = document.querySelector(".player-1")
const player2 = document.querySelector(".player-2")







//// starting conditions : 

   score0.textContent = 0 ; 
   score1.textContent = 0  ; 
    dice.classList.add("hidden")
    let score = 0 ; 
    let result = 0 ; 
    let activeplayer = 0 ; 
    const scores = [0,0]



    //// rolling dice  functionality :: 

    /// random number (between 1 and 6 ) 
   
     /// display the dice image with random number :: 
     /// get the sum of dices in the current score 

       btnroll.addEventListener("click",function(){
         const diceNumber = Math.trunc(Math.random()*6)+1  /// number between 1 and 6 ... 
         console.log(diceNumber)  
         dice.src = `dice-${diceNumber}.png`
         dice.classList.remove("hidden")

         if (diceNumber !== 1 ){
          score +=  diceNumber      //// score = score + diceNumber 0 = 2 + 0 ; 2 = 5 + 2 ; 7
           document.getElementById(`current-score-${activeplayer}`).textContent = score
         }
         else {  ///// jeb  1   ........... 
            score = 0 ; 
            document.getElementById(`current-score-${activeplayer}`).textContent = 0 ; 
            activeplayer = activeplayer === 0 ?  1 : 0 ; 
            player1.classList.toggle("active")
            player2.classList.toggle("active")
         }
  

       })



       ///// implement hold condition :: 

      btnhold.addEventListener("click",function(){
       scores[activeplayer] +=  score    /// 0 + 14   scores[0] = 10   0+4 = 4 4 
       document.getElementById(`score-${activeplayer}`).textContent = scores[activeplayer]
      })
