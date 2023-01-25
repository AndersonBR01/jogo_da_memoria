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

const createElement =(tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const grid = document.querySelector('.grid');

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;
   

    card.appendChild (front);
    card.appendChild (back);

    return card;

}
// esta criando a carta e
const loadGame = () =>{

    const  duplicateCharacters = [ ...characters, ...characters];

    duplicateCharacters.forEach((character) =>{
        const card = createCard(character);
        grid.appendChild(card);
    });
}

loadGame();