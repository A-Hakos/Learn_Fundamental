// Function adalah blok kode program yang akan berjalan saat kita panggil

// membuat function 
function sayHello(){
    console.log("hello");
}
// memanggil function
sayHello();

// try 
function SayName(){
    console.log("Aditya Hakos");
}
SayName();

//try
function SayAngka(value) {
     if(value == 0){
        console.log("Netral");
    } else if (value > 0){
        console.log("Positif");
    } else if(value < 0){
        console.log("Negatif");
    } else {
        console.log("bukan angka");
    }
}
SayAngka(20);

// try
function LogHit(x,y){
    const z = x + y;
    console.log(x + ` ditambah ` + y + ` sama dengan ` + z);
}
LogHit(2, 3);

console.log("-------------------------");

function sayHi(FirstN,LastN){
console.log(`hai ${FirstN} ${LastN}`)
}

sayHi("Aditya", "Hakos");

console.log("----------------------");

/*  Function Return Value
Secara default function tidak menghasilkan value tapi kita bisa membuat function mengembalikan value dengan menggunakan kata kunci return dalam function
di*/



function persegi(sisi){
    return sisi * sisi;
}
console.log(persegi(5));
/*  nama function : persegi
nama parameter : sisi
parameter adalah variable yang exist dalam sebuah function
passing value kedalam function lewat parameter
return adalah hasil dari function
 */

const say =(name, greeting = "hai, ") => {
    console.log(greeting + name);
};
say ("Hakos")
say ("Hakos", "Morning, ");  

// Function Return Value lebih dari satu 

// jika sudah menggunakan kata kunci return maka kode setelah return tersebut tidak akan dieksekusi
// kita bisa menggunakan return untuk menghentikan eksekusi sebuah function

function getfinalval(value){
    if(value > 90){
        return "A";
    } else if (value > 80){
        return "B";
    } else {
        return "C";
    }
    
}
const finalval = getfinalval(85);
console.log(finalval);

console.log("--------------------------");

// menghentikan eksekusi dengan return 

function isContains(array, searchValue) {
    for (const element of array) {
        if (element === searchValue) {
            return true;
        }
    }
    return false;
}
const array =[1,12,13,14,15,167];
const search = 12;
const found = isContains(array, search);
console.log({found});

console.log("-----------------------------");


// optional parameter 
// parameter di function itu optional / tidak wajib diisi value dan maka otomatis bernilai undefined

function SayAw(firstName, middleName,lastName) {
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

SayAw();
SayAw("Adit"); // first name = Adit, middle name dan lastname = undefined  
SayAw("Hakos"); // first name = Hakos , middle name dan lastname = undefined
SayAw("Aditya", "Hakos", "Peris"); // first name = Aditya, middle name = Hakos, last name = Peris 

console.log("==================================");

// Default Parameter
// Parameter bisa kita beri default value > jika kita tidak mengirim data ke parameter atau kita mengirim data undefined maka otomatis parameter akan diisi oleh default value

function register(name, gender = "unknown"){ // default value untuk gender "unknown"
    console.log(name);
    console.log(gender);
}
register("Adit", "Male"); // name = Adit , gender = Male
register("budi"); // name = budi , gender = unknown
register("budi", null); // name = budi , gender = null karena null dianggap sebuah nilai parameter
register("dadang", undefined); // name = budi , gender = unknown

console.log("=============================");

// Rest Paremeter 
/* Rest Parameter adalah fitur dmn kita bisa mengirim data sebanyak mungkin pada parameter, dan secara otomatis akan di konversi sbg array
Untuk membuat rest parameter ada ketentuan 
- Hanya boleh ada satu di function 
- Rest Parameter hanya boleh beada di posisi paling akhir tidak boleh di depan / tengah
 */

function sum(name, ...data){ // ... digunakan untuk menjadikan Rest parameter dan dikonversikan menjadi array
let total = 0 
for (const item of data) {
    total += item;
}
console.log(`Total ${name} is ${total}`);
}

sum("Apel", 12,11,23,14,21,55); 

// Spread Syntax 
// Digunakan untuk mengubah data array menjadi Rest Parameter

const valuesum = [10,101,10,10];
sum("Mangga", ...valuesum);

// Function sbg Value
// Function bisa disimpan didalam variable, bisa juga dikirim melalui parameter ke function lainnya

function sayMor(name){
    console.log(`Hello ${name}`)
}
sayMor("Vira");
let say1 = sayMor; // deklarasi function menjadi sebuah variable

console.log("====================");
// Function digunakan sbg Parameter

function Givename(callback) {
    callback("Vira") // sayMor("Vira")
}
Givename(sayMor)
Givename(say1)

console.log("===================");

// Anonymous Function atau function tanpa nama
// kita bisa buat anonymous function dalam variable / bisa kita buat ketika mengisi parameter

let says = function (name) { // anonymous dalam variable
    console.log(`Hello ${name}`)
}
says ("hak")
says ("per")

function GiveaName (callbacks) { // anonymous dalam parameter
    callbacks("Heru");
}

GiveaName(says);

GiveaName(function(name){
    console.log(`Yow, ${name}`);

});

// Function dalam Function (Inner Function)
// tidak ada batasan dalam membuat function
// hanya bisa diakses ditempat kita membuat function, tidak bisa diakses dari luar function

function outer() {

    function inner(){
        console.log("Inner");
    }
    inner()
    inner();
}
outer();
// inner() Error karna tidak bisa diakses diluar dari function

console.log("===========================");

// Scope : area akses sebuah data 
// setiap kita membuar function maka kita akan membuat local scope untuk function tsb
// data di global scope bisa diakses dari local scope namun data di local scope hanya bisa diakses di local scope tsb atau discope local dibawahnya (function dalam function)

// Global scope  
let Cx = 0 

function hit1(){ 
    Cx++;
}

hit1();
console.info(Cx);

// Local Scope

function first(){
    // local scope first
    let firstvar = "1st";
}

function second(){
    // local scope second 
    let secondvar = "2nd";
}
first();
second();

// console.log(firstvar); error karena variable ada didalam local scope
// console.log(secondvar); error karna variable ada di dalam local scope

