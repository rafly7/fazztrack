/// Komen salah satu potongan code dibawah ini untuk menjalankannya

/// First step
for (let i = 10; i < 16; i++) {
  console.log(i)
}

/// Second step
for (let i = 10; i <= 15; i++) {
  console.log(i)
}

/// Third step
for (let i = 10; i <= 15; ++i) {
  console.log(i)
}

/// Fourt step 
function countRecursive(number) {
  if (number > 15) {
    return
  }
  console.log(number)
  countRecursive(number+1)
}
countRecursive(10)
