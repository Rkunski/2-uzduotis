var arr = [100, 21, 10.211, 300, 41, 21, -41, 0, 1, 27]

// for (var sum =0, i = 0; i < arr.length; i++) {
//   sum += arr[i];


var sum = 0;

arr.forEach(number => {
  sum += number;
  dev = (sum / arr.length);
});
  console.log("Skaičių suma :" + sum.toFixed(2));
  console.log("Skaičių vidurkis: " + dev.toFixed(2));

for (var max = arr[0], i = 1; i < arr.length; i++) {
  if (arr[i]>max) {
    console.log("Didžiausias skaičius : " + (max=arr[i]));
  }
}
for (var i=0; i<1; i++) {
    arr.sort();
}
console.log("Mažiausias skaičius : " + arr[0]);
