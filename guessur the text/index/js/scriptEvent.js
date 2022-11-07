// Add Variable;

let confirmation = document.querySelector('.confirm');
let deleteVar = document.querySelector('.delete');
let RandomLetter = document.querySelector('.RandomLetter');
// Give Input Value;
let valueInput = document.querySelector('.text');
// Result Section;
let Result = document.querySelector('.Result');
// Text Guessure
let TextArr = ['mohammad','ali','zahra','aytak','kaveh'];
// Random Text;
let Randoms = Math.floor(Math.random() * 4);
// Add Null Var;
let newGuessur = "";

newGuessur += TextArr[Randoms];
RandomLetter.innerHTML = newGuessur;

console.log(typeof RandomLetter);

// Reversed Arr;


// Add Event To Button Confirm
confirmation.addEventListener('click', () => {
    const strings = newGuessur;
    const splits = strings.split("")
    splits.reverse();
    const joins = splits.join("");

    console.log(joins);

    // Check The Read
    if(joins == valueInput.value) {
        Result.innerHTML = "Congratulations, you guessed the words correctly";
        confirmation.innerHTML = "Confirmed";
    } else {
        Result.innerHTML = "Opps!\nTry Again";
        confirmation.innerHTML = "Try Again";
        if(valueInput == joins) {
            Result.innerHTML = "Congratulations, you guessed the words correctly";
            confirmation.innerHTML = "Confirmed";
        } //else {

        //     setInterval
        // }
    }
})