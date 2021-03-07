/*----- constants -----*/ 
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08',
 '09', '10', 'J', 'Q', 'K', 'A'];

 const masterDeck = buildMasterDeck();



/*----- app's state (variables) -----*/
let chips, winner, playerCards, dealerCards, turn; 

/*----- cached element references -----*/
// const msgEl = document.getElementById('msg');

/*----- event listeners -----*/
document.querySelector('#hit').addEventListener('click', handleHit);
document.querySelector('#stand').addEventListener('click', handleStand);
document.querySelector('#double-down').addEventListener('click', handleDouble);
document.querySelector('#replay').addEventListener('click', init);
// document.querySelector('#split').addEventListener('click', handleSplit);


/*----- functions -----*/
function init() {
    chips = 1000;
    turn = 1; 
    deck = 
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
console.log(masterDeck);

// function dealCard() {
//     if (turn === 1 )
// };

function handleHit() {

};

function handleStand() {

};

function handleDouble() { 

};

function getWinner() {

};

function render() {

};