console.log("Hello from src/index.js!");

//////// Basic DOM
// Selecting a node from the DOM
const ul = document.querySelector('ul');

// Adding HTML to the DOM
ul.insertAdjacentHTML('beforeend', '<li data-id="4" data-language-abbr="FR">Bonjour!</li>');

// Selecting several nodes from the DOM
const lips = document.querySelectorAll('li');

//////// Manipulating a node
// Reading / writing some properties
const li = document.querySelector('li');
console.log(li.innerText);
console.log(li.innerHTML);
li.innerText = 'Hi <b>Everyone</b>'; // transforma em string
li.innerHTML = 'Hi <b>Everyone</b>'; // transforma em HTML

// Playing with the style
ul.style.display = 'none'; // some com o ul
ul.style.display = 'block'; // faz o ul aparecer
ul.style.backgroundColor = 'red'; // troca a cor de fundo (lowerCamelCase)
ul.style.backgroundColor = '';    // remove a cor de fundo

// classList
ul.classList.add('red');    // adiciona a classe
ul.classList.remove('red'); // remove a classe
ul.classList.toggle('red'); // se não tem, coloca a classe
ul.classList.toggle('red'); // se tem, remove a classe

// Playing with multiple nodes
const lis = document.querySelectorAll('li');

lis.forEach((li) => {
  li.style.fontSize = '24px';
});

// Datasets
lis.forEach((li) => {
  dataset = li.dataset; // pega todas as propriedades 'data-???' na tag
  console.log(`${dataset.id}: ${dataset.languageAbbr}`);
});

//////// Events
images = document.querySelectorAll('.listened');

images.forEach((img) => { // para cada imagem
  img.addEventListener('click', (event) => { // quando o usuário clicar em img
    event.target.classList.toggle('img-circle'); // faça toggle em img-circle no elemento que sofreu a ação
  });
});




























