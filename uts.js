class Mahasiswa {
  constructor(data = []) {
    this.data = data;
  }

  fillData(banyakData, nilaiPerkiraan) {
    const { kehadiran, tugas, uts, uas } = nilaiPerkiraan;

    for (let index = 0; index < banyakData; index++) {
      this.data.push({
        nama: `Mahasiswa ${index + 1}`,
        kehadiran: this.randomNumber(kehadiran.min, kehadiran.max),
        tugas: this.randomNumber(tugas.min, tugas.max),
        uts: this.randomNumber(uts.min, uts.max),
        uas: this.randomNumber(uts.min, uas.max),
      });
    }
    return this;
  }

  randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

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

  hitungRataRata() {
    const { data } = this;
    let rataRata = 0;
    data.forEach((item) => (rataRata += item.nilaiAkhir));
    return rataRata / data.length;
  }

  hitungNilaiStandarDeviasi() {
    const { data } = this;
    let nilaiStdDev = 0;
    const rataRata = this.hitungRataRata();
    data.forEach((item) => {
      nilaiStdDev += (item.nilaiAkhir - rataRata) ** 2;
    });
    return Math.sqrt(nilaiStdDev);
  }

  hitungNilaiVariant() {
    const { data } = this;
    let nilaiVariant = 0;
    const rataRata = this.hitungRataRata();
    data.forEach((item) => {
      nilaiVariant += (item.nilaiAkhir - rataRata) ** 2;
    });
    return nilaiVariant;
  }

  ambilNilaiAkhirTerendah() {
    const { data } = this;
    return data.reduce((prev, current) =>
      prev.nilaiAkhir < current.nilaiAkhir ? prev : current
    );
  }

  ambilNilaiAkhirTertinggi() {
    const { data } = this;
    return data.reduce((prev, current) =>
      prev.nilaiAkhir > current.nilaiAkhir ? prev : current
    );
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

const dataMhs = new Mahasiswa().fillData(250, nilaiPerkiraan).data;
const nilaiAkhirMhs = new Mahasiswa(dataMhs).hitungNilaiAkhir(
  bobot,
  batasNilaiMaks
).data;
const nilaiRerataMhs = new Mahasiswa(nilaiAkhirMhs).hitungRataRata();
const standarDeviasi = new Mahasiswa(nilaiAkhirMhs).hitungNilaiStandarDeviasi();
const variant = new Mahasiswa(nilaiAkhirMhs).hitungNilaiVariant();
const nilaiAkhirMhsTerendah = new Mahasiswa(
  nilaiAkhirMhs
).ambilNilaiAkhirTerendah();
const nilaiAkhirMhsTertinggi = new Mahasiswa(
  nilaiAkhirMhs
).ambilNilaiAkhirTertinggi();

console.log("Tabel Daftar Mahasiswa:");
console.table(nilaiAkhirMhs.slice(0, 5));
console.log(".... Mahasiswa 6 - Mahasiswa 245 ....");
console.table(nilaiAkhirMhs.slice(245, 250));
console.log("Tabel Bobot:");
console.table(bobot);
console.log("Tabel Batas Nilai Maksimal:");
console.table(batasNilaiMaks);
console.log("Tabel Nilai Perkiraan:");
console.table(nilaiPerkiraan);

console.log("Jumlah Data          : ", nilaiAkhirMhs.length);
console.log("Nilai Rata-Rata      : ", nilaiRerataMhs);
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
