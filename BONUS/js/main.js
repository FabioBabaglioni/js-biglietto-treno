// calcolare il prezzo del biglietto del treno in base ai kilometri e agli anni


// variabili
const costoPrimo = 0.21 
let anni
let kilometriDaPercorrere
let costoTotale
let nominativo
let scontoMinorenne
let costoMinorenne
let scontoOver
let costoOver
let cod

// chiedere all'utente gli anni 

anni = parseInt(prompt("Quanti anni hai?"));

console.log(anni);

// chiedere all'utente il numero dei kilometri che dovrà percorrere

kilometriDaPercorrere = parseInt(prompt("Quanti chilometri dovrai percorrere?"));

console.log(kilometriDaPercorrere);

// BONUS Chiedere il nominativo per il biglietto

nominativo = prompt("inserisci nome e cognome");

// calcolare il costo totale del biglietto

costoTotale = costoPrimo * kilometriDaPercorrere

console.log(costoTotale);

// calcolare codice biglietto

cod = Math.floor(Math.random() * 100000) + 10000;

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

document.getElementById("costo_primo").innerHTML = `costo totale del biglietto per ${kilometriDaPercorrere}km è di ${costoTotale}€`

if (anni < 18){
    document.getElementById("Sconto_effettuato").innerHTML = `Totale sconto a te dedicato -${scontoMinorenne}€`
} else if (anni >= 65){
    document.getElementById("Sconto_effettuato").innerHTML = `Totale sconto a te dedicato -${scontoOver}€`
}else{
    document.getElementById("Sconto_effettuato").innerHTML = `Totale sconto a te dedicato -0€`

}

document.getElementById("nome_cognome").innerHTML = `Dati viaggiatore: ${nominativo}`

if (anni < 18){
    document.getElementById("costo_finale").innerHTML = `Costo totale biglietto ${costoMinorenne}€`
} else if (anni >= 65){
    document.getElementById("costo_finale").innerHTML = `Costo totale biglietto${costoOver}€`
}else{
    document.getElementById("costo_finale").innerHTML = `Costo totale biglietto ${costoTotale}€`

}

document.getElementById("kilometri").innerHTML = `Totale chilometri: ${kilometriDaPercorrere}`

document.getElementById("codice").innerHTML = `Codice identificativo biglietto: ${cod}`













