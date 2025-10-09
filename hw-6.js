//1
const numb = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < numb.length; i++) {
  console.log(numb[i])
  if(numb[i] == 10)break
}

//2
const mass1 = [1, 5, 4, 10, 0, 3]
const index = mass1.indexOf(4)
console.log(index)

//3
const mass2 = [1, 3, 5, 10, 20]
let joinedMass2 = mass2.join(" ")
console.log(joinedMass2)

//4
const mainMass = []

for(i = 0; i < 3; i++) {
    let secondMass = []
    for(let j = 0; j < 3; j++) {
        secondMass.push(1)
    }
    mainMass.push(secondMass)
}

console.log(mainMass)

//5
const pushMass = [1, 1, 1]
pushMass.push(2, 2, 2)
console.log(pushMass)

//6
const sortMass = [9, 8, 7, 'a', 6, 5]
sortMass.sort().pop()
console.log(sortMass)

//7
const hiddenNumb = [9, 8, 7, 6, 5];
let playerNumb;

do {
    playerNumb = parseInt(prompt('Угадайте число от 1 до 10'))
    
    if (hiddenNumb.includes(playerNumb)) {
        alert('Угадал!')
    } else {
        console.log('Попробуйте еще раз')
    }
} while (!hiddenNumb.includes(playerNumb))

//8
let string = 'abcdef'
const strMass = string.split("").sort().reverse().join("")
console.log(strMass)

//9
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const addedMass = [...arr1, ...arr2]
console.log(addedMass)

//10
const sumMass = [1, 3, 6, 2, 7, 9, 10]
for (let i = 0; i < sumMass.length; i++) {
    if(i == sumMass.length - 1) {
        console.log(`Последнее число ${sumMass[sumMass.length -1]}`)
    } else {
        console.log(`Сумма ${i + 1} и ${i + 2} числа равна ${sumMass[i] + sumMass[i + 1]}`)
    }
}

//11
const dublMass = [1, 2, 4, 6, 88, 123]
const newDubl = dublMass.map(dublMass => dublMass ** 2)
console.log(newDubl)

//12
const textMass = ['jgkjf', 'jkdjk', 'jkjfgkd', 'jdkgjkf', 'fj', 'qiqqkqkqqqqqn'];
const lengthText = textMass.map(text => text.length);
console.log(lengthText);

//13
const fullNumbers = [1, -4, 6 , 89, -100, -3]
const filteredFullNumb = fullNumbers.filter(numb => numb < 0)
console.log (filteredFullNumb)

//14
function generator(){
    return (Math.floor(Math.random() * 10) +1)
}
const rundomMass = []
for(let i = 0; i < 10; i++) {
    rundomMass[i] = generator()
}
console.log(rundomMass)
const filteredRundom = rundomMass.filter(numb => numb % 2 === 0)
console.log(filteredRundom)

//15
const newRund = []
for(let i = 0; i < 6; i++) {
    newRund[i] = generator()
}
let midl = newRund.reduce((a, b) => a + b) / newRund.length;
console.log(newRund)
console.log(midl)