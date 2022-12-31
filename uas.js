/** UAS Teknik Simulasi dan Pemodelan
 * =================================================
 * NIM: 1930511068
 * Nama: Deri Kurniawan
 * =================================================
 * Jurnal: ANALISIS SISTEM ANTRIAN DAN OPTIMALISAI PELAYANAN TELLER PADA PT. BANK SULUTGO
 * Oleh:
 * - Dimas Dwi Prayogo
 * - Jessy J Pondaag
 * - Ferdinand Tumewu
 */

const distKedatanganNasabahPerHariBagianTeler = [
  {
    no: 1,
    tanggal: "1/3/2017",
    hariKerja: "Rabu",
    jumlahKedatanganNasabah: 173,
    JamKerja: 7,
  },
  {
    no: 2,
    tanggal: "2/3/2017",
    hariKerja: "Kamis",
    jumlahKedatanganNasabah: 184,
    JamKerja: 7,
  },
  {
    no: 3,
    tanggal: "3/3/2017",
    hariKerja: "Jum'at",
    jumlahKedatanganNasabah: 184,
    JamKerja: 7,
  },
  {
    no: 4,
    tanggal: "6/3/2017",
    hariKerja: "Senin",
    jumlahKedatanganNasabah: 203,
    JamKerja: 7,
  },
  {
    no: 5,
    tanggal: "7/3/2017",
    hariKerja: "Selasa",
    jumlahKedatanganNasabah: 220,
    JamKerja: 7,
  },
  {
    no: 6,
    tanggal: "8/3/2017",
    hariKerja: "Rabu",
    jumlahKedatanganNasabah: 171,
    JamKerja: 7,
  },
  {
    no: 7,
    tanggal: "9/3/2017",
    hariKerja: "Kamis",
    jumlahKedatanganNasabah: 178,
    JamKerja: 7,
  },
  {
    no: 8,
    tanggal: "10/3/2017",
    hariKerja: "Jum'at",
    jumlahKedatanganNasabah: 165,
    JamKerja: 7,
  },
  {
    no: 9,
    tanggal: "13/3/2017",
    hariKerja: "Senin",
    jumlahKedatanganNasabah: 174,
    JamKerja: 7,
  },
  {
    no: 10,
    tanggal: "14/3/2017",
    hariKerja: "Selasa",
    jumlahKedatanganNasabah: 153,
    JamKerja: 7,
  },
  {
    no: 11,
    tanggal: "15/3/2017",
    hariKerja: "Rabu",
    jumlahKedatanganNasabah: 165,
    JamKerja: 7,
  },
  {
    no: 12,
    tanggal: "16/3/2017",
    hariKerja: "Kamis",
    jumlahKedatanganNasabah: 138,
    JamKerja: 7,
  },
  {
    no: 13,
    tanggal: "17/3/2017",
    hariKerja: "Jum'at",
    jumlahKedatanganNasabah: 130,
    JamKerja: 7,
  },
  {
    no: 14,
    tanggal: "20/3/2017",
    hariKerja: "Senin",
    jumlahKedatanganNasabah: 127,
    JamKerja: 7,
  },
  {
    no: 15,
    tanggal: "21/3/2017",
    hariKerja: "Selasa",
    jumlahKedatanganNasabah: 132,
    JamKerja: 7,
  },
];

// m = jumlah jalur yang terbuka
const m = 5;

// λ = jumlah kedatangan rata-rata nasabah per satuan waktu
const λ = 0.5;

// µ = jumlah rata-rata yang dilayani per satuan waktu pada setiap jalur
const µ = 0.5;

// Po = probabilitas terdapat 0 unit dalam sistem
const Po = 0.5;

// Ls = jumlah pelanggan rata-rata dalam sistem
const Ls = 0.5;

// Ws = waktu rata-rata yang dihabiskan seorang pelanggan dalam antrian atau sedang dilayani (dalam sistem)
const Ws = Ls / λ;

// Lq = jumlah orang atau unit rata-rata yang menunggu dalam antrian
const Lq = Ls - λ / µ;

// Wq = waktu rata-rata yang dihabiskan oleh seorang pelanggan atau unit untuk menunggu dalam antrian
const Wq = Lq / λ;

// buat block kode model antrian m/m/s untuk analisis sistem antrian dari variabel distKedatanganNasabahPerHariBagianTeler

const faktorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * faktorial(n - 1);
};
