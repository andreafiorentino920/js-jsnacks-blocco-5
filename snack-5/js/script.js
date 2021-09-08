/**
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b”
 */

/**
 * FUNZIONI
 */
function indici(arr,n1,n2){
    if (n1 < n2 && n2 <= arr.length){
        for(var i=n1-1; i <= n2-1; i++ ){ 
        arrayNuovo.push(arr[i]);  
        }
    }
}

/**
 * PROGRAMMA PRINCIPALE
 */
var studenti = ["Samuele", "Andrea", "Michele", "Pierluca", "Salvatore", "Valentino"];
var arrayNuovo = [];
alert("Inserisci l'intervallo di numeri per prendere i valori dagli array tramite l'indice")
var numero1 = prompt("Inserisci il primo numero dell'intervallo ");
var numero2 = prompt("Inserisci il secondo numero dell'intervallo ");
indici(studenti,numero1,numero2);
console.log(arrayNuovo);