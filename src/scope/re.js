// Redeclaracion y reasignacion de varibles
var firstName // Declarada y se le asigna un valor por defecto de Undefine
console.log(firstName) // Undefined
firstName = 'Carlos'
console.log(firstName) // Carlos

// Declaración, Asignación y reasignación
var lastname = 'Pepito' // Declarar y asignando
console.log(lastname) // Pepito
lastname = 'Carlos' // Reasignando
console.log(lastname) // Carlos

// Declaración, Asignación y redeclaración
var seconName = 'Hinata' // Declarar y asignar
console.log(seconName) // Hinata
var seconName = 'Erica' // Redeclarar
console.log(seconName) // Erica

// Let
let fruit = 'Apple' // Declarar y asignar
console.log(fruit) // Apple
fruit = 'Kiwi' // Reasignando
console.log(fruit) // Kiwi

// let fruit = 'Banana' // fruit has already declared. No se puede redeclarar

// const
const animal = 'Dog' // Declarando y asignando
console.log(animal) // Dog
// animal = 'Cat' // Assignment to constant variable. No se puede reasignar una variable const
// const animal = 'Snake' // no se puede redeclarar tampoco una variable const primitivas

// Depende de lo que se declare en const puede ser inmutable o no
const vehicles = []
vehicles.push('Car')
console.log(vehicles) // ['Car']
