//1 Угадай число
document.getElementById('FirstGame').onclick = function FirstGame() {
    let min = 1
    let max = 100
    
    let RandomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    let UserNumber = parseInt(prompt('Угадайте число от 1 до 100'))
    
    if (UserNumber === null || isNaN(UserNumber)) {
        return;
    }
    
    while (UserNumber !== RandomNumber) {
        if (UserNumber > RandomNumber) {
            UserNumber = parseInt(prompt('Это слишком много, попробуйте еще'))
        } else if (UserNumber < RandomNumber) {
            UserNumber = parseInt(prompt('Этого слишком мало, попробуйте еще'))
        }
        
        if (UserNumber === null || isNaN(UserNumber)) {
            return;
        }
    }
    
    alert('Правильно! Загадано число ' + RandomNumber)
}

//2 Простая математика
document.getElementById('SecondGame').onclick = function SecondGame() {
    const options = ['+', '-', '*', '/'];
    let randomIndex = Math.floor(Math.random() * options.length);
    let operator = options[randomIndex];
    let num1 = Math.floor(Math.random() * 20) + 1;
    let num2 = Math.floor(Math.random() * 20) + 1;

    if (operator === '/') {
        num2 = Math.floor(Math.random() * 10) + 1;
        num1 = num2 * (Math.floor(Math.random() * 10) + 1);
    }

    let correctAnswer;
    switch(operator) {
        case '+': correctAnswer = num1 + num2; break;
        case '-': correctAnswer = num1 - num2; break;
        case '*': correctAnswer = num1 * num2; break;
        case '/': correctAnswer = num1 / num2; break;
    }

    let task = `${num1} ${operator} ${num2}`;
    let userAnswer = parseInt(prompt(task + ' = '));

    while(userAnswer !== correctAnswer){
        if (userAnswer === null || isNaN(userAnswer)) {
            return
        }
        userAnswer = parseInt(prompt(`Неправильно, попробуй еще ${task}=`));
    }

    alert('Правильно!');
}

//3 Переверни текст
document.getElementById('ThirdGame').onclick = function ThirdGame() {
    let text = prompt('Введите текст')
    let textReverse = text.split('').reverse().join('')
    alert(textReverse)
}

//4 Викторина
document.getElementById('fifthGame').onclick = function fifthGame() {
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ]
    
    let score = 0;
    
    for(let i = 0; i < quiz.length; i++) {
        let input = prompt(`${quiz[i].question}\n${quiz[i].options.join('\n')}\n\nВведите номер правильного ответа:`)
        
        if (input === null) {
            alert('Викторина прервана')
            return;
        }
        
        let userAnswer = parseInt(input)
        
        if(userAnswer === quiz[i].correctAnswer) {
            score++;
            alert('Правильно!')
        } else if (!isNaN(userAnswer)) {
            alert(`Неправильно! Правильный ответ: ${quiz[i].correctAnswer}`)
        } else {
            alert('Пожалуйста, введите число!')
            i--
        }
    }
    
    let message = `Количество правильных ответов: ${score} из ${quiz.length}`
    alert(message)
    return message
}

//5 Камень ножницы бумага
document.getElementById('fourthGame').onclick = function fourth() {
    
    const user = prompt('Напишите каменть, ножницы или бумага').toLowerCase()
    const computerIndex = Math.floor(Math.random() * 3)
    const variants = ['камень', 'ножницы', 'бумага']
    const computer = variants[computerIndex]

    if(!variants.includes(user)){
        console.log('Неверно, попробуйте еще раз')
        return fourth()
    }

    alert(`Ваш выбор ${user}, а выбор комьютера ${computer}`)
    
    if(user === computer){
        alert('Ничья')
    } else if(
        (user == 'камень' && computer == 'ножницы') ||
        (user == 'ножницы' && computer == 'бумага') ||
        (user == 'бумага' && computer == 'камень')) {
            alert('Вы выиграли!')
        } else {
            alert('Компьютер выиграл')
        }
}

//6 Генератор случайных чисел
document.getElementById('sixth-game').onclick = function sixth() {
    const colors = ['red', 'blue', 'white', 'green', 'pink', 'yellow', 'purple', 'orange'];
    
    const colorIndex = Math.floor(Math.random() * colors.length);
    const finishColor = colors[colorIndex];

    const bcg = document.querySelector('.mini-games');
    
    bcg.style.backgroundImage = 'none'
    bcg.style.backgroundColor = finishColor;
}