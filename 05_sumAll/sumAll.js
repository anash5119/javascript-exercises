const sumAll = function(intA, intB) {
    let sum = intA + intB;
    if(intA > 0 && intB > 0 && typeof intA === "number" 
        && typeof intB === "number"){
        if(intA > intB){
            let counterB = intB + 1;
            while(counterB<intA){
                sum += counterB;
                counterB++;
            }
        }
        else{
            let counterA = intA + 1;
            while(intB>counterA){
                sum += counterA;
                counterA++;
            }
        }
    }
    else{return "ERROR"}
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
