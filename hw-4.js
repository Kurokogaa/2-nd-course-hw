//1
let i = 0
do {
    console.log('Привет')
    i++
} while(i < 2)

//2
for (i = 1; i <= 5; i++) {
    console.log(i)
}

//3
i = 7
while (i < 23) {
    console.log(i)
    i++
}

//4
let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}
for (let key in obj) {
   console.log(`${key} - ${obj[key]}`);
}

//5
let n = 1000
let num = 0
do {
    n = n / 2
    num++
} while(n > 50)
console.log('Количество итераций равно', num)