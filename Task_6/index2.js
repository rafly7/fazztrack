function kataSandi(kata) {
  const arr = []
  let initNum = 2
  for (let k = 0; k < kata.length; k+=2) {
    if (initNum === 2) {
      arr.push(`${kata[initNum-2]}${kata[initNum-1]}`)
    } else {
      if (kata[initNum-1] !== undefined) {
        arr.push(`${kata[initNum-2]}${kata[initNum-1]}`)
      } else {
        arr.push(`${kata[initNum-2]}`)
      }
    }
    initNum+=2
  }
  if (kata.length % 2 === 0) {
    return arr.join('-')
  } else {
    return `${arr.join('-')}${kata[kata.length-1]}`
  }
}

console.log(kataSandi('Jakartu'))