// var nameOfDog // es lo que hace JS al realizar el hoisting lo declara
console.log(nameOfDog) // Undefined
var nameOfDog = 'Enki'
console.log(nameOfDog) // Enki

// hoisting en funciones. lo que hace JS en tiempo de asignación y compilación. Puedo acceder a las funciones pero no a su valor de dog
/*
var dog

function nameOfDogFunction() {
  console.log(`Mi perro se llama ${dog}`) // Mi perro se llama undefined
}

nameOfDogFunction()
*/
nameOfDogFunction()

function nameOfDogFunction() {
  console.log(`Mi perro se llama ${dog}`) // Mi perro se llama undefined
}

var dog = 'Enlil '
