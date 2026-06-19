// Importaciones
import "/bootstrap/dist/css/bootstrap.min.css";
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

// Evento para el botón de pedir carta
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    
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
