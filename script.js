let array = [4, 5, 6, 5, 4, 6];
function chooseRandomNumber(array) {
  var randomNumber = Math.floor(Math.random() * array.length);
  console.log(randomNumber);
  return array[randomNumber];
}
let test = chooseRandomNumber(array);
console.log(test);

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

let testTwo = shuffle(array);
console.log(testTwo);

// branch 3: add logic to display grid (prompt()) and select card
const MATCH_CHAR = "-";

runGame();

function runGame() {
  const uniqueCards = [1, 2, 3];
  const pairCards = uniqueCards.concat(uniqueCards);
  const cards = shuffle(pairCards);
  console.log("Shuffled Cards: " + cards);

  const cardIndexLabels = [];
  for (let i = 0; i < cards.length; i++) {
    cardIndexLabels.push(i);
  }

  let isWin = false;
  while (!isWin) {
    let selectionNum = 1;
    const phrase = `Enter index to select card ${selectionNum} \n${cardIndexLabels.join(', ')}`;
    let cardIndex1 = prompt(phrase);
    if (cardIndex1 === null) { return; }
    cardIndex1 = parseInt(cardIndex1);
    while (isNaN(cardIndex1) || cardIndex1 < 0 || cardIndex1 > cards.length - 1) {
      cardIndex1 = parseInt(prompt(`Invalid selection. Try again.\n ${phrase}`));
    }
    const card1 = cards[cardIndex1];

    selectionNum = 2;
    let cardIndex2 = prompt(phrase);
    if (cardIndex2 === null) { return; }
    cardIndex1 = parseInt(cardIndex1);
    while (isNaN(cardIndex2) || cardIndex2 < 0 || cardIndex2 > cards.length - 1 || cardIndex2 === cardIndex1) {
      cardIndex2 = parseInt(prompt(`Invalid selection. Try again.\n ${phrase}`));
    }
    const card2 = cards[cardIndex2];

    if (card1 === card2) {
      cards[cardIndex1] = MATCH_CHAR;
      cards[cardIndex2] = MATCH_CHAR;
    }

    isWin = checkWinCondition(cards);
  }
}

function cardSelection(cards, cardIndexLabels, selectionNum) {
  return cardIndex1;
}

function checkWinCondition(cards) {
  for (let i = 0; i < cards.length - 3; i++) {
    const card = cards[i];
    if (card !== MATCH_CHAR) {
      return false;
    }
  }
  // all cards matched or only 2 cards remain
  alert("You won!");
  return true;
}