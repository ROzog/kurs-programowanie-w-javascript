let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    const btnreset = document.createElement('button');
    btn.innerText = 'Dodaj kolejny element do listy';
    btnreset.innerText = 'Reset';
    document.body.appendChild(btn);
    document.body.appendChild(btnreset);
    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    document.body.appendChild(ul);
    btn.addEventListener('click', createLiElements);
    btnreset.addEventListener('click', () => {
        document.querySelector('ul').innerHTML = "";
        size = 10;
        orderElement = 1;
    })
}

const createLiElements = () => {
    orderElement = 1;

    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        document.querySelector('ul').appendChild(li);
        li.style.fontSize = `${size++}px`;
    }
    const liList = document.querySelectorAll('li');
    liList.forEach(el => {
        el.innerHTML = `Element nr ${orderElement++}`;
        el.listStyleType = 'square';

    });
}

init();