/**
 * membuat family yang terdiri dari :
 * suami : michael
 * istri : hannah
 * anak  : jonas
 */

const family = ["Michael", "Hannah", "Jonas"];

/**
 * melakukan array destructing 
 * array destructing berdasarkan posisi atau index.
 */

const [husband, wife, son] = family;

// menampilkan nilai array
console.log(husband, wife, son);