// Saat browser di buka
// window.onload = function () {
//     console.log('Selamat Datang')
// }

/*
1. Menuliskan sebuah text di html kita
2. Mengambil sebuah element pada html berdasarkan selector id
*/
document.write('Selamat Datang')



// console.log(document.getElementsByClassName('class-tombol'));

var nama = 'John'
let umur = 30
const phi = 3.14
let umur2 = 32
let jenis_kelamin = 'laki'
// let jenis kelamin = 'laki' // salah
let jenisKelamin = 'perempuan'
let UMUR = 20
let _nama = 'nama'
let $nama = 'nama'
// let 1231 = 'angka' // salah
// let 1nama = 'nama' // salah
// let !nama = 'nama' // salah
// let n = 'john'

// console.log(nama);

// let promtNama = prompt('Masukan Nama Anda: ')
// console.log(promtNama);
// alert('Halo ' + promtNama)

// TIPE DATA
let namaLengkap = "Bariq Firjatullah" // string
let tahunLahir = 1997 // number
let benar = true // Boolean
let salah = false // Boolean
let alamat = null // Null
let asalKota

console.log({
    namaLengkap,
    tahunLahir,
    benar,
    salah,
    alamat,
    asalKota
});

// let warga = new Array()
let warga = ['Si A', 'Si B', 'Si C'] // Array
let dataWarga = [
    ['Si A', 'Si B', 'Si C'],
    ['Si D', 'Si E', 'Si F'],
] // Array Multidimensi
console.log(dataWarga);

let biodata = {
    nama: 'Bariq',
    alamat: 'Malang',
    umur: 20
}

console.log(biodata);

let biodataWarga = [
    {
        nama: 'Si A',
        alamat: 'Malang',
        umur: 20
    },
    {
        nama: 'Si B',
        alamat: 'Surabaya',
        umur: 25
    }
]

console.log(biodataWarga);

let dataDesa = {
    nama_desa: 'Desa 1',
    data_warga: biodataWarga
}

console.log(dataDesa);

function salam() {
    console.log('Halo Selamat Datang');
}

salam()

console.clear()

let angka1, angka2, hPenjumlahan, hPengurangan, hPerkalian, hPembagian, hModulus

angka1 = 12
angka2 = 3

hPenjumlahan = angka1 + angka2
hPengurangan = angka1 - angka2
hPerkalian = angka1 * angka2
hPembagian = angka1 / angka2
hModulus = angka1 % angka2

console.log({
    hPenjumlahan, hPengurangan, hPerkalian, hPembagian, hModulus
});

angka1 = 10
console.log({ angka1 });
angka1 += 2
console.log({ angka1 });
angka1 -= 5
console.log({ angka1 });
angka1 *= 5
console.log({ angka1 });
angka1 /= 7
console.log({ angka1 });
angka1 %= 2
console.log({ angka1 });

angka1++ // Increment
console.log({ angka1 });

angka1-- // Decrement
console.log({ angka1 });

console.clear()

let kata1, kata2

kata1 = 'Halo'
kata2 = 'Hai'

console.log({
    sama_dengan: kata1 == kata2,
    tidak_sama_dengan: kata1 != kata2,
    angka_1: angka1,
    angka_2: angka2,
    kurang_dari: angka1 < angka2,
    lebih_dari: angka1 > angka2,
    kurang_dari_sama_dengan: 20 <= 20,
    lebih_dari_sama_dengan: 30 >= 10,
    sama_dengan_detail: '1' === 1
})

console.log({
    dan: true && true,
    dan_2: kata1 == kata2 && angka1 < angka2,
    dan_3: 30 >= 10 && 20 <= 20,
    atau: true || false,
    atau_2: kata1 == kata2 || angka1 < angka2,
    atau_3: 1 > 2 || 10 < 5,
    tidak: !true,
    tidak_2: !false,
    tidak_3: !1 > 2
})

console.clear()

if (false) {
    console.log('Kondisi benar');
}

// kata2 = 'Halo'

if (kata1 == kata2) {
    console.log('Kata 1 Sama Dengan Kata 2')
} else {
    console.log('Kata 1 Tidak Sama Dengan Kata 2')
}

let nilai = 75

if (nilai > 80) {
    console.log('Nilai kamu diatas rata-rata');
} else if (nilai == 80) {
    console.log('Nilai kamu 80')
} else if (nilai < 80 && nilai > 70) {
    console.log('Nilai kamu cukup')
} else {
    console.log('Nilai kamu dibawah rata-rata')
}

console.clear()

let nilaiAwal = 1
while (nilaiAwal <= 10) {
    console.log('Nilai ' + nilaiAwal)

    nilaiAwal++
}

do {
    console.log('Nilai ' + nilaiAwal)

    nilaiAwal++
} while (nilaiAwal <= 15);


for (let index = nilaiAwal; index > 0; index--) {
    console.log('Nilai ' + index)
}

let pilihan = 4
switch (pilihan) {
    case 1:
        console.log('Pilihan 1');
        break;
    case 2:
        console.log('Pilihan 2')
        break;
    default:
        console.log('Pilihan anda tidak sesuai')
        break;
}

console.clear()

function sapaan(nama = 'Jhon') {
    console.log('Halo ' + nama)
}

sapaan('bariq')

function penambahan(angka1, angka2) {
    return angka1 + angka2
}

// console.log(penambahan(angka1, angka2));
let penambahan1 = penambahan(angka1, angka2)
console.log(penambahan1);



const tombol = document.getElementById("tombol")

function tampilPesan() {
    alert('Tampil pesan dari fungsi')
    tombol.removeEventListener('click', tampilPesan)
}

tombol.addEventListener('click', function (event) {
    console.log("Tombol telah diklik pada koordinat X: " + event.clientX + " Y: " + event.clientY);
})

tombol.addEventListener('click', tampilPesan)

const tombol2 = document.getElementById("tombol-2")

tombol2.addEventListener('click', function () {
    let setuju = confirm('Apa anda yakin ingin melanjutkan?')
    if (setuju) {
        let nama = prompt('Tuliskan Nama Anda: ')
        alert('Halo ' + nama + ' Selamat Datang di Website')
    }
})

let teks = new String("Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, necessitatibus.")
console.log(teks);
console.log(teks.length);
teks = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
console.log(teks);
console.log(teks.length);

teks = teks.toUpperCase()
console.log(teks);
teks = teks.toLowerCase()
console.log(teks);
console.log(teks.slice(0, 10))
teks = teks.indexOf('dolor')
console.log(teks);

console.clear()

const dataArray = new Array('Data 1', 'Data 2', 3, 4)
dataArray[3] = 'Data 4'
dataArray.push('Data 5')
dataArray.pop()

console.log({
    dataArray,
    data_1: dataArray[0],
    data_2: dataArray[3],
    total_data: dataArray.length
});

for (let index = 0; index < dataArray.length; index++) {
    const nilai = dataArray[index];
    console.log(nilai);
}

console.clear()

dataArray.forEach(function (item) {
    console.log(item)
})

console.clear()

biodata = {
    nama: 'Bariq',
    alamat: 'Malang',
    umur: 20
}

biodata.asal = 'Indonesia'
delete biodata.asal

console.log(biodata.nama);
console.log(biodata['alamat']);
console.log(biodata);

biodataWarga = [
    {
        nama: 'Si A',
        alamat: 'Malang',
        umur: 20
    },
    {
        nama: 'Si B',
        alamat: 'Surabaya',
        umur: 25
    }
]

biodataWarga.forEach(function (item) {
    console.log('Nama', item.nama);
    console.log('Alamat', item.alamat);
})