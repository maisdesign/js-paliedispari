// Funzione check palindromo
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma
// Prima del check trasformare la parola in minuscolo e rimuovere gli spazi vuoti
function isPalindrome(word) {
    // Confrontare la parola con la sua versione invertita
    word = word.toLowerCase().replace(/\s+/g, '');
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}
const userInput = prompt("Inserisci una parola:");
if (userInput) {
    if (isPalindrome(userInput)) {
        console.log(`La parola "${userInput}" è palindroma.`);
        alert(`La parola "${userInput}" è palindroma.`);
    } else {
        console.log(`La parola "${userInput}" non è palindroma.`);
        alert(`La parola "${userInput}" non è palindroma.`);
    }
} else {
    console.log("Nessuna parola inserita.");
}

// Gioco Pari e Dispari
/*
*   L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
*   Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
*   Sommiamo i due numeri
*   Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
*   Dichiariamo chi ha vinto.
*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isEven(number) {
    return number % 2 === 0;
}
const userChoice = prompt("Scegli 'pari' o 'dispari':").toLowerCase();
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));
if ((userChoice === 'pari' || userChoice === 'dispari') && userNumber >= 1 && userNumber <= 5) {
    const computerNumber = getRandomNumber(1, 5);
    const sum = userNumber + computerNumber;
    const sumIsEven = isEven(sum);
    console.log(`Hai scelto: ${userChoice}`);
    console.log(`Il tuo numero: ${userNumber}`);
    console.log(`Numero del computer: ${computerNumber}`);
    console.log(`Somma: ${sum} (${sumIsEven ? 'pari' : 'dispari'})`);
    if ((sumIsEven && userChoice === 'pari') || (!sumIsEven && userChoice === 'dispari')) {
        console.log("Hai vinto!");
        alert("Hai vinto! Perché la somma è " + (sumIsEven ? "pari." : "dispari."));
    } else {
        console.log("Ha vinto il computer!");
        alert("Ha vinto il computer! Perché la somma è " + (sumIsEven ? "pari." : "dispari."));
    }
} else {
    console.log("Scelta non valida. Ricarica la pagina e riprova.");
    alert("Scelta non valida. Ricarica la pagina e riprova.");
}
