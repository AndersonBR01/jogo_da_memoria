//1º colocando função no button de habilitar e desabilitar

const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');

// declarando função nos formularios
const form = document.querySelector('.login__form');

const validateInput = ({target}) => {
    if (target.value.length > 2){
        button.removeAttribute('disabled');
        return
    }
        button.setAttribute('disabled', ' ');
}

const handleSubmit = (event) =>{
    event.preventDefault();

    //salva os dados input no navegador
    localStorage.setItem('player', input.value);


    // ir para a proximas paginas!!
    window.location='pages/game.html'

    alert( 'Que começe os jogos! ')
}

input.addEventListener('input', validateInput);

// 2ºfunção nos formularios
form.addEventListener('submit', handleSubmit);