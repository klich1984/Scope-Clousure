// Un bloque es casi toda cosa que este entre {}

function fruits() {
  if (true) {
    var fruit1 = 'apple' // Function Scope si puede ser llamada por fuera
    let fruit2 = 'Kiwi' // Block Scope del if no puede ser leida por fuera
    const fruit3 = 'Banana' // Block Scope del if no puede ser leida por fuera
    console.log(fruit2)
    console.log(fruit3)
  }
  console.log(fruit1)
  // console.log(fruit2)
  // console.log(fruit3)
}
// console.log(fruit1) // fruit1 is not defined

fruits()
