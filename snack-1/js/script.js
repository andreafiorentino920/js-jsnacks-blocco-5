// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


var zucchina = [
    {
        "varieta": 1,
        "peso": 300,
        "lunghezza in cm": 17
    },
    {
        "varieta": 2,
        "peso": 110,
        "lunghezza in cm": 11
    },
    {
        "varieta": 3,
        "peso": 160,
        "lunghezza in cm": 12
    },
    {
        "varieta": 4,
        "peso": 170,
        "lunghezza in cm": 13
    },
    {
        "varieta": 5,
        "peso": 240,
        "lunghezza in cm": 24
    },
    {
        "varieta": 6,
        "peso": 215,
        "lunghezza in cm": 15
    },
    {
        "varieta": 7,
        "peso": 188,
        "lunghezza in cm": 14
    },
    {
        "varieta": 8,
        "peso": 370,
        "lunghezza in cm": 19
    },
    {
        "varieta": 9,
        "peso": 320,
        "lunghezza": 18
    },
    {
        "varieta": 10,
        "peso": 100,
        "lunghezza in cm": 10
    }
];
var somma = 0;
for (var i=0; i < zucchina.length; i++){
    somma = somma + zucchina[i].peso;
}
console.log("La somma è", somma,"grammi");
