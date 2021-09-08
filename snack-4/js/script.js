// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
function unisciArray(arr1,arr2,arr3){
    for (var i=0; i<=3; i++){
        arr3.push(arr1[i]);
        arr3.push(arr2[i]);
    }
}

var array1 = ["a","b","c","d"];
var array2 = [1,2,3,4];
var array3 = [];
unisciArray(array1,array2,array3);
console.log(array3);