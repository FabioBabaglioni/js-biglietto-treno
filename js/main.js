// calcolare il prezzo del biglietto del treno in base ai kilometri e agli anni


// variabili
const costoPrimo = 0.21 
let anni
let kilometriDaPercorrere
let costoTotale
let scontoMinorenne
let costoMinorenne
let scontoOver
let costoOver

// chiedere all'utente gli anni 

anni = parseInt(prompt("Quanti anni hai?"));

console.log(anni);

// chiedere all'utente il numero dei kilometri che dovrà percorrere

kilometriDaPercorrere = parseInt(prompt("Quanti chilometri dovrai percorrere?"));

console.log(kilometriDaPercorrere);

// calcolare il costo totale del biglietto

costoTotale = costoPrimo * kilometriDaPercorrere

console.log(costoTotale);

// se minorenne (sotto i 18 annni) allora applica sconto 20%
if (anni < 18) {
    scontoMinorenne = (costoTotale * 20) / 100 
    costoMinorenne = (costoTotale - scontoMinorenne);
    console.log("Il tuo biglietto costerà:", costoMinorenne)
}else if (anni >= 65){ // se over 65 applica sconto del 40%
    scontoOver = (costoTotale * 40) / 100;
    costoOver = (costoTotale - scontoOver);
    console.log("Il tuo biglietto costerà:", costoOver)
}else{
    console.log("Il tuo biglietto costerà:", costoTotale)
}
