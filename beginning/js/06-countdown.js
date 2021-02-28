// Countdown

// Write an application that counts down to 0 based on the number that a user passes into a prompt. 

let num = Number(prompt('Enter a number to start countdown from 1 to 100'));

for (let i = num; i>=0 ; i--) {
    document.write(`${i} <br>` );
}
