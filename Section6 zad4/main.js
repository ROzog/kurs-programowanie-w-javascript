/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  console.log(e.keyCode, e.which);
  // 38 - strzałka do góry
  // 40 - strzalka w dół

  // wersja 1 - instrukcja if
  if (e.keyCode == 38 && red < 255) {
    red += 5;
    green += 5;
    blue += 5;
  } else if (e.keyCode == 40 && red > 0) {
    red -= 5;
    green -= 5;
    blue -= 5;
  }

  // // wersja 2 - instrukcja switch
  // switch (e.keyCode) {
  //   case 38:
  //     red += 5;
  //     green += 5;
  //     blue += 5;
  //     break;
  //   case 40:
  //     red -= 5;
  //     green -= 5;
  //     blue -= 5;
  //     break;
  // }


  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  console.log(`rgb(${red}, ${green}, ${blue})`);

  // wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0)) 
  //tutaj twój kod



}

window.addEventListener('keydown', changeColor);