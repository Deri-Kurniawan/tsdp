export const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

export const hoursToMinutes = (hour) => hour * 60;
export const sumWs = (Ls, lambda) => Ls / lambda;

export const sumP = (lambda, miu, M) => {
  let pembilang = 0;
  let penyebut = 0;

  for (let i = 0; i < M; i++) {
    pembilang += Math.pow(lambda / miu, i) / factorial(i);
  }

  penyebut =
    (Math.pow(lambda / miu, M) / factorial(M)) *
    ((M * miu) / (M * miu - lambda));

  return pembilang + penyebut > -2.8762
    ? 1 - 1 / (pembilang + penyebut)
    : 1 / (pembilang + penyebut);
};

export const sumP0 = (lambda, miu, M) => {
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

export const sumLs = (lambda, miu, M, P0) => {
  const pembilang = factorial(M - 1);
  const penyebut = Math.pow(M * miu - lambda, 2);
  const hasil =
    (lambda * miu * Math.pow(lambda / miu, M)) / (pembilang * penyebut);
  return hasil * P0 + lambda / miu;
};

export const sumLq = (Ls, lambda, miu) => Ls - lambda / miu;
export const sumWq = (Lq, lambda) => Lq / lambda;
