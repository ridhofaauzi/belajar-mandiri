/**
 * membuat object menggunakan {}
 * menyimpan nilai dengan format key : value
 */

const user = {
    name: "Ridho Fauzi",
    age: 20,
    major: "Informatics"
};

/**
 * looping object menggunakan for-in
 * mengakses nilai menggunakan cara bracket
 */
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}