# Guess My Deck

Welcome to this repo .

## Table of Contents

- [**Getting Started**](#getting-started)
- [**How to play**](#how_to_play)
- [**Bug Fixes and Developments**](#bug_fixes_and_developments)

## Getting Started

Welcome to the exciting Guess my deck game that combines strategy, focus and a touch of luck!(You know it's purely luck depended ).

## How to play

- In this card game, both players and the computer are initially dealt three cards each. The first card can have a value of up to 3, while the second and third cards can have values of up to 5 and 7, respectively(both computer's and players). Players have the flexibility to choose any number of cards from their deck.
- If a player's card totals 8, they secure a victory in that round. However, if a player's card exceeds 8, they automatically lose the round. In the event that a player's total card points fall below 8, they can challenge the computer's cards.
- At first, player's points are compared with the combined points of the computer's first two cards. If player's points lower, then player lose the round, even if computer's third card could push the total above 8(read next rule for more)
- If a player's points exceed the total points of the computer's three cards, they win the round. Conversely, if a player's points are lower than the computer's points and the computer's total is less than 8, the player loses the round. Lastly, if the computer's three-card total exceeds 8, victory is awarded to the player.

## Bug Fixes and Developments

My first  plan included a score system that awarded +1 point to winners and deduct -1 point from losers. The score starts at 10, the first Participant to reach 20 points will be declared the winner. Unfortunately score system introduce a bug in the game that, while not occurring consistently, occurs frequently enough to break the game. As a temporary solution, I have deactivated this function. The relevant code is still in the script but has been commented out and once it is fixed, I will update the repository with the fixed code.
