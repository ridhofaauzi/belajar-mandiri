/* 
    membuat fungsi menghitung umur.
    dibuat menggunakan cara function expression

    @param {integer} bod (tanggal lahir)
    @return {integer} age (umur)

*/

const getAge = function(bod) {
    const year = 2023;
    const age = year - bod

    return age;
}

console.log(getAge(2002));