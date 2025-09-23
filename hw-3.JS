//1
let password = '1234'
let askpassword = prompt('Введите пароль')
if (askpassword == password)
{
    console.log('Пароль введен верно')
}
else 
{
    console.log('Пароль введен неправильно')
}

//2
let c = 2
if (c > 0 && c < 10)
{
    console.log('Верно')
}
else{
    console.log('Неверно')
}

//3
let a = 2
let b = 3
if (a > 100 || b > 100)
{
    console.log('Верно')
}
else{
    console.log('Неверно')
}

//4
a = '2';
b = '3';
let numa = Number(a)
let numb = Number(b)
console.log(numa + numb)

//5
let monthNumber = prompt("Введите номер месяца");

switch (monthNumber) {
    case '1':
      console.log('Зима');
      break;
    case '2':
      console.log('Зима');
      break;
    case '12':
      console.log('Зима');
      break;
    case '3':
      console.log('Весна');
      break;
    case '4':
      console.log('Весна');
      break;
    case '5':
      console.log('Весна');
      break;
    case '6':
      console.log('Лето');
      break;
    case '7':
      console.log('Лето');
      break;
    case '8':
      console.log('Лето');
      break;
    case '9':
      console.log('Осень');
      break;
    case '10':
      console.log('Осень');
      break;
    case '11':
      console.log('Осень');
      break;
    default:
      console.log('ввели что-то не то');
}