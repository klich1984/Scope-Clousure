// Toda funcion tiene su propio alcance.

function greeting() {
  let useName = 'Carlos'
  console.log(useName)

  if (useName === 'Carlos') {
    console.log(`Hola ${useName}!`)
  }
}

greeting()
console.log(useName)
