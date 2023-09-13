// let ThreeByTwoGrid =[
//     ['NuCamp', 3, 1],
//     [2, 4, 'NuCamp']
// ];
// console.log(ThreeByTwoGrid);
// console.log(ThreeByTwoGrid[0][0]);
// console.log(ThreeByTwoGrid[0][1]);

//function chooseRandomNumber() {
  //  var randomNumber = Math.floor(Math.random() * ThreeByTwoGrid.length);
    //console.log(randomNumber);
    //return ThreeByTwoGrid[randomNumber];
  //}

  //chooseRandomNumber();

  let array = [4,5,6];
  function chooseRandomNumber(array) {
    var randomNumber = Math.floor(Math.random() * array.length);
    console.log(randomNumber);
    return array[randomNumber];
  }
  let test = chooseRandomNumber(array);
  console.log(test);


  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
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

  let testTwo= shuffle(array);
  console.log(testTwo);
