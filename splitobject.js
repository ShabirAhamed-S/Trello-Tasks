'use strict'            
function splitobject(arrayobject) {
  let array = [], k = 0
  for (const i of arrayobject) {
    for (const j of i.quantity) {
      array[k] = {
        name: i.name, quantity: 1
      }
      k++
    }
  }
  return array;
}
console.log(splitobject([
  { name: "banana", quantity: 3 }, { name: "fruits", quantity: 2 }, { name: "grapes", quantity: 1 }
]));
