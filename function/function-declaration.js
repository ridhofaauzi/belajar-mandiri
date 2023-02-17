// membuat fungsi menghitung umur. Dibuat menggunakan function declaration.
// @param {integer} bod(tanggal lahir)
// @return {integer} age(umur)


function getAge(bod){
    const year = 2023;
    const age = year - bod;

    return age;
}

console.log(getAge(2002));