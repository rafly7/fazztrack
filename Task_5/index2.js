/// Komen salah satu potongan code dibawah ini untuk menjalankannya

/// First step
function cekOngkir(distance) {
  const initOngkir = 5000
  const initDistance = 2
  if (distance <= initDistance) {
    return initOngkir
  }
  return initOngkir + ((distance - initDistance) * 3000)
}

/// Second step
const cekOngkir = (distance) => {
  const initOngkir = 5000
  const initDistance = 2
  return distance <= initDistance ? initOngkir : initOngkir + ((distance - initDistance) * 3000)
}
console.log(cekOngkir(5))