/// Komen salah satu potongan code dibawah ini untuk menjalankannya

/// First step
function resultPrice(number) {
  if (number >= 10000) {
    return 'Mahal'
  } else if (number > 5000) {
    return 'Sedang'
  } else if (number < 5000) {
    return 'Murah'
  } else {
    return 'Tidak ada keterangan'
  }
}

/// Second step
function resultPrice(number) {
  let result
  switch (true) {
    case number >= 10000:
      result = 'Mahal'      
      break;
    case number > 5000:
      result = 'Sedang'
      break
    case number < 5000:
      result = 'Murah'
      break
    default:
      result = 'Tidak ada keterangan'
      break;
  }
  return result
}

console.log(resultPrice(5000))