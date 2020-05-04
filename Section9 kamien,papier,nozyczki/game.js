// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const div = document.querySelector('.select');
const paper = document.querySelector('.first');
const rock = paper.nextElementSibling;
const scissors = rock.nextElementSibling;
const play = document.querySelector('.start');
const numbers = document.querySelector('.numbers');
const wins = document.querySelector('.wins');
const losses = document.querySelector('.losses');
const draws = document.querySelector('.draws');
const yourChoice = document.querySelector('.panel-left p');
const pcChoice = yourChoice.nextElementSibling;
const winner = document.querySelector('.panel-left h2');

let gamesNr = 0;
let winsNr = 0;
let lossesNr = 0;
let drowsNr = 0;
let playerChoice;
const pcOptions = ['Papier', 'Kamień', 'Nożyczki'];


const compPlay = () => {
    const compChoice = pcOptions[Math.floor(Math.random() * 3)];

    if (playerChoice) {
        if (playerChoice == compChoice) {
            winner.querySelector('span').textContent = 'Remis';
            winner.querySelector('span').style.color = 'blue';
            drowsNr++;
            draws.querySelector('span').textContent = drowsNr;
        } else if ((playerChoice == 'Papier' && compChoice == 'Kamień') ||
            (playerChoice == 'Kamień' && compChoice == 'Nożyczki') ||
            (playerChoice == 'Nożyczki' && compChoice == 'Papier')) {
            winner.querySelector('span').textContent = 'Ty wygrałeś :D';
            winner.querySelector('span').style.color = 'green';
            winsNr++;
            wins.querySelector('span').textContent = winsNr;
        } else {
            winner.querySelector('span').textContent = 'Komp wygrał :(';
            winner.querySelector('span').style.color = 'red';
            lossesNr++;
            losses.querySelector('span').textContent = lossesNr;
        }

        paper.style.border = '';
        rock.style.border = '';
        scissors.style.border = '';
        yourChoice.querySelector('span').textContent = playerChoice;
        pcChoice.querySelector('span').textContent = compChoice;

        gamesNr++;
        numbers.querySelector('span').textContent = gamesNr;
        playerChoice = '';
    } else {
        alert('Wybierz swoją opcję');
    }
};


play.addEventListener('click', compPlay);

div.addEventListener('click', (e) => {

    playerChoice = '';
    if (e.srcElement == paper) {
        playerChoice = paper.title;
        paper.style.border = '2px solid red';
        rock.style.border = '';
        scissors.style.border = '';

    } else if (e.srcElement == rock) {
        playerChoice = rock.title;
        paper.style.border = '';
        rock.style.border = '2px solid red';
        scissors.style.border = '';
    } else if (e.srcElement == scissors) {
        playerChoice = scissors.title.charAt(0).toUpperCase() + scissors.title.slice(1);
        paper.style.border = '';
        rock.style.border = '';
        scissors.style.border = '2px solid red';
    }

    yourChoice.querySelector('span').textContent = '';
    pcChoice.querySelector('span').textContent = '';
    winner.querySelector('span').textContent = '';

})

