import data from "./data.js";
import {
  hoursToMinutes,
  sumLq,
  sumLs,
  sumP,
  sumP0,
  sumWq,
  sumWs,
} from "./utils.js";

// customerArrivalData: Data kedatangan nasabah
const customerArrivalData = [...data];

// M: Jumlah teller
const M = 2;

// miu: Tingkat pelayanan
const miu = 12;

// waktu: Waktu kedatangan nasabah
let waktu = customerArrivalData.map((item) => item.waktu);

// lambda: Jumlah kedatangan nasabah/10 menit/5 hari
let lambda = customerArrivalData.map(
  ({ senin, selasa, rabu, kamis, jumat }) =>
    (senin + selasa + rabu + kamis + jumat) / 5
);

const result = waktu.map((w, index) => {
  let nLambda = lambda[index];

  // P0: Probabilitas tidak ada nasabah dalam sistem
  let P0 = sumP0(nLambda, miu, M).toFixed(4);

  // P: Probabilitas sistem dalam keadaan sibuk
  let P = sumP(nLambda, miu, M).toFixed(4);

  // Ls: Waktu rata-rata calon pendaftar dalam sistem
  let Ls = sumLs(nLambda, miu, M, P0).toFixed(4);

  // Lq: Waktu rata-rata calon pendaftar dalam antrian
  let Lq = sumLq(Ls, nLambda, miu).toFixed(4);

  // Ws: Waktu rata-rata nasabah dalam sistem
  let Ws = Number(hoursToMinutes(sumWs(Ls, nLambda))).toFixed(2);

  // Wq: Waktu rata-rata nasabah dalam antrian
  let Wq = Number(hoursToMinutes(sumWq(Lq, nLambda))).toFixed(2);

  return {
    "Periode Waktu": w,
    λ: nLambda,
    P0,
    P,
    Ls,
    Ws,
    Lq,
    Wq,
  };
});

console.log("===============================================================");
console.log("Nama : Deri Kurniawan");
console.log("NIM  : 1930511068");
console.log("===============================================================");
console.table(result);
console.log("===============================================================");
