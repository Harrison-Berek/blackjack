// <!-- 
// 1. Define constants 
//     1.1. Create card values
//     1.2. Card suits
//     1.3. Card numbers/symbols
const cardValues = {
    '02': 2, 
    '03': 3, 
    '04': 4, 
    '05': 5, 
    '06': 6, 
    '07': 7, 
    '08': 8, 
    '09': 9, 
    '10': 10, 
    'J': 10, 
    'Q': 10, 
    'K': 10, 
    'A11': 11,
    'A1': 1
};
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08',
 '09', '10', 'J', 'Q', 'K', 'A'];

// 2. Define variables
//     2.1. Player chip balance
//     2.2. Player card value (ARRAY)
//     2.3. Dealer card value (ARRAY)
//     2.4. Winner/Tie(push)
//         2.4.1. Determine winner or tie
//         2.4.2. update player chip balance
//     2.5. Deck (will be updated after cards are played)
//     2.6. discards 
let chips, winner, deck, playerCards, dealerCards

// 3. Store elements
//     3.1. Chips bet
//     3.2. Cards delt
//     3.3. cards left
//     3.4. chip balance

// 4. Initializing
//     4.1. Shuffle cards
//         4.1.1 Deal cards from cards left
//     4.2. Inisialize table
//         4.2.1. Show  cards (dealer and player)
//         4.2.2. Show starting chips
//         4.2.3. show bet button
//     4.3. wait for click from user

// 5. Handle player interaction
//     ADD BLACKJACK SCENARIO
    
//     5.1. Handle bet
//         5.1.1. store chips bet
//         5.1.2. store remaining balance
//     5.2. Show/Handle Hit/Stay
//         5.2.1. Deal new card and add to player total
//         5.2.2. if hit: 
//             bust -> lose ()
//             !bust -> add total and ask hit/stay again 
//         5.2.3. if stay initiate computer turn
//     <5.2.a. Handle Double Down> Only availible(button visible if player total <= 11)
//         5.2.a.1. if DD
//             5.2.a.1.1. bet *= 2
//             5.2.a.1.2. only one more card is drawn and added to player total
//     <5.2.b. Handle split> visible if player card 1 = player card 2
//         5.2.b.1. if split
//             5.2.b.1.1. bet *= 2
//             5.2.b.1.2. split hands (DD is still an option)

//     5.3. Computer/dealers turn  
//         5.3.1. if card total <= 16 HIT
//         5.3.2. if 17 > DCT > 21 stay
//     5.4. Determine winner/push
//         5.4.1. if player bust, winner = false, return
//         5.4.2. else if dealer bust or player value > dealer value
//             5.4.2.1. chip balance = chip balance + (bet *2) 
//             <>
//         5.4.3. else if player total = dealer total
//             5.4.3.1. chip balance = chip balance
//     5.5. if deck = 0, take cards from discards, shuffle and set = to deck
//     5.6. game over 
//         5.6.1. balance show deal again button
//         5.6.2. balance = $1000 Great job, grab your chips and run
//         5.6.3. !balance Sorry youre out of chips

// 6. Handle Replay 
//     6.1. reset chips
//     6.2. reset board
//     6.3. reset shuffle deck
        

// -->