// Marco! Polo!
// Create an application which iterates numbers from 1 to 100. 
// For multiples of 3, print "Marco!" instead of the number and
// for multiples of 5, print "Polo!" instead of the number. 
// For numbers which are multiples of both 3 and 5 print "Marco! Polo!". 

for(let i = 1 ; i<= 100; i++) {
    if( i % 3 === 0 && i % 5 === 0){
        console.log(`${i} is Marco! Polo!`);
    }else if(i % 3 === 0) {
        console.log(`${i} is Marco!`);
    }else if(i % 5 === 0) {
        console.log(`${i} is Polo!`);
    }

}