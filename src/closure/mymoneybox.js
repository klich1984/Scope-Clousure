// Sin Closure
// function moneyBox(coins) {
// 	let saveCoins = 0
//   saveCoins += coins
//   console.log(`MoneyBox is: $${saveCoins}`)
// }

// moneyBox(5)
// moneyBox(5)

// Con closure
function moneyBox() {
  let saveCoins = 0

  function countCoins(coins) {
    saveCoins += coins
    console.log(`MoneyBox is: $${saveCoins}`)
  }
  return countCoins
}

const myMoneyBox = moneyBox()

myMoneyBox(5)
myMoneyBox(5)
myMoneyBox(15)

const moneyBoxErica = moneyBox()

moneyBoxErica(30)
moneyBoxErica(30)
moneyBoxErica(30)

myMoneyBox(15)
