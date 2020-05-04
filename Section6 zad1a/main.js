
const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', function (e) {
  const x = e.clientX + 1;
  const y = e.clientY + 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const red = (x / width) * 100;
  const green = (y / height) * 100;
  const blue = (red + green) / 2;
  // console.log(e.clientX, e.clientY);
  // h1.textContent = `${e.screenX}, ${e.screenY}`;
  // h1.textContent = `${e.pageX}, ${e.pageY}`;
  h1.textContent = `${red * 2.5}, ${green * 2.5}, ${blue * 2.5}`;
  document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`
})

// client x,y okno przeglądarki (ile od lewej i górnej krawędzi)
// page x,y okno przeglądarki - uzwględniając skrola (ile od lewej i górnej krawędzi)
// screen x,y krawędź ekranu

// document.body.addEventListener('mousemove', (event) => {
//   console.log(event);
// });

