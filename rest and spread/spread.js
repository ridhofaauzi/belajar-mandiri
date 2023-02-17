/**
 * spread operator untuk memisahkan array menjadi nilai tersendiri.
 * keguanaan : copy dan merge array ke variabel baru
 */

const families = ["Mikel", "Hannah"];
const newFamilies = [...families, "Jonas", "Martha"];

console.log(newFamilies);

/**
 * spread operator untuk memisahkan object menjadi nilai tersendiri.
 * keguanaan : copy dan merge object ke variabel baru
 */

const user = {
    name : "Ridho",
    major : "Informatics",
};

const newUser = {
    ...user,
    age: 20,
};

console.log(newUser);