const reverseString = function(word) {
    let textArray = word.split("");
    textArray.reverse(); 
    return textArray=textArray.join("");  
};

// Do not edit below this line
module.exports = reverseString;
