// retorne no console todas as imagens do site 
const img = document.querySelectorAll('img');
console.log(img);

// retorne no console apenas as imagens que começaram com a palavra imagem

const imagensAnimais = document.querySelectorAll('img[src^="imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = documento.querySelectorAll('[href^="#]');
console.log(linksInterno);

//Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector('.animais-descricao');
const h2Animais = document.querySelector('.animais-descricao h2');

console.log(animais);
console.log(h2Animais);

// selecione o ultimo p do site

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length]);





