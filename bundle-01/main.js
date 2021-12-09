/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//1, questo codice serve a implementare un contatore che terminerà quando raggiungerà 5. Modifichiamo il ciclo cambiando da i > 5 a i > 5, se no il ciclo stesso non funziona
//2 no
//3 si, il maggiore di 5

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;

}
//1 se il numero è divisibile per 2, a quel numero viene aggiunto 5 alla somma. In caso contrario ritorna il numero 
//2 si, bisogna mettere 3 uguali per paragonare interamente
//3 no

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
//2 si: bisogna mettere i ; e non le ,
//3 no

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i <= numbers.length - 1; i++){
        if (numbers[i] % 2 === 0){
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
//1 serve a stampare numeri pari
//2 un ; in più nell'incremento del contatore, la lunghezza comparata era sbagliata, numbers va pushato dentro l'array vuoto e non "i". Il return va posiziona fuori dal ciclo for