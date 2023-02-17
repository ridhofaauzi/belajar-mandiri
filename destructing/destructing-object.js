// membuat object 
const req = {
    body : {
        name : "Ridho",
        age : 20,
        major : "Informatics",
    },
};

/**
 * melakukan destructing array
 * destructing object berdasarkan key
 */

const {name, age, major} = req.body;
console.log(name, age, major);