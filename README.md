BLACKJACK

Background/Rules:

The basics: 
    
    How to win
    - Have a higher card total than the dealer without going over 21. 
    - If the dealer bust and you dont
    - If you get 21 (blackjack) on the first two cards and the dealer does not.
    
    How to lose: 
    - If your card total goes over 21
    - If you stand and the dealer gets a higher card total without going over 21. 

    How to bet: 
    - You bet before any cards are delt
    - You can double that bet after the initial deal. This is called doubling down. You double your bet but you must take one, and only one more card, then stand and hope to beat the dealers hand. (You also obviouly must have enough chips to double your bet)

    The Deal: 
    - Players are delt clockwise 2 cards face up and the dealer is delt one card face up on the initial deal. 
    - The dealer will then go around the table clockwise to see if players would like to:
        - Hit: add a card to their total (this can be repeated until the player gose over 21(bust), or tells the dealer they will stand with the cards they have)
        - Stand: stay with the cards they have
        - Double Down: (if they have the chips to do so)
    - Finaly the dealer will deal themselves cards
        -If the dealers total is less than 18, they must hit.
        - If their total is 18 or over and they havent bust, they must stand. 

    Card Values: 
    - All numeric cards are the value that they show on the card
    - All face cards are worth 10 
    - Aces are worth 11. However, if you have an ace and go over 21, the value of that ace becomes 1.
    
    Payouts:
    - If you win, you win twice what you bet
        Special cases:
        - If you get blackjack on the initial deal you win 150% of what you bet.
        -If you doubled-down you win double your original bet
    - If you lose, well you lose what you bet. 

Sounds simple enough, but if you need more guidence and/or looking for strategy below is a very useful link. 
[Rules and Intro to Blackjack](https://www.blackjackapprenticeship.com/how-to-play-blackjack/)

NOTE: "split" is not an option yet but will be coming soon

Screenshots/WireFrame:

<img src="https://i.imgur.com/5649gTZ.png">
<img src="https://i.imgur.com/oKuMZq1.png">
<img src="https://i.imgur.com/PLJtuAq.png">
<img src="https://i.imgur.com/uavNVl8.jpg">


Technologies Used:

    HTML, CSS, JavaScript

Getting Started: 

[Click here to play game](https://harrison-berek.github.io/blackjack/)

Get started by placing your first bet. Follow the prompts to win as much "money" as you can. Leave anytime throught the walk away button. Enjoy and Good Luck!


Icebox Items: 

- Add "SPLIT" option when dealt a pair on the opeing deal
- Animate cards being dealt
- Beautify, AKA keep updateing CSS to make it more astetically pleasing 


<!-- Pseudocode:
 1. Define constants 
     1.1. Create card values
     1.2. Card suits
     1.3. Card numbers/symbols
 2. Define variables
     2.1. Player chip balance
     2.2. Player card value (ARRAY)
     2.3. Dealer card value (ARRAY)
     2.4. Winner/Tie(push)
         2.4.1. Determine winner or tie
         2.4.2. update player chip balance
     2.5. Deck (will be updated after cards are played)
     2.6. discards 
 3. Store elements
     3.1. Chips bet
    3.2. Cards delt
     3.3. cards left
     3.4. chip balance


 4. Initializing
     4.1. Shuffle cards
         4.1.1 Deal cards from cards left
     4.2. Inisialize table
         4.2.1. Show  cards (dealer and player)
         4.2.2. Show starting chips
         4.2.3. show bet button
     4.3. wait for click from user

 5. Handle player interaction
     ADD BLACKJACK SCENARIO
    
     5.1. Handle bet
         5.1.1. store chips bet
         5.1.2. store remaining balance
     5.2. Show/Handle Hit/Stay
         5.2.1. Deal new card and add to player total
         5.2.2. if hit: 
             bust -> lose ()
             !bust -> add total and ask hit/stay again 
         5.2.3. if stay initiate computer turn
     <5.2.a. Handle Double Down> Only availible(button visible if player total <= 11)
         5.2.a.1. if DD
             5.2.a.1.1. bet *= 2
             5.2.a.1.2. only one more card is drawn and added to player total
     <5.2.b. Handle split> visible if player card 1 = player card 2
         5.2.b.1. if split
             5.2.b.1.1. bet *= 2
             5.2.b.1.2. split hands (DD is still an option)

     5.3. Computer/dealers turn  
         5.3.1. if card total <= 16 HIT
         5.3.2. if 17 > DCT > 21 stay
     5.4. Determine winner/push
         5.4.1. if player bust, winner = false, return
         5.4.2. else if dealer bust or player value > dealer value
             5.4.2.1. chip balance = chip balance + (bet *2) 
             <>
         5.4.3. else if player total = dealer total
             5.4.3.1. chip balance = chip balance
     5.5. if deck = 0, take cards from discards, shuffle and set = to deck
     5.6. game over 
         5.6.1. balance show deal again button
         5.6.2. balance = $1000 Great job, grab your chips and run
         5.6.3. !balance Sorry youre out of chips

 6. Handle Replay 
     6.1. reset chips
     6.2. reset board
     6.3. reset shuffle deck -->
        












