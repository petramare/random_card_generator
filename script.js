

const cardRank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']

const cardSuit = ['Clubs', 'Spades', 'Hearts', 'Diamonds']


//returns random card of cardRanks
function rankIndex(cardRank) { 
   return cardRank[Math.floor(Math.random()*cardRank.length)];
}
//assinging variable
const x= (rankIndex(cardRank));

//returns random card suit
function suitIndex(cardSuit) { 
    return cardSuit[Math.floor(Math.random()*cardSuit.length)];
 }

 //assigning variable
const y = (suitIndex(cardSuit));

//showing in document not console
const heading = document.createElement('h1')
document.body.appendChild(heading)
heading.innerHTML += `<h1>Your random card is ${x} of ${y}<h1> `



 