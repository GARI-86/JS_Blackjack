// 1. Estilos y framework
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// 2. Funciones 
import { crearDeck, pedirCarta, valorCarta } from './blackjack';

// 3. Variables de puntuación locales del DOM
let puntosJugador = 0;

// 4. Referencias de los elementos del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');

// Inicializamos el deck al cargar la página
crearDeck();

// 5. Evento del botón Pedir Carta
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    
    // Calcular y actualizar puntos en el HTML
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    // Crear el texto de la carta de forma temporal en la pantalla
    const txtCarta = document.createElement('span');
    txtCarta.innerText = `[${carta}] `;
    divCartasJugador.append(txtCarta);

    // Reglas básicas del juego
    if ( puntosJugador > 21 ) {
        alert('Lo siento, te has pasado de 21. ¡Perdiste!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
    } else if ( puntosJugador === 21 ) {
        alert('¡21 perfectos! Turno de la computadora.');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
    }
});
