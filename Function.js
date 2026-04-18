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

// Nested Function
// innerfunction hanya bisa dipanggil dalam outer function
// function inner tidak bisa dipakai dari luar 
function outerFunction() { //function utama
    console.log("Ini fungsi luar");

    function innerFunction() { // nested function
        console.log("Ini fungsi dalam");
    }

    innerFunction();
}

outerFunction();

// Recursive Function : kemampuan function untuk memanggil function dirinya sendiri
// Factorial Loop

function factorial(valueA){
    let result = 1;
    for (let i = 1; i <= valueA; i++){
        result *= i;
    }
    return result;
}
console.info(factorial(5));
console.info(1*2*3*4*5);

// Function factorial recursive
function factorialRecursive(valueB){
    if (valueB === 1) {
        return 1;
    } else {
        return valueB * factorialRecursive (valueB - 1);
    }
}
console.info(factorialRecursive(3));
console.log("===========================");

// Function Generator 
// adalah function yang digunakan untuk membuat data generator
// Generator adalah data yang bisa di iterasi spt array


function* createName(name) {
    yield "Hakos";
    yield "P";
    }

    const names = createName();
    for (const name of names) {
        console.info(name);        
    }

function* buatGanjil(valueC){ // deklarasi menggunakan *
    for (let a = 1; a <= valueC; a ++){
        if (a % 2 === 1) {
            yield a;
        }
    }
}
const numbers = buatGanjil(20);
for (const number of numbers){
    console.info(number);
}

// Arrow Function 
// adalah alternaltif pembuatan function yang lebih sederhana dr function biasanya 
// terdapat limitasi dan tidak bisa digunakan untuk semua situasi
// menggunakan tanda =>
// harus disimpan dalam variable
// tidak ada argument object
// tidak bisa menggunakan function generato

const sayA = (named) => {
    const sayX = `Hello ${named}`;
    console.info(sayX)
}
sayA(`Hakos`);

// Arrow Function tanpa block
// digunakan untuk function dmn hanya 1 baris
// tidak perlu menggunakan return

const sayB = (named) => console.info(`Hello ${named}`);
sayB(`Adit`);

const total = (pertama, kedua) => pertama + kedua;
console.log(total(12, 12));

//  Arrow Function sbg Parameter

/* setTimeout(() => { // digunakan untuk set time 
    console.log("Dijalankan setelah 1 detik");
}, 100); // 1000 ms satuan yang digunakan = 1 detik
 */
// Closure
// adalah function yang mengingat variable dari luar scopenya

function createUser() {
    let password = "12345";

    return {
        checkPassword: function(input) {
            return input === password;
        }
    };
}

const user = createUser();

console.log(user.checkPassword("12345")); // true

// Object Method 
// Object method adalah function yang menjadi properti di dalam object. Jadi object tidak hanya menyimpan data, tapi juga perilaku (behavior).


const person = {
    name: "anji",
    sayHello: function (name){
        console.log(`Hello ${name}`);
    }
};
person.sayHello(`heru`); 

// Menambah Method ke Object

const person1 = {
    name: "bimo"
};

person1.sayHi = function (name1){
    console.log(`Hello ${name1}`);
}
person1.sayHi(`Tatang`);

console.log("=====================")


// Kata kunci this
/* Kata kunci this di JavaScript digunakan untuk mereferensikan object yang sedang menjalankan kode.
Tapi hati-hati: nilai this itu tidak tetap, dia tergantung bagaimana function dipanggil, bukan di mana dia ditulis. */

// this di function global
/* function test(){
    console.log(this);
}
test(); // hasilnya akan windows jika di coba di browser
 */

// This di Object Method
const orang = {
    name : "Jog",
    sayHello(){
        console.log(`Hello ${this.name}`); 
    }
};
orang.sayHello();
// this = orang
// jadi this.name = "Jog"