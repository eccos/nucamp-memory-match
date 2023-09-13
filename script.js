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
let gridArr = shuffle([4, 5, 6, 5, 4, 6]);

runGame();
function runGame() {
  while (true) {
    let coord1 = prompt(`${gridArr} \nEnter x,y coordinates of card 1 to select`);
    if (coord1 === null) { break; }

    let x1 = coord1;
    let card1 = gridArr[x1];
    console.log(card1);

    let coord2 = prompt(`${gridArr} \nEnter x,y coordinates of card 2 to select`);
    let x2 = coord2;
    let card2 = gridArr[x2];

    if (card1 === card2 && x1 !== x2) {
      gridArr[x1] = null;
      gridArr[x2] = null;
    }

    // win condition
    for (let i = 0; i < gridArr.length; i++) {
      let val = gridArr[i];
      if (val !== null) {
        break;
      }
      if (i === gridArr.length - 1) {
        alert("You won!");
        return;
      }
    }
  }
}