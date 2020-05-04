const advices = [];

const addButton = document.querySelector('.add');
const resetButton = document.querySelector('.clean');
const showAdviceButton = document.querySelector('.showAdvice');
const showOptionsButton = document.querySelector('.showOptions');
const input = document.querySelector('input');
const h1 = document.querySelector('h1');
let lastIndex;

const addAdvice = (e) => {
    e.preventDefault();
    if (input.value.length) {
        for (advice of advices) {
            if (advice === input.value) {
                alert('Ej no, taka parada juz jest. Wysil sie troszeczkę');
                input.value = '';
                return;
            }
        }
        advices.push(input.value);
        alert(`Zostala dodana mozliwosc: ${input.value}`);
        input.value = "";
    } else {
        alert('Mozesz coś wpisać ???');
    }
}

const resetAdvices = (e) => {
    e.preventDefault();
    advices.length = 0;

    // for (let i = 0; i < advices.length; i++) {
    //     advices.shift();
    // }
    h1.textContent = '';
}

const showAdvices = (e) => {
    let index;

    if (advices.length == 1) {
        h1.textContent = `Moja rada to: ${advices[0]}`;
    } else if (advices.length) {
        do {
            index = Math.floor(Math.random() * advices.length);
        } while (lastIndex == index)
        lastIndex = index;
        h1.textContent = `Moja rada to: ${advices[index]}`;
    } else {
        h1.textContent = 'Nie ma czego pokazywać :(';
    }

}

const showOptions = (e) => {
    if (advices.length) {
        h1.textContent = 'Twoje moliwości to:'
        advices.forEach(advice => h1.textContent += ` ${advice},`)

    } else {
        h1.textContent = 'Jeszcze nie ma zadnych mozliwości :(';
    }
}

addButton.addEventListener('click', addAdvice);
resetButton.addEventListener('click', resetAdvices);
showAdviceButton.addEventListener('click', showAdvices);
showOptionsButton.addEventListener('click', showOptions);


