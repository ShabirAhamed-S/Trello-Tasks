function encoding(word) {
  word = [...word]
  const len = word.length
  const size = Math.ceil(Math.sqrt(len))
  let array = Array.from({ length: size }, () => new Array(size).fill(' '))

  let i = 0
  let cal = 4 * (size - 2 * i - 1)
  while (cal > 0) {
    for (let j = 0; j < cal && word.length; j++) {
      let a = j % 4, x, y
      switch (a) {
        case 0:
          x = i;
          y = j / 4 + i
          break;
        case 1:
          x = ((j - 1) / 4) + i
          y = (size - 1) - i
          break;
        case 2:
          x = (size - 1) - i
          y = (size - 1) - ((j - 2) / 4 + i)
          break;
        case 3:
          x = (size - 1) - ((j - 3) / 4) + i
          y = i
          break
      }
      array[x][y] = word.shift()
    }
    i++
    cal = 4 * (size - 2 * i - 1) || 1
  }
  console.log(array.flat().join(''))
}

encoding("Mubashir Hassan")
encoding("Matt MacPherson")
encoding("edabit is amazing")