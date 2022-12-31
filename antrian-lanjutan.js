const dataPemohonSIM = [
  {
    waktu: "09:00 - 10:00",
    hari: [32, 21, 22, 25, 23],
  },
  {
    waktu: "10:00 - 11:00",
    hari: [20, 18, 23, 17, 13],
  },
  {
    waktu: "12:00 - 13:00",
    hari: [18, 16, 14, 16, 13],
  },
  {
    waktu: "13:00 - 14:00",
    hari: [15, 20, 15, 19, 17],
  },
  {
    waktu: "15:00 - 16:00",
    hari: [21, 13, 11, 11, 11],
  },
];

const hasilDataPemohonSIM = dataPemohonSIM.map((d, i) => {
  const hasil = d.hari.reduce((a, b) => a + b) / d.hari.length;
  return {
    waktu: d.waktu,
    hasil: hasil.toFixed(2),
  };
});

console.table(hasilDataPemohonSIM);

const dataRataRataWaktuPelayanan = [
  {
    waktu: "09:00 - 10:00",
    hari: [1.7, 1.6, 1.7, 1.9, 1.9],
  },
  {
    waktu: "10:00 - 11:00",
    hari: [1.25, 1.4, 1.6, 1.38, 1.41],
  },
  {
    waktu: "12:00 - 13:00",
    hari: [1.43, 1.29, 1.36, 1.37, 1.33],
  },
  {
    waktu: "13:00 - 14:00",
    hari: [1.33, 1.29, 1.25, 1.36, 1.29],
  },
  {
    waktu: "14:00 - 15:00",
    hari: [1.35, 1.27, 1.26, 1.23, 1.3],
  },
];

dataRataRataWaktuPelayanan.map((d, i) => {
  const hasil = 1 / (d.reduce((a, b) => a + b) / d.length);

  //     const hasil = 1 / (d.reduce((a, b) => a + b) / d.length);
  //     return {
  //       waktu: dataRataRataWaktuPelayanan["waktu"][i],
  //       hasil: hasil.toFixed(3),
  //     };
});

// const dataRataRataWaktuPelayanan = {
//   waktu: [
//     "09:00 - 10:00",
//     "10:00 - 11:00",
//     "12:00 - 13:00",
//     "13:00 - 14:00",
//     "15:00 - 16:00",
//   ],
//   hari: [
//     [1.7, 1.6, 1.7, 1.9, 1.9],
//     [1.25, 1.4, 1.6, 1.38, 1.41],
//     [1.43, 1.29, 1.36, 1.37, 1.33],
//     [1.33, 1.29, 1.25, 1.36, 1.29],
//     [1.35, 1.27, 1.26, 1.23, 1.3],
//   ],
//   hari: [
//     {

//     }
//   ]
// };

// const hasilDataRataRataWaktuPelayanan = dataRataRataWaktuPelayanan.hari.map(
//   (d, i) => {
//     const hasil = 1 / (d.reduce((a, b) => a + b) / d.length);
//     return {
//       waktu: dataRataRataWaktuPelayanan["waktu"][i],
//       hasil: hasil.toFixed(3),
//     };
//   }
// );

// console.table(hasilDataRataRataWaktuPelayanan);
