import { puxaUrl } from './puxaUrl.js';

puxaUrl()

const idDafrase = document.querySelector('h4');
const frase = document.querySelector('p');

const botao = document.querySelector('.gerar');
botao.addEventListener('click', function () {
    puxaUrl().then((resultadoDaUrl) => {
        idDafrase.innerText = `ADVICE #${resultadoDaUrl['slip']['id']}`;

        frase.innerText = `"${resultadoDaUrl['slip']['advice']}"`
    })

})