let randomNumber = Math.floor(Math.random() * 100) + 1;


const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrHigh');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const maxTryText = document.querySelector('.maxTryText');
const tent5 = document.querySelector('.tent5');
const tent10 = document.querySelector('.tent10');
const tent15 = document.querySelector('.tent15');


let guessCount = 1;
let reserGame
let maxTry = 10;
maxTryText.textContent = maxTry

function checkNumber() {

    guesses.textContent += guessField.value + ' - ';

    if (guessField.value == randomNumber) {
        lastResult.textContent = 'Ganhou o jogo.';

        console.log('Acertou o número');
        //jogo acaba, vc ganhou!

    } else {
        lastResult.textContent = 'Errou o palpite RUIM';

        if (guessField.value > randomNumber) {
            console.log('Número informado é alto demais.');
            lowOrhigh.textContent = 'Número informado é alto demais';

        }

        if (guessField.value < randomNumber) {
            console.log('Número informado é baixo demais');
            lowOrhigh.textContent = 'Número informado é baixo demais';
        }

        if (guessCount = maxTry) {
            lastResult.textContent = 'Perdeu o jogo RUIM';
            guessSubmit.disabled = true;
            guessSubmit.disabled = true;
            console.log('Perdeu o jogo RUIM');
            // jogo acaba, vc perdeu ruim.
        }
    }

    guessCount++;
    guessField.value='';
    guessField.focus();
}
function mudarsetup(value){
    maxTry = value;
    maxTryText.textContent = value;
}

function setup5(){
    mudarsetup(5);
}

function setup10(){
    mudarsetup(10);
}
function setup15(){
    mudarsetup(15);
}
guessSubmit.addEventListener('click', checkNumber);
tent5.addEventListener('click', setup5);
tent10.addEventListener('click', setup10);
tent15.addEventListener('click', setup15);