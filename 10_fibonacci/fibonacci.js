const fibonacci = function(number) {
    let previousNum = 1; 
    let nextNum = 1; 
    let counter = 2; 
    let total = previousNum;
    number = Number(number);
    if(number < 1){return "OOPS"};

    while(counter < number){
        total += previousNum; 
        previousNum = nextNum; 
        nextNum = total; 
        counter++;
    }
return total;
};

// Do not edit below this line
module.exports = fibonacci;
