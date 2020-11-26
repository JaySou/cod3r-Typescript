import $ from 'jquery';

import Livro from './modelo/Livro'

const livro = new Livro('Dom Quixote', 108.80, 0.10)

$('body').append(`<h1>${livro.nome}</h1>`)
$('body').append(`<h2>${livro.precoComDesconto()}</h2>`)

// console.log(livro.precoComDesconto())