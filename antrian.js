function dataDiri() {
  console.log("====================================");
  console.log("=          Deri Kurniawan          =");
  console.log("=            1930511068            =");
}

function soal1(personalData) {
  function calculateProbabilities(a, b) {
    return a / b;
  }

  function calculateLambda(a, b) {
    return a * b;
  }

  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }

  function cumulativePoisson(lambda, x) {
    return (Math.pow(Math.E, -lambda) * Math.pow(lambda, x)) / factorial(x);
  }

  function poissonMany(lambda, x) {
    let array = [];
    for (let i = 0; i <= x; i++) {
      array.push(cumulativePoisson(lambda, i));
    }
    return array;
  }

  function sumAsFloat(arr) {
    return arr.reduce((a, b) => {
      return parseFloat(a) + parseFloat(b);
    });
  }

  const kertasTotal = 10000;
  const kertasRusak = 100;
  const n = 1000;
  const p = calculateProbabilities(kertasRusak, kertasTotal);
  const lambda = calculateLambda(n, p);

  const p1a = cumulativePoisson(lambda, 5);
  const p1b = sumAsFloat(poissonMany(lambda, 2));
  const p1c = sumAsFloat(poissonMany(lambda, 20));

  personalData();
  console.log("====================================");
  console.log("=              Soal 1              =");
  console.log("====================================");
  console.log(`1.A. P(x =  5): ${p1a.toFixed(16)}`);
  console.log(`1.B. P(x <= 2): ${p1b.toFixed(16)}`);
  console.log(`1.C. P(x >= 2): ${p1c.toFixed(16)}`);
  console.log("====================================");
}

function soal2(personalData) {
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }

  function probabilityOfNoRegistrar(lambda, miu, s) {
    let numerator = 0;
    let denominator = 0;

    for (let i = 0; i < s; i++) {
      numerator += Math.pow(lambda / miu, i) / factorial(i);
    }

    denominator =
      Math.pow(lambda / miu, s) / (factorial(s) * (1 - lambda / (s * miu)));
    return 1 / (numerator + denominator);
  }

  function averageNumberOfProspectiveRegistrantsInQueue(pNol, lambda, miu, s) {
    let numerator = pNol * Math.pow(lambda / miu, s) * (lambda / (s * miu));
    let denominator = factorial(s) * Math.pow(1 - lambda / (s * miu), 2);
    return numerator / denominator;
  }

  function averageNumberOfProspectiveRegistrantsInSystem(Lq, lambda, miu) {
    return parseFloat(Lq) + lambda / miu;
  }

  function registrantServiceTimeInQueue(Lq, lambda) {
    return parseFloat(Lq) / lambda;
  }

  function hourToMinute(hour) {
    return hour * 60;
  }

  function registrantServiceTimeInSystem(Wq, miu) {
    return parseFloat(Wq) + 1 / miu;
  }

  personalData();
  console.log("====================================");
  console.log("=              Soal 2              =");
  console.log("====================================");

  const lambda = 90;
  const miu = 20;
  const s = 5;

  const pNol = probabilityOfNoRegistrar(lambda, miu, s);
  const Lq = averageNumberOfProspectiveRegistrantsInQueue(pNol, lambda, miu, s);
  const Ls = averageNumberOfProspectiveRegistrantsInSystem(Lq, lambda, miu);
  const Wq = registrantServiceTimeInQueue(Lq, lambda).toFixed(4);
  const Ws = registrantServiceTimeInSystem(Wq, miu).toFixed(4);

  console.log(
    `Probabilitas tidak ada pendaftar dalam sistem: (${pNol.toFixed(4)})`
  );
  console.log(
    `Jumlah rata-rata calon pendaftar dalam antrian: (${Lq.toFixed(
      1
    )}) calon pendaftar menunggu, dibulatkan menjadi (${Math.round(Lq).toFixed(
      0
    )})`
  );
  console.log(
    `Jumlah rata-rata calon pendaftar dalam sistem: (${Ls.toFixed(
      1
    )}) calon pendaftar dalam sistem, dibulatkan menjadi (${Math.round(
      Ls
    ).toFixed(0)})`
  );
  console.log(
    `Waktu menunggu setiap calon pendaftar selama dalam antrian: (${Wq} jam) menjadi (${hourToMinute(
      Wq
    ).toFixed(1)} menit)`
  );
  console.log(
    `Waktu layanan setiap calon pendaftar selama dalam sistem: (${Ws} jam) menjadi (${hourToMinute(
      Ws
    ).toFixed(1)} menit)`
  );
  console.log("====================================");
}

soal1(dataDiri);
console.log();
soal2(dataDiri);
