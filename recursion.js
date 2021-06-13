'use strict'
function print(n) {
  let stair = ''
  const count = Math.abs(n)
  for (let i = 1; i <= count; i++)
    stair += '_'.repeat(count - i) + '#'.repeat(i) + '\n'
  let t = n > 0 ? stair : stair.split('\n').reverse().join('\n')
  return t
}
console.log(print(9))
console.log(print(-9))