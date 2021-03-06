/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08','09', '10', 'J', 'Q', 'K', 'A'];
const masterDeck = buildMasterDeck();

/*----- app's state (variables) -----*/
let pChips, pCards, dCards, bet, pCardsTotal, dCardsTotal;


/*----- cached element references -----*/
const msgEl = document.getElementById('msg');
const ddBtn = document.getElementById('double-down')
const hitBtn = document.getElementById('hit')
const standBtn = document.getElementById('stand')
const betEl = document.getElementById('bet');
const betBtn = document.getElementById('betBtn');
const dealAgainBtn = document.getElementById('deal-again');
const walkAwayBtn = document.getElementById('walk-away');
const replayBtn = document.getElementById('replay');
const pcsEls = document.getElementById('pcs');
const dcsEls = document.getElementById('dcs');
const chipCountEl = document.getElementById('chip-count');

/*----- event listeners -----*/
document.querySelector('#hit').addEventListener('click', handleHit);
document.querySelector('#stand').addEventListener('click', dealersTurn);
document.querySelector('#double-down').addEventListener('click', handleDouble);
document.querySelector('#replay').addEventListener('click', init);
document.querySelector("#betBtn").addEventListener('click', placeBet);
document.querySelector("#deal-again").addEventListener('click', renderNewHand);
document.querySelector("#walk-away").addEventListener('click', walkAway);
// document.querySelector('#split').addEventListener('click', handleSplit);


/*----- functions -----*/
function init() {
    pChips = 1000;
    chipCountEl.innerHTML = `Your chips: $${pChips}`;
    bet = 0;
    renderNewHand();
};

function buildMasterDeck() {
    const deck = [];
    suits.forEach(function (suit) {
        ranks.forEach(function (rank) {
            deck.push({
                face: `${suit}${rank}`,
                value: Number(rank) || (rank === 'A' ? 11 : 10)
            });
        });
    });
    return deck;
};

function rendershuffledDeck() {
    const tempDeck = [...masterDeck];
    shuffledDeck = [];
    while (tempDeck.length) {
        const rndIdx = Math.floor(Math.random() * tempDeck.length);
        shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
    }
    return shuffledDeck
};

function pNewCard() {
    pCards.push(deck.pop())
    pCardsTotal += pCards[pCards.length - 1].value;
    let pNC = document.createElement(`div`);
    pNC.className = `card ${pCards[pCards.length - 1].face} pcs${pCards.length}`;
    pcsEls.appendChild(pNC);
    if (pCardsTotal > 21 && pCards.some(card => card.value === 11)) {
        let a11 = pCards.find(card => card.value === 11);
        a11.value = 1;
        pCardsTotal = 0;
        pCards.forEach(card => pCardsTotal += card.value);
        return pCardsTotal
    }
};

function dNewCard() {
    dCards.push(deck.pop());
    dCardsTotal += dCards[dCards.length - 1].value;
    let dNC = document.createElement(`div`);
    dNC.className = `card ${dCards[dCards.length - 1].face} dcs${dCards.length}`;
    dcsEls.appendChild(dNC);
    if (dCardsTotal > 21 && dCards.some(card => card.value === 11)) {
        let a11 = dCards.find(card => card.value === 11);
        a11.value = 1;
        dCardsTotal = 0;
        dCards.forEach(card => dCardsTotal += card.value);
        return dCardsTotal
    }
};

function placeBet() {
    if (parseInt(betEl.value) > pChips) {
        msgEl.innerHTML = `Sorry, you only have ${pChips} to bet. Please place proper bet.`;
    } else if (parseInt(betEl.value) < 1) {
        msgEl.innerHTML = `Please place proper bet.`;
    } else {
        bet = betEl.value;
        pChips -= bet;
        chipCountEl.innerHTML = `Your Chips: $${pChips}`;
        betBtn.style.visibility = 'hidden';
        betEl.style.visibility = 'hidden';
        initDeal();
        return bet;
    };
};

