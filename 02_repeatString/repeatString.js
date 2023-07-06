function repeatString(string, num){
    let index = 0;
    let newString="";
    if(num<0){
        return "ERROR";
    }
    while(index<num){
        newString += string;
        index++;
    }
    return newString;
}

// Do not edit below this line
module.exports = repeatString;
