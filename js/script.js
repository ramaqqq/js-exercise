// // array hewan
// const hewan = ["Kambing", "Kelinci", "Kerbau", "Kucing", "Sapi"];

// // filter elemen array hewan
// const maxEmpatHuruf = hewan.filter(elemen => elemen.length <= 4);

// // cetak hasil filter
// console.log(maxEmpatHuruf);

// const testFilter = ["uu", "eeq", "udin", "marwoto"];

// function filterElement(array, kriteria) {
//   return array.filter((elemen) => elemen.indexOf(kriteria) !== -1);
// }

// console.log(filterElement(testFilter, "din"));

// const total = function (nialiA, nilaiB) {
//   return nialiA + nilaiB;
// };

// console.log(total(1, 3));

// string <<<<<<

//starwith(karakter, posisi awal) akan mengembalikan true/false
// const namaHewan = "Kambing etawa";
// const mulai = namaHewan.startsWith("b", 3);

// console.log(mulai, "<<<< ");

//include(karakter, posisi awal) akan mengembalikan true/false
// const namaHewan = "Kambaing Uu";
// const karakterB = namaHewan.includes("b", 0);
// console.log(karakterB);

//lastIndexOf(karakter, posisi awal) akan memeriksa string dari akhir ke awal
// const namaHewan = "Kambing Etawa";
// const karakterB = namaHewan.lastIndexOf("b", 0);
// console.log(karakterB);

//toUpperCase()
// const namaHewan = "Kambing Etawa";
// const hurufBesar = namaHewan.toUpperCase();
// console.log(hurufBesar);

// string <<<<<<

// const hewan = ["ayam", "kucing"];

// const tambahElemenAkhir = (elemen) => hewan.push(elemen);

// tambahElemenAkhir("ee");
// tambahElemenAkhir("eeq");
// console.log(hewan);

// //function expression
// const total = function (nilaiA, nilaiB) {
//   return nilaiA + nilaiB;
// };
// console.log(total(1, 3));

// //function arrow
// const hasil = (nilaiA, nilaiB) => nilaiA + nilaiB;
// console.log(hasil(4, 1));

// const hewan = ["ayam", "telur", "daging"];

// function cariHewan(arrayHewan, namaHewan) {
//   return arrayHewan.some((elemen) => namaHewan === elemen);
// }

// const hasilSatu = cariHewan(hewan, "telur");
// const hasilDua = cariHewan(hewan, "tuyul");

// console.log(hasilSatu);
// console.log(hasilDua);

// //method every()

// const nomor = [2, 4, 8, 11];

// function cariNomor(array, value) {
//   return array.every((element) => element > value);
// }

// const lebihBesardari2 = cariNomor(nomor, 1);
// const lebihBesardari11 = cariNomor(nomor, -9);

// console.log(lebihBesardari2);
// console.log(lebihBesardari11);

// //method find()

// const hewan = [
//   { nama: "ayam", warna: "koneng" },
//   { nama: "kucing", warna: "bereum" },
//   { nama: "kodok", warna: "hitam" },
//   { nama: "sapi", warna: "coklat" },
// ];

// const hewanAda = hewan.find(({ nama }) => nama === "kodok");
// const hewanTidakAda = hewan.find(({ nama }) => nama === "endog");

// console.log(hewanTidakAda);
// console.log(hewanAda);

// //method join()
// const hewan = ["kambing", "koceng", "kodok"];

// // console.log(hewan.join());
// // console.log(hewan.join(""));
// // console.log(hewan.join(-));
// // console.log(hewan.join(", "));

// //Method foreach()
// const nomer = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const ulangNomor = nomer.forEach((elemen) => console.log(elemen));

//method reverse()
const nomor = [1, 4, 5, 7, 8];

console.log(nomor);
console.log(nomor.reverse());
