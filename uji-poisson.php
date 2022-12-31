<?php
$data = array(
  array(27, 19, 29),
  array(24, 20, 26),
  array(26, 28, 22),
  array(19, 17, 27),
  array(29, 16, 34)
);
$mikron = array(
  array(1.7, 1.25, 1.43, 1.33, 1.35),
  array(1.6, 1.40, 1.29, 1.29, 1.27),
  array(1.7, 1.6, 1.36, 1.25, 1.26),
  array(1.9, 1.38, 1.37, 1.36, 1.23),
  array(1.9, 1.41, 1.33, 1.29, 1.30)
);
//var_dump($data);
//Hitung alpha 1
$alpha = array(0, 0, 0);
for ($a = 0; $a <= 2; $a++) {
  $jumlah = 0;
  for ($b = 0; $b <= 4; $b++) {
    $jumlah = $jumlah + $data[$b][$a];
    // $jumlah.= $data[$b][$a];
    // echo "<br>".$jumlah;
  }
  $alpha[$a] = $jumlah;
  // echo "\n".$data[$a][$b-1];
}
$jumlah = 0;
for ($a = 0; $a <= 2; $a++) {
  echo "\n" . ($alpha[$a] / 5);
  $jumlah = $jumlah + (ceil($alpha[$a] / 5));
}
$alpha1 = $jumlah / 3;
echo "\n" . ceil($alpha1);
/*
24.6
18.2
15.4
17.2
13.4
*/