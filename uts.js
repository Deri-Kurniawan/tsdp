/**
 * NIM         : 1930511068
 * Nama        : Deri Kurniawan
 * Mata Kuliah : Teknik Simulasi dan Pemodelan
 */

/**
 * Class Mahasiswa
 * @param {any[]} data mahasiswa data
 */
class Mahasiswa {
  constructor(data = []) {
    this.data = data;
  }

  /**
   * Isi array dengan data mahasiswa
   * @param {number} banyakData banyak data mahasiswa untuk di isi
   * @param {object} nilaiPerkiraan jarak perkiraan data mahasiswa
   * @returns {object} this
   */
  fillData(banyakData, nilaiPerkiraan) {
    const { kehadiran, tugas, uts, uas } = nilaiPerkiraan;

    for (let index = 0; index < banyakData; index++) {
      this.data.push({
        nama: `Mahasiswa ${index + 1}`,
        kehadiran: this.acakNilai(kehadiran.min, kehadiran.max),
        tugas: this.acakNilai(tugas.min, tugas.max),
        uts: this.acakNilai(uts.min, uts.max),
        uas: this.acakNilai(uts.min, uas.max),
      });
    }
    return this;
  }

  /**
   * Acak nilai dari min sampai max
   * @param {number} min nilai minimum
   * @param {number} max nilai maksimum
   * @returns {number} nilai acak
   */
  acakNilai(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Hitung nilai akhir mahasiswa
   * @param {object} bobot bobot nilai
   * @param {object} batasNilaiMaksimal batas nilai maksimal
   * @returns {object} this
   */
  hitungNilaiAkhir(bobot, batasNilaiMaksimal) {
    const { data } = this;

    this.data = data.map((item) => {
      const kehadiran =
        Math.round(item.kehadiran / batasNilaiMaksimal.kehadiran) *
        bobot.kehadiran;
      const tugas = (item.tugas / batasNilaiMaksimal.tugas) * bobot.tugas;
      const uts = (item.uts / batasNilaiMaksimal.uts) * bobot.uts;
      const uas = (item.uas / batasNilaiMaksimal.uas) * bobot.uas;

      return {
        ...item,
        nilaiAkhir: Math.round(kehadiran + tugas + uts + uas),
      };
    });
    return this;
  }

  /**
   * Menghitung rata-rata nilai akhir mahasiswa
   * @returns {number} rata rata nilai akhir mahasiswa
   */
  hitungRataRata() {
    const { data } = this;
    let rataRata = 0;
    data.forEach((item) => (rataRata += item.nilaiAkhir));
    return rataRata / data.length;
  }

  /**
   * Menghitung nilai standar deviasi
   * @returns {number} nilai standar deviasi
   */
  hitungNilaiStandarDeviasi() {
    const { data } = this;
    let nilaiStdDev = 0;
    const rataRata = this.hitungRataRata();
    data.forEach((item) => {
      nilaiStdDev += (item.nilaiAkhir - rataRata) ** 2;
    });
    return Math.sqrt(nilaiStdDev);
  }

  /**
   * Menghitung nilai variant
   * @returns {number} nilai variant
   */
  hitungNilaiVariant() {
    const { data } = this;
    let nilaiVariant = 0;
    const rataRata = this.hitungRataRata();
    data.forEach((item) => {
      nilaiVariant += (item.nilaiAkhir - rataRata) ** 2;
    });
    return nilaiVariant;
  }

  /**
   * Mengambil data mahasiswa yang nilai akhirnya paling tinggi
   * @returns {object} data mahasiswa
   */
  ambilNilaiAkhirTerendah() {
    const { data } = this;
    return data.reduce((prev, current) =>
      prev.nilaiAkhir < current.nilaiAkhir ? prev : current
    );
  }

  /**
   * Mengambil data mahasiswa yang nilai akhirnya paling rendah
   * @returns {object} data mahasiswa
   */
  ambilNilaiAkhirTertinggi() {
    const { data } = this;
    return data.reduce((prev, current) =>
      prev.nilaiAkhir > current.nilaiAkhir ? prev : current
    );
  }

  /**
   * Pengkelasan nilai akhir mahasiswa
   * @param {object} kelas kelas nilai akhir mahasiswa
   * @returns {object} this
   */
  pengkelasanNilaiAkhir(kelas) {
    const { data } = this;
    this.data = data.map((item) => {
      const kelasNilai = kelas.find((k) => {
        return (
          Math.round(item.nilaiAkhir) >= k.lowerLimit &&
          Math.round(item.nilaiAkhir) <= k.upperLimit
        );
      });

      return {
        ...item,
        predikat: kelasNilai.predicate,
      };
    });
    return this;
  }
}

const bobot = {
  kehadiran: 20,
  tugas: 20,
  uts: 30,
  uas: 30,
};

const batasNilaiMaks = {
  kehadiran: 16,
  tugas: 100,
  uts: 100,
  uas: 100,
};

const nilaiPerkiraan = {
  kehadiran: {
    min: 10,
    max: 16,
  },
  tugas: {
    min: 60,
    max: 90,
  },
  uts: {
    min: 60,
    max: 90,
  },
  uas: {
    min: 60,
    max: 90,
  },
};

const kelas = [
  {
    predicate: "A",
    lowerLimit: 80,
    upperLimit: 100,
    description: "Sangat Baik",
  },
  {
    predicate: "B",
    lowerLimit: 70,
    upperLimit: 79,
    description: "Baik",
  },
  {
    predicate: "C",
    lowerLimit: 60,
    upperLimit: 69,
    description: "Cukup",
  },
  {
    predicate: "D",
    lowerLimit: 50,
    upperLimit: 59,
    description: "Kurang",
  },
  {
    predicate: "E",
    lowerLimit: 0,
    upperLimit: 49,
    description: "Gagal",
  },
];

const dataMhs = new Mahasiswa().fillData(250, nilaiPerkiraan).data;
const nilaiAkhirMhs = new Mahasiswa(dataMhs)
  .hitungNilaiAkhir(bobot, batasNilaiMaks)
  .pengkelasanNilaiAkhir(kelas).data;
const nilaiRataRataMhs = new Mahasiswa(nilaiAkhirMhs).hitungRataRata();
const standarDeviasi = new Mahasiswa(nilaiAkhirMhs).hitungNilaiStandarDeviasi();
const variant = new Mahasiswa(nilaiAkhirMhs).hitungNilaiVariant();
const nilaiAkhirMhsTerendah = new Mahasiswa(
  nilaiAkhirMhs
).ambilNilaiAkhirTerendah();
const nilaiAkhirMhsTertinggi = new Mahasiswa(
  nilaiAkhirMhs
).ambilNilaiAkhirTertinggi();

console.log("Tabel Batas Nilai Maksimal:");
console.table(batasNilaiMaks);

console.log("Tabel Nilai Perkiraan:");
console.table(nilaiPerkiraan);

console.log("Tabel Bobot:");
console.table(bobot);

console.log("Tabel Kelas:");
console.table(kelas);

console.log("Tabel Daftar Mahasiswa:");
console.table(nilaiAkhirMhs.slice(0, 5));
console.log(".... Mahasiswa 6 - Mahasiswa 245 ....");
console.table(nilaiAkhirMhs.slice(245, 250));

console.log("Jumlah Data          : ", nilaiAkhirMhs.length);
console.log("Nilai Rata-Rata      : ", nilaiRataRataMhs);
console.log("Variant              : ", variant / (nilaiAkhirMhs.length - 1));
console.log(
  "Standar Deviasi      : ",
  standarDeviasi / (nilaiAkhirMhs.length - 1)
);
console.log(
  "Nilai Akhir Terendah : ",
  nilaiAkhirMhsTerendah.nilaiAkhir,
  `(${nilaiAkhirMhsTerendah.nama})`
);
console.log(
  "Nilai Akhir Tertinggi: ",
  nilaiAkhirMhsTertinggi.nilaiAkhir,
  `(${nilaiAkhirMhsTertinggi.nama})`
);
