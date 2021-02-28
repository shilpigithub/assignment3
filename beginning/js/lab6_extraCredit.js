// Your job in this part of the assignment is to validate those entries.
//  Within investment, the number should be numeric. 
// Within rate, the number should be numeric and between 0 and a realistic rate like 6%.
//  For years, the number should be numeric and between 1 and 30.


// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
rate = parseFloat(prompt('Enter interest rate as xx.x'));
years = parseInt(prompt('Enter the number of years you want to invest for from 1 to 30'));

if( !isNaN(investment) && investment > 0 && !isNaN(rate) && rate > 0 && !isNaN(years) && years >0 && years <=30) {
    // CALCULATE FUTURE VALUE
    futureValue = investment;
    for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
    }

    // DISPLAY RESULT
    document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
    document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
    document.write(`Years: ${years}<br>`);
    document.write(`Future value: $${futureValue.toFixed(2)}`);
}
else{
    document.write('One of the values enetered is invalid ');
}

