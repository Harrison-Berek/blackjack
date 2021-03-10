/*----- constants -----*/ 
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08',
 '09', '10', 'J', 'Q', 'K', 'A'];

 const masterDeck = buildMasterDeck();



/*----- app's state (variables) -----*/
let pChips, winner, pCards, dCards, turn, bet, pCardsTotal, dCardsTotal, hitCount; 




/*----- cached element references -----*/
const msgEl = document.getElementById('msg');
const ddBtn = document.getElementById('double-down')
const hitBtn = document.getElementById('hit')
const standBtn = document.getElementById('stand')
const betBtn = document.getElementById('betBtn');
const replayBtn = document.getElementById('replay');
const pcsEls = document.getElementById('pcs');
const dcsEls = document.getElementById('dcs');
//  chipCountEl 
/*----- event listeners -----*/

document.querySelector('#hit').addEventListener('click', handleHit);
document.querySelector('#stand').addEventListener('click', handleStand);
document.querySelector('#double-down').addEventListener('click', handleDouble);
document.querySelector('#replay').addEventListener('click', init);
document.querySelector("#betBtn").addEventListener('click', placeBet);
// document.querySelector('#split').addEventListener('click', handleSplit);


/*----- functions -----*/
function init() {
    msgEl.innerHTML = `Please place your bet to get started.`
    pChips = 1000;
    turn = 1; 
    deck = shuffledDeck();
    pCards = [];
    dCards = [];
    pCardsTotal = 0;
    dCardsTotal = 0;
    hitBtn.style.visibility = 'hidden';
    standBtn.style.visibility = 'hidden';
    ddBtn.style.visibility = 'hidden';
    betBtn.style.visibility = 'visible';
    replayBtn.style.visibility = 'hidden';
    bet = 0;
    winner = null; 
    render();
};

function buildMasterDeck () {
    const deck = []; 
    suits.forEach(function(suit) {
        ranks.forEach(function(rank) {
            deck.push({
                face: `${suit}${rank}`,
                value: Number(rank) || (rank === 'A' ? 11:10)
            });
        });
    });
    return deck;
};

function pNewCard () {
    pCards.push(deck.pop())
    pCardsTotal += pCards[pCards.length - 1].value;
    let pNC = document.createElement(`div`);
    pNC.className = `card ${pCards[pCards.length - 1].face}`;
    pcsEls.appendChild(pNC);
    return pCardsTotal
};

function dNewCard () {
    dCards.push(deck.pop());
    dCardsTotal += dCards[dCards.length - 1].value;
    let dNC = document.createElement(`div`);
    dNC.className = `card ${dCards[dCards.length - 1].face}`;
    dcsEls.appendChild(dNC);
    return dCardsTotal
};


function shuffledDeck() { 
    const tempDeck = [...masterDeck];
    shuffledDeck = [];
    while (tempDeck.length) {
        const rndIdx = Math.floor(Math.random() * tempDeck.length);
        shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
    }
    return shuffledDeck
}; 
init();
console.log(deck);

function placeBet() {
    bet = prompt(`Your chip total is ${pChips}. Please place your bet:`)
   while (bet > pChips) {
    bet = prompt(`Sorry, you only have ${pChips} to bet. Please place your bet:`) 
   } 
   initDeal();
   betBtn.style.visibility = 'hidden';
   return bet; 
};



function initDeal() {
    pNewCard();
    pNewCard();
    dNewCard();
    if (pCardsTotal === 21){
    // if (true) {
        dCards.push(deck.pop());
        dNewCard();
        if (pCardsTotal === 21 && dCardsTotal !== 21) {
        // if (false) {
            msgEl.innerHTML = `BlackJack! You win and extra 50% of your bet!!`;
            // winner= 1;
        } else if (pCardsTotal === 21 && dCardsTotal === 21){
            msgEl.innerHTML = `Push. You didn't win...but you didn't lose`;
            // winner = 0;
        } 
        // getWinner();
    } 
    else {
    msgEl.innerHTML = `You have ${pCardsTotal} would you like to Hit, Stand or Double-Down`;   
    hitBtn.style.visibility = 'visible';
    standBtn.style.visibility = 'visible';
    ddBtn.style.visibility = 'visible';
    };
};





function handleHit() {
    ddBtn.style.visibility = 'hidden';
    pNewCard();
    if(pCardsTotal > 21){
        if(pCards.some(card => card.face.includes('A'))) {
            pCardsTotal -= 10;
            render();
            return pCardsTotal
        }
        msgEl.innerHTML = `Bust!`
        // winner = -1;
        // getWinner();
    } else if (pCardsTotal === 21) {
        hitBtn.style.visibility = 'hidden';
        msgEl.innerHTML = `Noice, you have ${pCardsTotal}! Lets Stand and see what the dealers got.`;
    } else {
        msgEl.innerHTML = `You have ${pCardsTotal} would you like to Hit or Stand`;
    }
};

function handleStand() {
    hitBtn.style.visibility = 'hidden';
    standBtn.style.visibility = 'hidden';
    ddBtn.style.visibility = 'hidden';
    dealersTurn();
};

function handleDouble() { 

};

// function dealersTurn () {
//     dNewCard();
//     while (dCardsTotal < 18) {
//         dNewCard();
//         if (dCardsTotal > 21 && dCards.some(card => card.face.includes('A'))) {
//             dCardsTotal -= 10;
//         } 
//         return dCardsTotal;
//     } 
//     // getwinner(); 
// }

function getWinner() {
    // pChips = pChips + bet * 1.5;
    replayBtn.style.visibility = 'visible';
};

function render() {
    //Show correct message
        // if bet 0 "Welcome to BlackJack! Please place your bet."
        // else if ()     
    //display correct buttons 
    //update bet and pChips
    //deal cards
};