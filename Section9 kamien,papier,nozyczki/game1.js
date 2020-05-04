const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    palyerHand: "",
    aiHand: "",
}

const hands = document.querySelectorAll('.select img');
// const handSelection = () => {

// }
function handSelection() {
    game.palyerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 5px red';
    console.log(game.palyerHand);
}
function aiChoice() {
    const index = Math.floor(Math.random() * 3);
    const aiHand = hands[index].dataset.option;
    console.log(aiHand);
    return aiHand;
}
function checkResult(player, ai) {
    if (player == ai) {
        return 'draw';
    } else if ((player === 'papier' && ai === 'kamień') ||
        (player === 'kamień' && ai === 'nożyczki') ||
        (player === 'nożyczki' && ai === 'papier')) {
        return 'win';
    } else {
        return 'loss';
    }
}
function publishResults(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    // game.palyerHand = '';
    let message = '';

    if (result == 'draw') {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').style.color = 'blue';
        message = 'Remisik'
    } else if (result === 'loss') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').style.color = 'red';
        message = 'Przegrana :('
    } else {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').style.color = 'green';
        message = 'Wygrana !!! :D'
    }
    document.querySelector('[data-summary="who-win"]').textContent = message;
}
function endGame() {
    document.querySelector(`[data-option="${game.palyerHand}"]`).style.boxShadow = '';
    game.palyerHand = "";
}
function startGame() {
    if (!game.palyerHand) {
        return alert('Wybierz dłoń !!!');
    }

    game.aiHand = aiChoice();
    const gameResult = checkResult(game.palyerHand, game.aiHand);

    publishResults(game.palyerHand, game.aiHand, gameResult);

    endGame();
}


hands.forEach(hand => {
    hand.addEventListener('click', handSelection)
});

document.querySelector('.start').addEventListener('click', startGame);