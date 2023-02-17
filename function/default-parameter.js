/* 
    membuat fungsi menghitung umur.
    dibuat menggunakan cara arrow function

    @param {integer} bod (tanggal lahir)
    @return {integer} age(umur)
*/

const getAge = (bod = 1999) => {
    const year = 2023;
    const age = year - bod;

    return age;
}

console.log(getAge());
console.log(getAge(2002));