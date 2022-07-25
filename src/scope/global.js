// Variables

var a // Declaracion de variable a

var b = 'b' // Declarando y asignando el valor de 'b'
b = 'bb' // Reasignamos el valor de b con 'bb'

var a = 'aa' // Redeclaramos la variable a

// Global Scope: Cualquier variable que se encuentran en el documento que se estancian en el objeto windows y se podran acceder desde cualquier parte del de nuestro codigo.

var fruit = 'apple' // varuable global
console.log(fruit)

function bestFruit() {
  console.log(fruit)
}

bestFruit()

// Ojo si se asigna una variable y no se declara esta pasa a ser una variable global
function countries() {
  country = 'Colombia' // asignación y nunca se declaro esta es declarada como global y se puede acceder desde fuera de este scope.
  console.log(country)
}

countries()
console.log(country)
