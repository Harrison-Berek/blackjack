/*----- constants -----*/ 
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08',
 '09', '10', 'J', 'Q', 'K', 'A'];

 const masterDeck = buildMasterDeck();



/*----- app's state (variables) -----*/
let playerChips, winner, playerCards, dealerCards, turn, bet; 

/*----- cached element references -----*/
const msgEl = document.getElementById('msg');
 
/*----- event listeners -----*/

document.querySelector('#hit').addEventListener('click', handleHit);
document.querySelector('#stand').addEventListener('click', handleStand);
document.querySelector('#double-down').addEventListener('click', handleDouble);
document.querySelector('#replay').addEventListener('click', init);
// document.querySelector("#betBtn").addEventListener('click', placeBet);
// document.querySelector('#split').addEventListener('click', handleSplit);


/*----- functions -----*/
function init() {
    playerChips = 100;
    turn = 1; 
    deck = shuffledDeck();
    playerCards = [];
    dealerCards = [];
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
   bet = prompt(`Your chip total is ${playerChips}. Please place your bet:`)
   while (bet > playerChips) {
    bet = prompt(`Sorry, you only have ${playerChips} to bet. Please place your bet:`) 
   } 
   initDeal();
   return bet; 
};

console.log(bet);

function initDeal() {
    playerCards.push(deck[0], deck[1]);
    dealerCards.push(deck[0]);
    if (playerCards[0].value + playerCards[1].value === 21){
    // if (true) {
        dealerCards.push(deck[0])
        if (playerCards[0].value + playerCards[1].value === 21 && dealerCards[0].value
            + dealerCards[1].value !== 21) {
        // if (false) {
            msgEl.innerHTML = `BlackJack! You win and extra 50% of your bet!!`;
            playerChips = playerChips + bet * 1.5;
            } else if (playerCards[0].value + playerCards[1].value === 21 && dealerCards[0].value
                + dealerCards[1].value === 21){
                msgEl.innerHTML = `Push. You didn't win...but you didn't lose`;
            } 
    } 
    // else {
    //     msgEl.innerHTML = `You have ${playerCards[0].value + playerCards[1].value} would you like to Hit, Stand or  Double-Down`;
    // }
};



let pcTotal = playerCards.forEach(function(card) {
    total = 0;
    total += playerCards[card].value;
})

function handleHit() {
//     playerCards.push(deck[0]);
//     if 
};

function handleStand() {

};

function handleDouble() { 

};

function getWinner() {

};

function render() {
    //Show correct message
        // if bet 0 "Welcome to BlackJack! Please place your bet."
        if (bet === 0){
            msgEl.innerHTML = `Please place your bet to get started.`
        } 
        // else if ()     
    //display correct buttons 
    //update bet and playerChips
    //deal cards
};