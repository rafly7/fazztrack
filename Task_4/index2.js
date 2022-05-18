/// Komen salah satu potongan code dibawah ini untuk menjalankannya

/// First step
for (let i = 20; i > 14; i--) {
  console.log(i)
}

// /// Second step
for (let i = 20; i >= 15; i--) {
  console.log(i)
}

/// Third step
for (let i = 20; i >= 15; --i) {
  console.log(i)
}

/// Fourth step 
function countRecursive(number) {
  if (number < 15) {
    return
  }
  console.log(number)
  countRecursive(number-1)
}
countRecursive(20)

/// Fifth step
let x = 20
while (x > 14) {
  console.log(x)
  x--
}

/// Sixth step
let z = 20
while (true) {
  if (z < 15) {
    break
  }
  console.log(z)
  z--
}

/// Seventh step
let k = 20
for (;;) {
  if (k < 15) {
    break
  }
  console.log(k)
  k--
}