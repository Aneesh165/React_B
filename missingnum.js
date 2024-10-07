function missingNumber() {
  let number = [3, 1, 6, 8];
  let Max = Math.max(...number);
  let Num = 1;

  let output = [];

  for (i = Num; i <= Max; i++) {
    if (!number.includes(i)) {
      output.push(i);
    }
  }
  console.log(output);
}

missingNumber();
