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

// branch 3: add logic to display grid (prompt()) and select card (maybe x,y coord?)
const UNIQUE_CARDS = [1, 2, 3];
const PAIR_CARDS = UNIQUE_CARDS.concat(UNIQUE_CARDS);
const SHUFFLED_CARDS = shuffle(PAIR_CARDS);
console.log(Object.keys({ SHUFFLED_CARDS })[0], SHUFFLED_CARDS);

const INDEX_LABELS = [];
for (let i = 0; i < SHUFFLED_CARDS.length; i++) {
  INDEX_LABELS.push(i);
}

runGame();

function runGame() {
  let isWin = false;
  while (!isWin) {
    const card1Index = cardSelection();
    if (card1Index === null) { break; }
    const card1 = SHUFFLED_CARDS[card1Index];

    const card2Index = cardSelection();
    if (card1Index === null) { break; }
    const card2 = SHUFFLED_CARDS[card2Index];

    if (card1Index !== card2Index && card1 === card2) {
      SHUFFLED_CARDS[card1Index] = null;
      SHUFFLED_CARDS[card2Index] = null;
    }

    isWin = checkWinCondition();
  }
}

function cardSelection() {
  return prompt(`Cards: ${SHUFFLED_CARDS} \nIndex: ${INDEX_LABELS} \nEnter index of card to select`);
}

function checkWinCondition() {
  for (card of SHUFFLED_CARDS) {
    if (card !== null) {
      return false;
    }
  }
  alert("You won!");
  return true;
}