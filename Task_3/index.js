/// Comment bellow one of code

/// First step
function isEven(number) {
  const result = number % 2 === 0
  if (result) {
    return 'Bilangan Genap'
  } else {
    return 'Bilangan Ganjil'
  }
}

/// Second step
function isEven(number) {
  const result = number % 2 === 0
  if (result) {
    return 'Bilangan Genap'
  }
  return 'Bilangan Ganjil'
}

/// Third step
const isEven = (number) => number % 2 === 0 ? 'Bilangan Genap' : 'Bilangan Ganjil'

const cekNumber = isEven(1)
// console.log(cekNumber)