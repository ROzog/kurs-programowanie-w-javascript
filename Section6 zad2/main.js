// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony





const changeColor = (e) => {

    const color = getColor(e);
    document.body.style.backgroundColor = color;

};

const getColor = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    console.log(`${x}, ${y}`);

    if (!(x % 2) && !(y % 2)) {
        return 'red';
    } else if (x % 2 == 0 || y % 2 == 0) {
        return 'green';
    } else {
        return 'blue';
    }

}

document.body.addEventListener('click', changeColor);