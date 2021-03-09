/*----- constants -----*/ 
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08',
 '09', '10', 'J', 'Q', 'K', 'A'];

 const masterDeck = buildMasterDeck();



/*----- app's state (variables) -----*/
let pChips, winner, pCards, dCards, turn, bet, pCardsTotal, dCardsTotal; 




/*----- cached element references -----*/
const msgEl = document.getElementById('msg');
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
    pChips = 100;
    turn = 1; 
    deck = shuffledDeck();
    pCards = [];
    dCards = [];
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
    if (pCards === []) {
        return;
    } else {
        total = 0;
        pCards.forEach(function(card, cardIdx) {
        total += pCards[cardIdx].value;
        let pNC = document.createElement(`div`);
        pNC.className = `card ${card.face}`;
        pcsEls.appendChild(pNC);
        });
    }
    pCardsTotal = total;
    return pCardsTotal
};

function dNewCard () {
    if (pCards === []) {
        return
    } else {
        total = 0;
        dCards.forEach(function(card, cardIdx) {
        total += dCards[cardIdx].value;
        let dNC = document.createElement(`div`);
        dNC.className = `card ${card.face}`;
        dcsEls.appendChild(dNC);
        });
    }
    dCardsTotal = total;
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

console.log(bet);

function initDeal() {
    pCards.push(deck[0], deck[1]);
    dCards.push(deck[0]);
    pNewCard();
    dNewCard();
    if (pCardsTotal === 21){
    // if (true) {
        dCards.push(deck[0])
        dNewCard();
        if (pCardsTotal === 21 && dCardsTotal !== 21) {
        // if (false) {
            msgEl.innerHTML = `BlackJack! You win and extra 50% of your bet!!`;
            pChips = pChips + bet * 1.5;
            } else if (pCardsTotal === 21 && dCardsTotal === 21){
                msgEl.innerHTML = `Push. You didn't win...but you didn't lose`;
            } 
    } 
    else {
        msgEl.innerHTML = `You have ${pCardsTotal} would you like to Hit, Stand or  Double-Down`;
    }
};





function handleHit() {
//     pCards.push(deck[0]);
//     if 
};

function handleStand() {

};

function handleDouble() { 

};

function getWinner() {

    replayBtn.style.visibility = 'visible';
};

function render() {
    //Show correct message
        // if bet 0 "Welcome to BlackJack! Please place your bet."
        if (bet === 0){
            msgEl.innerHTML = `Please place your bet to get started.`
        } 
        // else if ()     
    //display correct buttons 
    //update bet and pChips
    //deal cards
};