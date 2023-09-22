function chooseRandomNumber(array) {
    var randomNumber = Math.floor(Math.random() * array.length);
    console.log(randomNumber);
    return array[randomNumber];
}

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

// logic to display grid (prompt()) and select card
function runGame() {
    const uniqueCards = [1, 2, 3];
    const pairCards = uniqueCards.concat(uniqueCards);
    const cards = shuffle(pairCards);
    console.log("Shuffled Cards: " + cards);
    const cardIndexLabels = [];
    for (let i = 0; i < cards.length; i++) {
        cardIndexLabels.push(i);
    }

    const enterIndexPhrase = `Enter index to select card`;
    const invalidPhrase = `Invalid selection. Try again.`;

    let isWin = false;
    while (!isWin) {
        let selectionNum = 1;
        let cardIndex1 = prompt(`${enterIndexPhrase} ${selectionNum} \n${cardIndexLabels.join(', ')}`);
        if (cardIndex1 === null) { return; }
        cardIndex1 = parseInt(cardIndex1);
        while (isNaN(cardIndex1) || !cardIndexLabels.includes(cardIndex1)) {
            cardIndex1 = prompt(`${invalidPhrase} \n${enterIndexPhrase} ${selectionNum} \n${cardIndexLabels.join(', ')}`);
            if (cardIndex1 === null) { return; }
            cardIndex1 = parseInt(cardIndex1);
        }
        const card1 = cards[cardIndex1];

        selectionNum = 2;
        let cardIndex2 = prompt(`Flipped over card at index ${cardIndex1} to reveal ${card1}. \n${enterIndexPhrase} ${selectionNum} \n${cardIndexLabels.join(', ')}`);
        if (cardIndex2 === null) { return; }
        cardIndex2 = parseInt(cardIndex2);
        while (isNaN(cardIndex2) || !cardIndexLabels.includes(cardIndex2) || cardIndex2 === cardIndex1) {
            cardIndex2 = prompt(`${invalidPhrase} \nFlipped card: ${card1}. \n${enterIndexPhrase} ${selectionNum} \n${cardIndexLabels.join(', ')}`);
            if (cardIndex2 === null) { return; }
            cardIndex2 = parseInt(cardIndex2);
        }
        const card2 = cards[cardIndex2];

        let phrase2 = `Flipped over card at index ${cardIndex2} to reveal ${card2}.`;
        if (card1 === card2) {
            alert(`${phrase2} \nCards ${card1} and ${card2} match!`);
            cardIndexLabels.splice(cardIndexLabels.indexOf(cardIndex1), 1);
            cardIndexLabels.splice(cardIndexLabels.indexOf(cardIndex2), 1);
        } else {
            alert(`${phrase2} \nCards ${card1} and ${card2} don't match.`);
        }

        isWin = checkWinCondition(cardIndexLabels);
        if (isWin) {
            alert("You won!");
        }
    }
}

function checkWinCondition(cardIndexLabels) {
    if (cardIndexLabels.length > 2) { return false; }
    return true;
}

function createUniqueCards(gridSize) {
    const halfGrid = gridSize / 2;
    const uniqueCards = [];
    for (let i = 0; i < halfGrid; i++) {
        uniqueCards.push(i + 1);
    }
    return uniqueCards;
}

function createCustomGrid(rowCardLen, colCardLen) {
    const gridSize = rowCardLen * colCardLen;
    const rowCardLimit = 12;
    const colCardLimit = 6;
    if (rowCardLen > rowCardLimit) {
        console.error(`Row can only have ${rowCardLimit} cards max`);
        return;
    }
    if (colCardLen > colCardLimit) {
        console.error(`Column can only have ${colCardLimit} cards max`);
        return;
    }
    if (gridSize % 2 !== 0) {
        console.error("Grid cannot have an odd number of cards");
        return;
    }
    const uniqueCards = createUniqueCards(gridSize);
    const pairCards = uniqueCards.concat(uniqueCards);
    const cards = shuffle(pairCards);

    const rows = [];
    let cardIndex = 0;
    for (let row = 0; row < colCardLen; row++) {
        // create html row
        const row = createDomRow();
        for (let col = 0; col < rowCardLen; col++) {
            // create html col & create/append card
            const col = createDomCol();
            const cardId = "card-" + (cardIndex + 1);
            const card = createDomCard(cardId, cards[cardIndex]);
            cardIndex++;
            col.appendChild(card);
            row.appendChild(col);
        }
        rows.push(row);
    }
    return rows;
}

function createDomRow() {
    // <div class="row">
    const elem = document.createElement("div");
    elem.className = "row";
    return elem;
}

function createDomCol() {
    // <div class="col">
    const elem = document.createElement("div");
    elem.className = "col";
    return elem;
}

function createDomCard(id, value) {
    // <img src="card-back.png" class="img-fluid" id="card-1" alt="facedown card">
    const elem = document.createElement("img");
    elem.src = "card-back.png";
    elem.className = "img-fluid";
    elem.id = id;
    elem.alt = "facedown card";
    elem.textContent = value;
    return elem;
}