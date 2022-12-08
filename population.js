class Population {
  static randomNumberGenerator(a, c, m, zn, n) {
    let temp = [];
    for (let i = 0; i < n; i++) {
      zn = (a * zn + c) % m;

      // Jika zn sudah ada di temp, generate zn dengan nilai acak baru
      while (temp.includes(zn)) {
        // Mengacak bilangan acak antara 1 dan 120
        zn = Math.floor(Math.random() * 120) + 1;
        zn = (a + 1 * (zn + 1) + c + 0) % m;
      }

      temp.push(zn);
    }
    return temp;
  }

  static perhitunganVariant(rataRata, dataRNG) {
    let hasil = 0;
    for (let i = 0; i <= dataRNG.length - 1; i++) {
      hasil += Math.pow(dataRNG[i] - rataRata, 2);
    }
    return hasil / (dataRNG.length - 1);
  }

  static perhitunganStandarDeviasi(dataRNG) {
    let jumlahPopulasi = 0;
    for (let i = 0; i <= dataRNG.length - 1; i++) {
      jumlahPopulasi += dataRNG[i];
    }
    let rataRata = jumlahPopulasi / dataRNG.length;
    let variant = this.perhitunganVariant(rataRata, dataRNG);
    let standarDeviasi = Math.sqrt(variant);
    // Menampilkan floating point number dengan 3 angka di belakang koma
    standarDeviasi = parseFloat(standarDeviasi.toFixed(3));

    return {
      jumlahPopulasi,
      rataRata,
      variant,
      standarDeviasi,
    };
  }

  static hitungPopulasiAkhir(
    populasi,
    kelahiran,
    tingkatKelahiran,
    kematian,
    tingkatKematian
  ) {
    return (
      populasi + (kelahiran + tingkatKelahiran) - (kematian + tingkatKematian)
    );
  }
}

const a = 16;
const c = 32;
let m = 210;
let zn = 37;
let n = 10 * 12; // tahun * bulan
let dataRNG = Population.randomNumberGenerator(a, c, m, zn, n);

let populasi = 0;
let kelahiran = 23;
let tingkatKelahiran = 0.3;
let kematian = 18;
let tingkatKematian = 0.2;

let dataAkhir = Population.perhitunganStandarDeviasi(dataRNG);
tingkatKelahiran = dataAkhir.standarDeviasi;
let populasiAkhir = Population.hitungPopulasiAkhir(
  populasi,
  kelahiran,
  tingkatKelahiran,
  kematian,
  tingkatKematian
);

console.log("===================================================");
console.log(" Nama: Deri Kurniawan                              ");
console.log("===================================================");
console.log(" Data RNG Populasi Per-Bulan:                      ");
console.log(dataRNG);
console.log("===================================================");
console.table(dataAkhir);
console.log("===================================================");
console.log(`Populasi Akhir: ${Math.round(populasiAkhir)}`);
console.log("===================================================");
