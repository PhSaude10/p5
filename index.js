let randomNumber = 100;


const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrHigh');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let reserGame

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

        if (guessCount == 10) {
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

guessSubmit.addEventListener('click', checkNumber);