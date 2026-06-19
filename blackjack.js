let deck         = [];
const tipos      = ['C','D','H','S']; 
const especiales = ['A','J','Q','K'];

// Exportamos esta función para poder iniciar el juego desde main.js
export const crearDeck = () => {
    deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo );
        }
    }
    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo );
        }
    }
    deck = deck.sort(() => Math.random() - 0.5);
    return deck;
};

// Exportamos la función para pedir carta
export const pedirCarta = () => {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
};

// Exportamos la función para calcular el valor
export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10 
            : valor * 1; 
};
