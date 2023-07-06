const palindromes = function (pal) {
    let newArr = pal.split('');

    console.log(newArr);
    let leftIndex = 0;
    let rightIndex = newArr.length-1;

    while(leftIndex != rightIndex || leftIndex > rightIndex){
        if(newArr[leftIndex] == " " || newArr[leftIndex] == "." ||
          newArr[leftIndex] == "!" || newArr[leftIndex] == ","){
            leftIndex++;
            continue;
        }
        if(newArr[rightIndex] == " " || newArr[rightIndex] == "." ||
          newArr[rightIndex] == "!" || newArr[rightIndex] == ","){
            rightIndex--;
            continue;
        }
        if(newArr[leftIndex].toLowerCase() !==  newArr[rightIndex].toLowerCase()){
            console.log(newArr[leftIndex]);
            console.log(leftIndex);
            console.log(newArr[rightIndex]);
            console.log(rightIndex);
            return false
        }
        leftIndex++; rightIndex--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
