/**
 * membuat fungsi sum
 * menjumlahkan semua bilangan
 * menggunakan rest parameter
 */

function sum(...numbers){
    let hasil = 0;
    
    for (const number of numbers) {
        hasil += number;
    }

    return hasil;
}

console.log(sum(1,2,3,4,5));

/**
 * membuat fungsi showFamilies
 * menampilkan anggota keluarga
 * parameter ketiga menggunakan rest parameter
 */

function showFamilies(husband, wife, ...children){
    console.log(`Suami : ${husband}`);
    console.log(`Istri : ${wife}`);

    for (const child of children) {
        console.log(`Anak : ${child}`)
    }
}

showFamilies("Mikel", "Hannah", "Jonas", "Martha", "Magnuz");