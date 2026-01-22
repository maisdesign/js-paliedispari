document.addEventListener("DOMContentLoaded", () => {
    /** Zona Pari o Dispari */
    const userChoiceEl = document.getElementById("userChoice");//qui l'utente sceglie pari o dispari
    const userNumberEl = document.getElementById("userNumber");//qui l'utente inserisce un numero da 1 a 5
    const playButtonEl = document.getElementById("playButton");//qui l'utente clicca per giocare
    const resultEl = document.getElementById("result");//qui viene mostrato il risultato della partita
    // Ora il browser deve generare un numero random da 1 a 5 per il computer e sommarlo al numero scelto dall'utente.
    // Bisogna stabilire se la somma dei due numeri è pari o dispari e dichiarare chi ha vinto in base alla scelta iniziale dell'utente.
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    playButtonEl.addEventListener("click", () => { // al click del bottone "gioca"
        const userChoice = userChoiceEl.value; // "pari" o "dispari"
        const userNumber = parseInt(userNumberEl.value);  // numero scelto dall'utente
        let winner;
        if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) { //controllo base validità numero utente
            resultEl.textContent = "Per favore, inserisci un numero valido tra 1 e 5.";
            return;
        } else {
            const computerNumber = getRandomNumber(1, 5); // numero random del computer
            const sum = userNumber + computerNumber; // somma dei due numeri
            const isSumEven = sum % 2 === 0; // verifica se la somma è pari
            if ((isSumEven && userChoice === "pari") || (!isSumEven && userChoice === "dispari")) {
                winner = "Utente vince!";
            } else {
                winner = "Computer vince!";
            }
            resultEl.textContent = `Numero utente: ${userNumber}, Numero computer: ${computerNumber}, Somma: ${sum} (${isSumEven ? "pari" : "dispari"}). ${winner}`;//versione sintetica della stringa di risultato
        }
    });

    /** Zona Palindromi */
    const palindromeInputEl = document.getElementById("palindromeInput");//qui l'utente inserisce una parola da verificare
    const checkPalindromeButtonEl = document.getElementById("checkPalindromeButton");//qui l'utente clicca per verificare se la parola è palindroma
    const palindromeResultEl = document.getElementById("palindromeResult");//qui viene mostrato il risultato della verifica
    function isPalindrome(str) {
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();//rimuove spazi e punteggiatura, converte in minuscolo
        const reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
    }
    checkPalindromeButtonEl.addEventListener("click", () => {
        const userInput = palindromeInputEl.value.trim();
        if (userInput.length === 0) {
            palindromeResultEl.textContent = "Per favore, inserisci una parola valida.";
            return;
        } else {
            const result = isPalindrome(userInput);
            palindromeResultEl.textContent = result ? `"${userInput}" è un palindromo.` : `"${userInput}" non è un palindromo.`;//versione sintetica if/else
        }

    });

    // Per debug: mostrare gli elementi selezionati nella console


    console.log({
        userChoiceEl,
        userNumberEl,
        playButtonEl,
        resultEl,
        palindromeInputEl,
        checkPalindromeButtonEl,
        palindromeResultEl
    });
});