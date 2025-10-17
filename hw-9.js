
//1
const button = document.querySelector('.button')
const title = document.getElementById('title')

button.addEventListener('click', () => {
    if (title.style.display === 'none' || title.style.display === '') {
        title.style.display = 'block'
        button.textContent = 'Скрыть'
    } else {
        title.style.display = 'none'
        button.textContent = 'Показать'
    }
})

//2
const button2 = document.querySelector('#button-2')
const p1 = document.querySelector('.smth')

button2.addEventListener('click', () => {p1.style.color = 'blue'})

//3
const button3 = document.querySelector('#button-3')
const h3 = document.querySelector('#title-3')

button3.addEventListener('click', () => {h3.textContent = 'Привет мир!'})

//4
const p4 = document.querySelectorAll('.description')
const button4 = document.querySelector('#button-4')

button4.addEventListener('click', () => {p4.forEach(p => p.textContent = 'Измененный текст')})

//5
const p5 = document.querySelectorAll('.description')
const button5 = document.querySelector('#button-5')

button5.addEventListener('click', () => {p5.forEach(p => p.textContent = 'Новый текст')})

//6
const button6 = document.querySelector('#button-6');

button6.addEventListener('click', () => {
    const newParagraph = document.createElement('p')
    newParagraph.textContent = 'Добавленный текст'
    document.body.appendChild(newParagraph)
});


//7
const button7 = document.querySelector('#button-7')
button7.addEventListener('click', () => {
    const firstDesc = document.querySelector('.description')
    if (firstDesc) {
        firstDesc.remove()
    } else {
        button7.disabled = true
        button7.textContent = 'Элементов нет'
    }
})