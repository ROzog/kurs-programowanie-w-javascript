const arr = ["sdc", "saexw'", "ascqw", "ddddd"];

const newAr = arr.slice(0, 0);

const names = ["Anna", "Jadwiga", "Roman", "Konstanty", "Gabriela", "Łukasz", "Matylda", "Grzegorz", "Katarzyna"];

for (let i = 0; i < names.length; i++) {
    if (names[i].endsWith('a')) {
        console.log(`Imię ${names[i]} o indeksie = ${i} jest imieniem zenskim`);
    } else {
        console.log(`Imię ${names[i]} o indeksie = ${i} jest imieniem meskim`);
    };
}

