//1
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

document.getElementById('SecondGame').onclick = function SecondGame() {
    //2
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

    if (userAnswer === null || isNaN(userAnswer)) {
        return
    }  
    while(userAnswer !== correctAnswer){
        userAnswer = parseInt(prompt(`Неправильно, попробуй еще ${task}=`));
    }

    alert('Правильно!');
}