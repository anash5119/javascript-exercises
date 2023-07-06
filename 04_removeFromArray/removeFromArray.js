const removeFromArray = function(array, ...itemToRemove){ /*{
    for(let index = 0; index<array.length; index++){
        for(let innerIndex = 0; innerIndex < itemToRemove.length; 
            innerIndex++){
                if(array[index] === itemToRemove[innerIndex]){
                    array.splice(index, 1);
                }
            }*/
    for(let index = 0; index < itemToRemove.length; index++){
        for(let innerIndex = 0; innerIndex<array.length; innerIndex++){
            if(array[innerIndex] === itemToRemove[index]){
                array.splice(innerIndex, 1);
            }
        }
    
    }
    return array;
}
// Do not edit below this line
module.exports = removeFromArray;
