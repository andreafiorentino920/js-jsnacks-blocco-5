// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


var zucchina = [
    {
        "varieta": 1,
        "peso": 300,
        "lunghezza": 17
    },
    {
        "varieta": 2,
        "peso": 110,
        "lunghezza": 11
    },
    {
        "varieta": 3,
        "peso": 160,
        "lunghezza": 12
    },
    {
        "varieta": 4,
        "peso": 170,
        "lunghezza": 13
    },
    {
        "varieta": 5,
        "peso": 240,
        "lunghezza": 24
    },
    {
        "varieta": 6,
        "peso": 215,
        "lunghezza": 15
    },
    {
        "varieta": 7,
        "peso": 188,
        "lunghezza": 14
    },
    {
        "varieta": 8,
        "peso": 370,
        "lunghezza": 19
    },
    {
        "varieta": 9,
        "peso": 320,
        "lunghezza": 18
    },
    {
        "varieta": 10,
        "peso": 100,
        "lunghezza": 10
    }
];
var maggiore15 = [];
var minore15 = [];
var somma1 = 0;
var somma2 = 0;
for (var i=0; i < zucchina.length; i++){
    if (zucchina[i].lunghezza <= 15 ){
        minore15.push(zucchina[i]);
        somma2 += zucchina[i].peso;
    }else{
        maggiore15.push(zucchina[i]);
        somma1 += zucchina[i].peso;
    }
}
console.log(maggiore15);
console.log(minore15);
console.log("La somma dell'array con le zucchine minori di 15cm è:",somma2,"gr");
console.log("La somma dell'array con le zucchine maggiori di 15cm è:",somma1,"gr");
