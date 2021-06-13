function isProductSum() {
  let sum = 0
  if (arguments.length > 1) {
    for (const i of arguments)
      sum += i
    productFun = (...arg) => {
      let pro = 1
      let product = arg.toString()
      for (const i of product)
        pro *= i
      return pro
    }
    console.log(productFun(sum))
  }
  else if (arguments.length == 1) {
    sum = arguments[0]
    if (sum.length == 1) {
      return sum
    }
    else {
      console.log(productFun(sum))
    }
  }
  else {
    console.log("Input is required")
  }
}
isProductSum(1, 31)
isProductSum(60)
isProductSum(1, 3, 7, 9, 0)
isProductSum()