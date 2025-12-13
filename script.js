// Funzione check palindromo
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma
function isPalindrome(word) {
    // Confrontare la parola con la sua versione invertita
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}
const userInput = prompt("Inserisci una parola:");
if (userInput) {
    if (isPalindrome(userInput)) {
        console.log(`La parola "${userInput}" è palindroma.`);
    } else {
        console.log(`La parola "${userInput}" non è palindroma.`);
    }
} else {
    console.log("Nessuna parola inserita.");
}