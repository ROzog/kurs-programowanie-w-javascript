//Funkcje sa obiektami
//Funkcje jakko jedyny obiekt mzona wywołać
//Funkcje modyfikuja dane albo coś zwracają ALBO to i to
//Funkcja moze byc uruchamiana/wywolywana wielokrotnie

// Tworzenie funkacji

//1 - wyrazenie funkcyjne - const nazwaFunkcjiCoRobi = function() {}

const showMessage = function (message) {
    console.log(message);
}
showMessage('Ale jajka :)');

//2 - deklaracja funkcji
function addNumbers(number1, number2) {
    return number1 + number2;
}
console.log(addNumbers(09, 77));
//Plusem/minusem takiej funkcji jest hoisting. - podczas pierwszego uruchomienia progamu funkcja zostanie przeniesiona na samą góre i bedzie miala globalny zasieg. Bedzie ja mozna wywolac przed napisaniem/zadeklarowaniem jej.

showCurseName();

function showCurseName() {
    console.log('Programowanie w JS');
}

//3 konstruktor (Argumenty funkcji są na początku nawiasu - "text", Ciało funkcji jest po przecinku (w nawiasie - "alert (text)"))

const textAlert = new Function("text", "alert(text);");

// textAlert('dziala!!!');

//4 funkcja strzalkowa
//Funkcja strzałkowa jest zawsze anonimowa
//Szkielet funkcji
//const nazwaFunkcjiCoRobi = () => {};
//const nazwaFunkcjiCoRobi = function () {};

const x = 'lolaboga';
const showMessage1 = (x) => {

    console.log(x);
}
// showMessage1(`heja heja Zbyszek \n
// heja heja Bozenka`);

// window.addEventListener("click", showMessage1)
// { showMessage1(x) };

const addAllNumbers = function () {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

const allNum = addAllNumbers(5, 7, 88, 99, 33, 44, 55.99, 675.65);
console.log(allNum);

const objectExample = {
    name: 'Adam',
    scream() { console.log('aaaaaaaaa wrrr wrrr wrrrr') },
}
console.log(objectExample.name);
