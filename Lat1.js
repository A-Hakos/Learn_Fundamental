/* hitung luas lingkaran 

    Pseudocode
    > input
        phi = 3.14
        r (jari-jari) = 14
    
    > process 
        luas lingkaran = phi * jari-jari pangkat dua

    > output 
        luas lingkaran = 615.44

*/

let phi = 3.14
let r = 14 

console.log("hasil dari luas lingkaran = " + phi * r **2);

/* hitung keliling lingkaran 

    Pseudocode
    > input 
        K (Keliling lingkaran) = ?
        phi = 3.14
        r = 14
        d (diameter) = 28
    
    > process
          K=2 * phi * r / K = phi * d

    ouput 
        Keliling Lingkaran =
*/

let d = r*2
let K = null
    
console.log("hasil keliling lingkaran = " + 2 * phi * r);
console.log(`hasil K. Lingkaran =  ${K = phi * d}`); // backtick untuk cara lain memanggil variable 
console.log("hasil K. Lingkaran = " , K = phi * d); // sebelum "= tidak boleh ada operator lain selain ,(koma) "+ - *"

/* hitung tinggi segitiga 

    Psuedocode 
    > Input 
        Luas (L) = 13
        Alas (a) = 7
        Tinggi (t) = ?
    
    >Process
        Hitung Tinggi Segitiga  = (2 * L) / a

    > Output 

*/


let L = 13;
let a = 7;
let t = null; 
//let t =  (2 * L) / a   << salah karna declare kondisi dalam variable

console.log (`Hasil T. Segitiga = ${t = (2 * L) / a}`);


