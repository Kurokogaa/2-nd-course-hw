//1
function min(a, b) {
 if(a >= b) {
    return b
 }   else{
    return a
 }
}

//2
let even = (a) => {
    if(a % 2 == 0){
        return 'Число четное'
    } else{
        return 'Число нечетное'
    }
}

//3
let square = (a) => {
    let result = a ** 2
    console.log(result)
    return result
}

//4
let age = () => {
    
    let a = parseInt(prompt('Сколько вам лет?'))
    if(a < 0) {
        console.log('Вы ввели неправильное значение')
        return 'Вы ввели неправильное значение'
    } else if(a < 13) {
        console.log('Привет, друг!')
        return 'Привет, друг!'
    } else {
        console.log('Добро пожаловать!')
        return 'Добро пожаловать!'
    }
}

//5
let multiplyNumbers = (a, b) => {
    if(isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом'
    } else {
        return a * b
    }
}

//6
let cube = () => {
    
    let number = prompt('Введите число')
    if(isNaN(number)) {
        return 'Переданный параметр не является числом'
    } else {
        let result = number ** 3
        return `${number} в кубе равняется ${result}` 
    }
}

//7
function getArea() {
    return this.radius ** 2 * Math.PI
}

function getPerimeter() {
    return 2 * Math.PI * this.radius
}

const circle1 = {
    radius: 30,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const circle2 = {
    radius: 40,
    getArea: getArea,
    getPerimeter: getPerimeter,
}