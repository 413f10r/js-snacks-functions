/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vocali = "aeiouAEIOU"
let contatoreVocali = 0
let arrayVocali = []


// Dichiara la funzione qui.
function letturaStringa(stringa) {

    //primo ciclo analizzo ogni stringa con [i]
    for (let i = 0; i < stringa.lenght; i++) {

        //secondo ciclo per analizzare ogni vovale [k]
        for (let k = 0; k < vocali.length; k++) {

            if (stringa[i] === vocali(k)) {
                contatoreVocali++
                arrayVocali.push(vocali[k])
            }
        }
    }
    // return
}

// Invoca la funzione qui e stampa il risultato in console

letturaStringa(word)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(contatoreVocali, arrayVocali)