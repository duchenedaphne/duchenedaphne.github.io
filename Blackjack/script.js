
let player = {  // object
    name: "Money",  // key : value pairs
    chips: 200
}
let cards = []; // empty array
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1; // math object
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "🎉 Blackjack! You win! 🎉";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && hasBlackJack === false) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}

/****************** */

// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]; 
// let appleShelf = document.getElementById("apple-shelf");
// let orangeShelf = document.getElementById("orange-shelf");

// function getFruit() {
//     for (let i = 0; i < fruit.length; i++){
//         if (fruit[i] === "🍎") {
//             appleShelf.textContent += "🍎";
//         } else if (fruit[i] === "🍊") {
//             orangeShelf.textContent += "🍊";
//         }
//     }
// }

// getFruit();

// let hands = [
//     "rock", "paper", "scissor"
// ]

// function getHand() {
//     let randomIndex = Math.floor(Math.random() * 3);
//     return hands[randomIndex];
// }

// console.log(getHand());

// largeCountries.shift();
// largeCountries.unshift("China");
// largeCountries.pop();
// largeCountries.push("Pakistan");


// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i]);
// }







