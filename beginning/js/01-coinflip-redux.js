// The “Coin Flip” Game Redux
//     1. Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
//     2. Create a for loop that loops a certain amount of times. The amount of times that the for loop executes will be collected from the user via a prompt.
//     3. Within the for loop assign a randomly generated number to coinFlip. You will have to use the same Math formula that you used in the previous assignment to get this number.
//     4. Use a conditional statement to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.

let coinFlip;

let numTimes = Number(prompt('Enter the number of times to flip the coin in 1 to 10'));

for(let i=0 ; i < numTimes ;i++ ) {
    coinFlip = Math.round(Math.random());
    //console.log(`coinFlip: ${coinFlip}`);
    if (coinFlip === 0 ){
        console.log('Heads');
    }else{
        console.log('Tails');
    }
    
}