// JS realiza la elevacion de variables y la declara como global
// pi = 3.1416
// console.log(pi) // 3.1416

'use strict'
pi = 3.1416
console.log(pi) // pi is not defined

function myFunction() {
  'use strict'
  return (pi = 3.1416) //
}

console.log(myFunction()) // pi is not defined
