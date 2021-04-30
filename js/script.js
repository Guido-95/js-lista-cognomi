// 1. chiedi all'utente il cognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

// array cognomi iniziale
var cognomi =["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
console.log("array cognomi: ", cognomi);

// cognome utente da inserire
var cognomeUtente = prompt("inserisci il cognome con la lettera maiuscola");

// controllo lettera maiuscola
while(cognomeUtente[0] != cognomeUtente[0].toUpperCase()){
    cognomeUtente = prompt("ERRORE, inserisci il cognome con la lettera maiuscola");
}
// cognome inserito dall'utente
console.log("cognome utente: ",cognomeUtente);

// cognome utente inserito nell'array
cognomi.push(cognomeUtente);

// array cognomi dopo l'inserimento del cognome utente
console.log("array cognomi modificato: ", cognomi);

// ordina i cognomi in ordine alfabetico
var cognomiOrdinati = cognomi.sort();
// stampa cognomi in ordine alfabetico
console.log("array cognomi ordinato: ", cognomiOrdinati);

// stampa cognomi con posizione
for(i=0; i < cognomi.length; i++) {
    console.log("Cognome: ", cognomi[i] + ", " + "In posizione:", i + 1);
}