// membuat array of object 
const users = [
    {
        name: "Jonas",
        age: 15
    },
    {
        name: "Michael",
        age: 40
    },
    {
        name: "Hannah",
        age: 35
    },
];

/**
 * menjalankan method find
 * mencari 1 data berdasarkan kondisi tertentu. 
 * kondisi : umur lebih dari 21
 */

const foundUser = users.find((user) => user.age > 21);
console.log(foundUser)