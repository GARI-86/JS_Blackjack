let deck         = [];
const tipos      = ['C','D','H','S']; 
const especiales = ['A','J','Q','K'];

// Es obligatorio usar "export" para que main.js pueda usar esta función
export const crearDeck = () => {
    deck = [];
    // Generar cartas numéricas
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo );
        }
    }
    // Generar cartas de letras (figuras)
    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo );
        }
    }
    // Mezclar el deck de forma aleatoria
    deck = deck.sort(() => Math.random() - 0.5);
    return deck;
};

// Es obligatorio usar "export"
export const pedirCarta = () => {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
};

// Es obligatorio usar "export"
export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10 
            : valor * 1; 
};