function initDeal() {
    pNewCard();
    pNewCard();
    dNewCard();
    if (pCardsTotal === 22) { pCardsTotal -= 10 };
    if (pCardsTotal === 21) {
        dNewCard();
        if (pCardsTotal === 21 && dCardsTotal !== 21) {
            bet *= 0.75;
            getWinner();
        }
    } else {
            if (pChips < bet) {
                msgEl.innerHTML = `You have ${pCardsTotal} would you like to Hit or Stand`;
                ddBtn.style.visibility = 'hidden';
            } else {
                msgEl.innerHTML = `You have ${pCardsTotal} would you like to Hit, Stand or Double-Down`;
                ddBtn.style.visibility = 'visible';
            };
        hitBtn.style.visibility = 'visible';
        standBtn.style.visibility = 'visible';
    };
};


function handleDouble() {
    pChips -= bet;
    bet *= 2;
    pNewCard();
    if (pCardsTotal <=21) {
        dealersTurn();
    } else { 
        getWinner();
    };
    return bet
};



function handleHit() {
    ddBtn.style.visibility = 'hidden';
    pNewCard();
    if (pCardsTotal === 21) {
        hitBtn.style.visibility = 'hidden';
        msgEl.innerHTML = `Noice, you have ${pCardsTotal}! Lets Stand and see what the dealers got.`;
    } else if (pCardsTotal < 21) {
        msgEl.innerHTML = `You have ${pCardsTotal} would you like to Hit or Stand`;
    } else {
        getWinner();
    };
};



function dealersTurn() {
    while (dCardsTotal < 18) {
        dNewCard();
    };
    getWinner();
    return dCardsTotal;
};

function getWinner() {
    hitBtn.style.visibility = 'hidden';
    standBtn.style.visibility = 'hidden';
    ddBtn.style.visibility = 'hidden';
    if (pCardsTotal > 21) {
        msgEl.innerHTML = `You've bust with ${pCardsTotal}, you lost $${bet}.`;
    } else if (dCardsTotal > 21) {
        pChips += bet * 2;
        msgEl.innerHTML = `The dealer bust with ${dCardsTotal}, you won $${bet * 2}!`
    } else if (pCardsTotal > dCardsTotal) {
        pChips += bet * 2;
        msgEl.innerHTML = `Bam! Your ${pCardsTotal} beats the dealr's ${dCardsTotal}. You've won $${bet * 2}!`;
    } else if (pCardsTotal === dCardsTotal) {
        pChips += bet * 1;
        msgEl.innerHTML = `Welp, its a tie. You win nothing but lose nothing.`;
    } else {
        msgEl.innerHTML = `Bummer, the dealers ${dCardsTotal} beat your ${pCardsTotal}. You lose $${bet}`;
    };
    chipCountEl.innerHTML = `Your chips: $${pChips}`
    if (pChips === 0) {
        msgEl.innerHTML = `Bummer, you lost and you're out of chips, would you like to buy back in?`
        hitBtn.style.visibility = 'hidden';
        standBtn.style.visibility = 'hidden';
        ddBtn.style.visibility = 'hidden';
        betBtn.style.visibility = 'hidden';
        replayBtn.style.visibility = 'visible';
    } else {
        dealAgainBtn.style.visibility = 'visible';
        walkAwayBtn.style.visibility = 'visible';
    }
};


function renderNewHand() {
    buildMasterDeck();
    rendershuffledDeck();
    deck = shuffledDeck;
    deck.forEach(function(card) {
        if (card.value === 1){
            card.value = 11; 
        }
    });
    pCards = [];
    dCards = [];
    pCardsTotal = 0;
    dCardsTotal = 0;
    msgEl.innerHTML = `Please place your bet to get started.`
    pcsEls.innerHTML = '';
    dcsEls.innerHTML = '';
    betEl.value = 100;
    betEl.style.visibility = 'visible';
    hitBtn.style.visibility = 'hidden';
    standBtn.style.visibility = 'hidden';
    ddBtn.style.visibility = 'hidden';
    betBtn.style.visibility = 'visible';
    dealAgainBtn.style.visibility = 'hidden';
    walkAwayBtn.style.visibility = 'hidden';
    replayBtn.style.visibility = 'hidden';
};

function walkAway() {
    renderNewHand();
    msgEl.innerHTML = `Thanks for playing!`
};


init();