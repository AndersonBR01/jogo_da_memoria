const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer')

// essas funções estão criando as cartas e esta jogando dentro do grid;
const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'summer',
    'meeseeks',
    'scroopy',
    'rick',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disable__card');

    if (disabledCards.length === 20) {

        clearInterval(this.loop);
        alert(`Parabens ${spanPlayer.innerHTML}!  Seu tempo foi: ${timer.innerHTML}`);

    }
}

const checkCards = () => {
    const firsCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firsCharacter === secondCharacter) {

        firstCard.firstChild.classList.add('disabled__card');
        secondCard.firstChild.classList.add('disabled__card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {

        setTimeout(() => {
            firstCard.classList.remove('reveal__card');
            secondCard.classList.remove('reveal__card');

            firstCard = '';
            secondCard = '';

        }, 500);


    }

}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal__card')) {
        return;
    }
    if (firstCard === '') {
        target.parentNode.classList.add('reveal__card');
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal__card');
        secondCard = target.parentNode;

        checkCards();
    }


}


const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;


    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);


    return card;

}
// esta criando a carta e
const loadGame = () => {

    const duplicateCharacters = [...characters, ...characters];

    const shuffleArray = duplicateCharacters.sort(() => Math.random() - 0.5);


    shuffleArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);

    });
}

const startTimer = () =>{
    this.loop = setInterval(() => {
        const currentTime = + timer.innerHTML;
        timer.innerHTML = currentTime + 1;

    }, 1000);
}

window.onload = () =>{
    spanPlayer.innerHTML = localStorage.getItem('player');

    startTimer();
    loadGame();
}


