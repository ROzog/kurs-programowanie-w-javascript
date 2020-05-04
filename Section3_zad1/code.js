const button = document.querySelector('button');
let counter = 1;
ul = document.createElement('ul');
document.body.appendChild(ul);

// const addElement = function () {
//     const div = document.createElement('div');
//     div.innerText = counter;
//     if (counter % 5 === 0) { div.classList.add('circle') };
//     document.body.appendChild(div)
//     counter++;
// }

const addElement = function () {
    const li = document.createElement('li');
    li.innerText = counter;
    ul.appendChild(li);
    if (counter % 3 == 0) {
        li.classList.add('bigger');
    }
    counter += 2;
}

button.addEventListener('click', addElement);
