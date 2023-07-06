const findTheOldest = function(array) {
    let person = array[0]; 
    for(let index = 0; index < array.length; index++){
        let deathDate = array[index].yearOfDeath;
        
        if(array[index].yearOfDeath == undefined){ person.yearOfDeath = new Date().getFullYear()};
        
        let age = deathDate - array[index].yearOfBirth;

        if( age > person.yearOfDeath - person.yearOfBirth){
            person = array[index];
        }
    }
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
