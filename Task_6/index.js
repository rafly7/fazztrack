function fazzTrack(num) {
  for (let x = 1; x <= num; x++) {
    console.log(x)
    if (x % 3 === 0 && x % 5 === 0) {
      console.log('fazztrack')
    } else if (x % 5 === 0) {
      console.log('track')
    } else if (x % 3 === 0) {
      console.log('fazz')
    }
  }
}

fazzTrack(15)