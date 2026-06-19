// Importaciones
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

// Funciones
import { crearDeck, pedirCarta, valorCarta } from './blackjack.js';

let puntosJugador = 0;

// Asignaciones index.html
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');

// Inicializamos el deck llamando a la función del módulo importado
crearDeck();

// Eventos para los botones
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    const txtCarta = document.createElement('span');
    txtCarta.innerText = ` [${carta}] `;
    txtCarta.style.color = "white";
    txtCarta.style.fontSize = "20px";
    txtCarta.style.fontWeight = "bold";
    divCartasJugador.append(txtCarta);

    if ( puntosJugador > 21 ) {
        alert('Lo siento, te has pasado de 21. ¡Perdiste!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        // Si el jugador se pasa, automáticamente puede dispararse el turno de la computadora para cerrar el juego
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
    } else if ( puntosJugador === 21 ) {
        alert('¡21 perfectos! Excelente.');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
    }
});

// Evento para detenerse
btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
});

// Evento para reiniciar juego
btnNuevo.addEventListener('click', () => {
    deck = crearDeck(tiposDeCarta, tiposEspeciales);
    puntosJugador = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
    btnPedir.disabled   = false;
    btnDetener.disabled = false;
});

// Sumar y renderizar puntos
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
// Crear el elemento visual temporal en el HTML
    const txtCarta = document.createElement('span');
    txtCarta.innerText = ` [${carta}] `;
    txtCarta.style.color = "white";
    txtCarta.style.fontSize = "20px";
    txtCarta.style.fontWeight = "bold";
    divCartasJugador.append(txtCarta);

// Validar reglas del Blackjack
    if ( puntosJugador > 21 ) {
        alert('Lo siento, te has pasado de 21. ¡Perdiste!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
    } else if ( puntosJugador === 21 ) {
        alert('¡21 perfectos! Excelente.');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
    }
});
