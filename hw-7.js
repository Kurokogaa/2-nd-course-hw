//1
let str = 'js'
console.log(str.toUpperCase())

//2
let fMass = ['Ржаной хлеб', 'Молоко', 'Хлеб бородинский', 'Квашеный хлеб', 'хлеб на квасе']
str = 'хлеб'
function secondStr(fMass, str){
    let sortMass = fMass.filter(food => food.toLowerCase().startsWith(str.toLowerCase()))
    return sortMass
}

//3
let number = 32.58884
console.log(Math.floor(number))
console.log(Math.ceil(number))
console.log(Math.round(number))

//4
fMass =[52, 53, 49, 77, 21, 32]
console.log(Math.min(fMass))
console.log(Math.max(fMass))

//5
let randomNumber = Math.floor(Math.random() * 10 + 1)
console.log(randomNumber)

//6
let userNumber = Math.floor(randomNumber)

function massFunction(userNumber) {
    massLength = Math.round(userNumber / 2)
    let Mass = []
    for (i = 0; i < massLength; i++) {
        Mass[i] = Math.floor(Math.random() * userNumber + 1)
    }
}

//7
let min = 1
let max =10
let ъ