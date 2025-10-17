//1
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age))

//2
function isPositive(num) {
    return num > 0
}
function isMale(a) {
    return a.gender === 'male'
}
function filter(arry, callback) {
    return arry.filter(callback)
}

console.log(filter([3, -4, 1, 9], isPositive))

people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale))

//3
const timer = (deadline) => {
    
    if(isNaN(+deadline)) {
        console.log('Число введено неверно')
        return
    }

    let time = deadline
    let interval = setInterval(() => {
        time -= 3
        console.log(`Осталось ${time} секунд`)
        console.log(`Текущая дата ${Date()}`)
    }, 3000)

    setTimeout(() => {
        clearInterval(interval)
        console.log('Время истекло')
    }, deadline * 1000)   
}
timer(30)

//4
function delayForSecond(callback) {
   setTimeout(() => {
    callback()
   }, 1000)
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

//5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'))