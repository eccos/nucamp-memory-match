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
  const shuffledCards = shuffle(pairCards);
  console.log(Object.keys({ shuffledCards })[0], shuffledCards);

  const cardIndexLabels = [];
  for (let i = 0; i < shuffledCards.length; i++) {
    cardIndexLabels.push(i);
  }

  let isWin = false;
  while (!isWin) {
    const card1Index = cardSelection(shuffledCards, cardIndexLabels, 1);
    if (card1Index === null) { break; }
    const card1 = shuffledCards[card1Index];

    const card2Index = cardSelection(shuffledCards, cardIndexLabels, 2);
    if (card2Index === null) { break; }
    const card2 = shuffledCards[card2Index];

    if (card1Index !== card2Index && card1 === card2) {
      shuffledCards[card1Index] = MATCH_CHAR;
      shuffledCards[card2Index] = MATCH_CHAR;
    }

    isWin = checkWinCondition(shuffledCards);
  }
}

function cardSelection(cards, cardIndexLabels, selectionNum) {
  return prompt(`Cards: ${cards.join(', ')} \nIndex: ${cardIndexLabels.join(', ')} \nEnter index to select card ${selectionNum}`);
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