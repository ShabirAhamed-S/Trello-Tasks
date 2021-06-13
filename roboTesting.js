'use strict'
class TestClass {

  constructor()
  {
    console.log('Hii Roboo')
  }

  binaryClock(time) {
    let binaryTime = [], length = [2, 4, 0, 3, 4, 0, 3, 4], result = [];
    time.split('').forEach((digit, index) => {
        if (digit != ':') {
            binaryTime.push((+digit).toString(2).padStart(length[index], 0));
        }
    })
    
    binaryTime = binaryTime.map(val => val.padStart(4, " "))
    for (let i = 0; i < 4; i++) {
        result.push(binaryTime.map(val => val[i]))
    }
    //console.log(result)
    result = result.map(row => row.reduce((pas, cur) => cur != " " ? (pas + cur) : (pas)))
    return (result)
}

  robotSteps() {
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
      return (sum)
    }
    else {
      return (sum)
    }
  }
  
  deepArthmetic(array) {
    let result = 0
    let str = array.toString()
    str=str.match(/-?\d+/g)
    if (str != null) {
      for (let i of str) {
        result += parseInt(i)
      }
      return (result)
    }
    else
      return (0)
  }

  encoding(word) {
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
    return (array.flat().join(''))
  }

  iccMinusFib(n) {
    if (n >= 9) {
      let x = 8, y = 13, a = 8, b = 31, fib1 = 0, fib2 = 0
      const t = n - 8
      for (let i = 1; i <= t; i++) {
        fib1 = x + y
        x = y
        y = fib1
      }
      for (let i = 1; i <= t; i++) {
        fib2 = a + b
        a = b;
        b = parseInt(fib2.toString().split('').reverse().join(''))
      }
      return (fib2 - fib1)
    }
    else
      return (0)
  }

  isProductSum() {
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
      return (productFun(sum))
    }
    else if (arguments.length == 1) {
      sum = arguments[0]
      if (sum.length == 1) {
        return sum
      }
      else {
        return (productFun(sum))
      }
    }
    else {
     return ("Input is required")
    }
  }

  print(n) {
    let stair = ''
    const count = Math.abs(n)
    for (let i = 1; i <= count; i++)
      stair += '_'.repeat(count - i) + '#'.repeat(i) + '\n'
    let t = n > 0 ? stair : stair.split('\n').reverse().join('\n')
    return t
  }

  callFun(time)
  {
    let t=this.binaryClock(time) 
    // console.log(t)
  }

  callBack(callback)
  {
    callback()
  }

  callAn(n)
  {
    this.print(n)
    let t= this.iccMinusFib(n)
    // console.log(t)
  }
}

// class TestChild extends TestClass {
//   constructor(name, menu, orders) {
//     this.name = name
//     this.menu = menu
//     this.orders = orders
//   }

//   addOrders(item) {
//     const out = this.menu.find(val => val.item == item)
//     if (out) {
//       this.orders.push(item)
//       return "item added"
//     }
//     else {
//       return "item is unavailable"
//     }
//   }

//   listOrder() {
//     return this.orders
//   }

//   fulfilledOrder() {
//     if (this.orders.length) {
//       const fulfilled = this.orders[0]
//       this.orders.shift()
//       return "The " + fulfilled + " is ready"
//     }
//     else {
//       return "All orders have been fulfilled"
//     }
//   }

//   dueAmount() {
//     const map1 = this.orders.map(val => this.menu.find(va => va.item == val))
//     const map2 = map1.reduce((s, d) => s += d.price, 0)
//     return map2
//   }

//   cheapestItem() {
//     let cheapest = this.menu.reduce((p, c) => c.price < p.price ? c : p);
//     return cheapest.item;
//   }

//   drinksOnly() {
//     return this.menu.filter((drinks) => drinks.type == 'drink').map(drinks => drinks.item);
//     // this menu was filter by type of drinks and to the map function and get the output
//   }

//   foodOnly() {
//     return this.menu.filter((food) => food.type == 'food').map(food => food.item);
//     // this menu was filter by type of food and to the map function and get the output
//   }
// }

// const MyShop = new TestChild(
//   'Coffee Shop',
//   [
//     { item: 'Noodles', type: 'food', price: 40 },
//     { item: 'Meals', type: 'food', price: 50 },
//     { item: 'Cold coffee', type: 'drink', price: 25 },
//     { item: 'Hot coffee', type: 'drink', price: 15 },
//     { item: 'Milk shake', type: 'drink', price: 30 }
//   ],
//   []
// );

// console.log(MyShop.addOrders('Ice Cream'));
// //   'This Item is currently unavailable'

// console.log(MyShop.addOrders('Hot coffee'));
// // Order added!

// console.log(MyShop.listOrder());
// // [ { item: 'Hot coffee', type: 'drinks', price: 10 } ]

// console.log(MyShop.dueAmount());
// // 10.35

// console.log(MyShop.fulfilledOrder());
// // The Hot coffee is ready!

// console.log(MyShop.fulfilledOrder());
// // All Orders have been fulfilled!

// console.log(MyShop.dueAmount());
// // 0

// console.log(MyShop.cheapestItem());
// // Hot coffee

// console.log(MyShop.drinksOnly());
// //  [ 'Cold coffee', 'Hot coffee', 'Milk shake' ]

// console.log(MyShop.foodOnly());

module.exports = TestClass