/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function ciao(nomeUtente) {
    return `Ciao ${nomeUtente} `
}

// Invoca la funzione qui e stampa il risultato in console
let risultato = ciao(userName)
console.log(risultato)
//console.log(ciao(userName, prova2))



//Risultato atteso se si passa 'Mario': // ciao Mario



function ciaone(nomeUtente) {
    console.log(`ciao ${nomeUtente}`)
}
ciaone(userName)