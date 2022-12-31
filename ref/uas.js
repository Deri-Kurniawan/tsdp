import { factorial, intToPercentage, hoursToMinutes } from "./utils.js";
// M: Jumlah teller
const M = 3;
// miu: Tingkat pelayanan
const miu = 15;
// lambda: Tingkat kedatangan
const lambda = [20, 23, 28, 24, 23, 22, 20, 18];
// Periode
const periode = [
  "08.00-09.00",
  "09.00-10.00",
  "10.00-11.00",
  "11.00-12.00",
  "12.00-13.00",
  "13.00-14.00",
  "14.00-15.00",
  "15.00-16.00",
];
// P0: Probabilitas sistem dalam keadaan kosong
const hitungPNol = (lambda, miu, M) => {
  let pembilang = 0;
  let penyebut = 0;
  for (let i = 0; i < M; i++) {
    pembilang += Math.pow(lambda / miu, i) / factorial(i);
  }
  penyebut =
    (Math.pow(lambda / miu, M) / factorial(M)) *
    ((M * miu) / (M * miu - lambda));
  return 1 / (pembilang + penyebut);
};
// rho: Tingkat Utilitas
const hitungRho = (lambda, miu, M) => {
  return lambda / (M * miu);
};
// Ls: Waktu rata-rata calon pendaftar dalam sistem
const hitungLs = (lambda, miu, M, P0) => {
  const pembilang = factorial(M - 1);
  const penyebut = Math.pow(M * miu - lambda, 2);
  const hasil =
    (lambda * miu * Math.pow(lambda / miu, M)) / (pembilang * penyebut);
  return hasil * P0 + lambda / miu;
};
// Ws: Waktu rata-rata nasabah dalam sistem
const hitungWs = (Ls, lambda) => {
  return Ls / lambda;
};
// Lq: Waktu rata-rata calon pendaftar dalam antrian
const hitungLq = (Ls, lambda, miu) => {
  return Ls - lambda / miu;
};
// Wq: Waktu rata-rata nasabah
const hitungWq = (Lq, lambda) => {
  return Lq / lambda;
};
const periodeData = periode.map((item, index) => {
  let lambda_data = lambda[index];
  let P0 = hitungPNol(lambda_data, miu, M).toFixed(4);
  let rho =
    Number(intToPercentage(hitungRho(lambda_data, miu, M))).toFixed(1) + "%";
  let Ls = hitungLs(lambda_data, miu, M, P0).toFixed(4);
  let Ws = Number(hoursToMinutes(hitungWs(Ls, lambda_data))).toFixed(2);
  let Lq = hitungLq(Ls, lambda_data, miu).toFixed(4);
  let Wq = Number(hoursToMinutes(hitungWq(Lq, lambda_data))).toFixed(2);
  return {
    periode: item,
    lambda: lambda_data,
    P0: P0,
    rho: rho,
    Ls: Ls,
    Ws: Ws,
    Lq: Lq,
    Wq: Wq,
  };
});
console.log(
  "================================================================================================="
);
console.log("Nama: Ikram Maulana");
console.log("NIM: 1930511075");
console.table(periodeData);
console.log(
  "================================================================================================="
);
