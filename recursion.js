function factorial(num) {
  if (num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5));

let arr = [];
for (let i = 0; i < 100; ++i) {
  arr[i] = i + 1;
}
console.log(arr);
