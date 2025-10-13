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
console.log(secondStr(fMass, str)) 

//3 
let number = 32.58884
console.log(Math.floor(number))
console.log(Math.ceil(number))
console.log(Math.round(number))

//4 
fMass = [52, 53, 49, 77, 21, 32]
console.log(Math.min(...fMass))
console.log(Math.max(...fMass))

//5 
let randomNumber = Math.floor(Math.random() * 10 + 1)
console.log(randomNumber)

//6 
function massFunction(userNumber) {
    let massLength = Math.round(userNumber / 2)
    let Mass = []
    for (let i = 0; i < massLength; i++) {
        Mass[i] = Math.round(Math.random() * userNumber)
    }
    return Mass
}

let result = massFunction(10)
console.log(result)

//7 
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

console.log(rand(1, 10))

//8 
let now = new Date()
console.log(now)

//9 
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73)
console.log(currentDate)

//10 
function formatDateRussian(date) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ]
    
    const daysOfWeek = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ]
    
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    const dayOfWeek = daysOfWeek[date.getDay()]
    
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    
    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`
}
console.log(formatDateRussian(new Date()))