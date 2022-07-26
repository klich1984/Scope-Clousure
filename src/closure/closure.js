function greeting() {
  let username = 'Klich'

  function displayUserName() {
    return `Hello ${username}`
  }
  return displayUserName
}

const g = greeting()

console.log(g) // f displayUsernName()
console.log(g()) // Hello klich
