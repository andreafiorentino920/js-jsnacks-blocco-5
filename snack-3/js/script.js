function inversione(s){
    let reverseStr = "";
    for(let i = s.length - 1; i >= 0; i--){
        reverseStr += s[i];
    }
    return reverseStr;
}
var stringa = prompt("Inserisci la parola da invertire");
console.log(inversione(stringa));