document.getElementById('FirstGame').onclick = function FirstGame() {
    let min = 1
    let max = 100
    
    let RandomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    let UserNumber = parseInt(prompt('Угадайте число от 1 до 100'))
    
    while (UserNumber !== RandomNumber) {
        if (UserNumber > RandomNumber) {
            UserNumber = parseInt(prompt('Это слишком много, попробуйте еще'))
        } else if (UserNumber < RandomNumber) {
            UserNumber = parseInt(prompt('Этого слишком мало, попробуйте еще'))
        }
    }
    
    alert('Правильно! Загадано число ' + RandomNumber)
}