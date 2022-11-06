let a = 21; // ieu ganti
let b = 22; // ieu ganti
let m = 29; // ieu ganti

let xn = 9;
let no = 1;

let jumlah = 0;
let variant = 0;
let rata = 0;
let stdDev = 0;

for (let n = 1; n < m; n++) {
  xn = (a * xn + b) % m;
  jumlah += xn;
  console.log(`${no++}. ${xn}`);
}

for (let l = 1; l < m; l++) {
  xn = (a * xn + b) % m;
  variant += (xn - rata) ** 2;
}

for (let l = 1; l < m; l++) {
  xn = (a * xn + b) % m;
  stdDev += Math.sqrt((xn - rata) ** 2);
}

console.log("==================================");
console.log(`Jumlah: ${jumlah}`);
console.log("==================================");
console.log(`Rata-rata: ${jumlah / (m - 1)}`);
console.log("==================================");
console.log(`Variant: ${variant / (m - 1)}`);
console.log("==================================");
console.log(`Standar Deviasi: ${stdDev / (m - 1)}`);
console.log("==================================");
