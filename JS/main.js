'use strict';

//inizializzazione variabili di età e chilometri
let age = 0;
let KM = 0;

//inizializzazione variabili con gli elementi del form
const ageInput = document.getElementById('age');
const rangeElement = document.getElementById('range');
const rangeLabel = document.getElementById('rangeLabel');
const form = document.getElementById('form');
const reset = document.getElementById('reset');
const price = document.getElementById('price');

//inizializzazione testo della label del range con valore di default
rangeLabel.innerText = range.value;

//variabile con il costo unitario al kilometro
const KMcost = 0.21

//aggiunta evento per mostrare il valore del range input nella sua label
range.addEventListener("change", function () {
    rangeLabel.innerText = range.value;
})

//aggiunta evento al submit per ricavare i valori di input ed effettuare i calcoli
form.addEventListener("submit", function (event) {
    event.preventDefault();
    age = ageInput.value;
    KM = range.value;

    //variabile con il prezzo base calcolato in base ai chilometri
    const basePrice = KM * KMcost;

    //dichiarazione della variabile per il fattore di sconto, inizializzata a 0
    let discount = 0;

    //condizioni per verificare se il fattore di sconto debba essere diverso da 0
    if (age < 18) {
        discount = 20;
    }
    else if (age > 65) {
        discount = 40;
    }

    /* dichiarazione variabile inizializzata con formula di calcolo del prezzo finale,
    scontato solo se il fattore di sconto è diverso da 0 */
    let finalPrice = basePrice - ((basePrice * discount) / 100);

    //arrotondamento del prezzo finale a 2 cifre decimali
    finalPrice = +finalPrice.toFixed(2);

    price.innerText = `il prezzo del biglietto è di ${finalPrice}€`
})

//aggiunta evento al pulsante reset
reset.addEventListener("click", function () {
    ageInput.value = "";
    range.value = 10;
    rangeLabel.innerText = 10;
    price.innerText = "";
})







