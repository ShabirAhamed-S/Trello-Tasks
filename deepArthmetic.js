'use strict'
function deepArthmetic(array) {
  let result = 0
  let str = array.toString()
  str=str.match(/-?\d+/g)
  if (str != null) {
    for (let i of str) {
      result += parseInt(i)
    }
    console.log(result)
  }
  else
    console.log(0)
}
/*
let arr=["1", "five", "2wenty", "thr33",["1X2", "t3n"],["1024", "5", "64"]]
console.log(('shabi3 4 4 4 4').match(/\d+/g))      // Print number in an array string
console.log(arr.flat())                            // Print array elements in single square bracket '[]'
console.log(arr.flat().join(','))                  // Print array in single line without '[]'
*/
deepArthmetic(["1", "five", "2wenty", "thr33"])
deepArthmetic([["1X2", "t3n"], ["1024", "5", "64"]])
deepArthmetic([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"], "-1s0"]])