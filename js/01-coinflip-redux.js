let coinFlip
let times = Number(prompt("Enter the number of times you want to play Coin Flip Game"))

for(let i=0; i<times; i++){
    let coinFlip = Math.round(Math.random())
    
    if(coinFlip === 0)
        console.log("Heads")
    else    
        console.log("Tails")
}