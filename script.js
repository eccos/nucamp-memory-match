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
const UNIQUE_NUMS = [1, 2, 3];
const PAIR_NUMS = UNIQUE_NUMS.concat(UNIQUE_NUMS);
const SHUFFLED_PAIRS = shuffle(PAIR_NUMS);
console.log("shuffledPairs: " + SHUFFLED_PAIRS);

const INDEX_LABELS = [];
for (let i = 0; i < SHUFFLED_PAIRS.length; i++) {
  INDEX_LABELS.push(i);
}

runGame();

function runGame() {
  while (true) {
    const card1Index = cardSelection();
    if (card1Index === null) { break; }
    const card1 = SHUFFLED_PAIRS[card1Index];

    const card2Index = cardSelection();
    if (card1Index === null) { break; }
    const card2 = SHUFFLED_PAIRS[card2Index];

    if (card1Index !== card2Index && card1 === card2) {
      SHUFFLED_PAIRS[card1Index] = null;
      SHUFFLED_PAIRS[card2Index] = null;
    }

    checkWinCondition();
  }
}

function cardSelection() {
  return prompt(`Cards: ${SHUFFLED_PAIRS} \nIndex: ${INDEX_LABELS} \nEnter index of card to select`);
}

function checkWinCondition() {
  for (let i = 0; i < SHUFFLED_PAIRS.length; i++) {
    let val = SHUFFLED_PAIRS[i];
    if (val !== null) {
      break;
    }
    if (i === SHUFFLED_PAIRS.length - 1) {
      alert("You won!");
      return;
    }
  }
}