'use strict'
function robotSteps() {
  let sum = [0, 0]
  if (arguments.length != 0) {
    for (let i = 0; i < arguments.length; i++) {
      switch (i % 4) {
        case 0: sum[1] += arguments[i]
          break
        case 1: sum[0] += arguments[i]
          break
        case 2: sum[1] -= arguments[i]
          break
        case 3: sum[0] -= arguments[i]
          break
      }
    }
    console.log(sum)
  }
  else {
    console.log(sum)
  }
}

robotSteps(20, 30, 10, 40)
robotSteps(30, 40, 10)
robotSteps(10, -10)
robotSteps()