// membuat array of object
const users = [
    {
        name : "Jonas",
        age: 15
    },
    {
        name : "Michael",
        age: 40
    },
    {
        name : "Hannah",
        age: 35
    },
];

/**
 * menjelankan method filter
 * mencari semua data berdasarkan kondisi tertentu
 * kondisi : umur lebih dari 21
 */

const filterUser = users.filter((user) => user.age > 21);
console.log(filterUser);