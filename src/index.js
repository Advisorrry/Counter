import './style.css'
const counter = document.getElementById('counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const warnBtn = document.querySelector('#warn')
const themeBtn = document.querySelector('#theme')

let state = 0

const render = () => {
    counter.textContent = state.toString()
}

addBtn.addEventListener('click', () => {
    state++
    render()
})

subBtn.addEventListener('click', () => {
    state--
    render()
})
asyncBtn.addEventListener('click', () => {
    asyncBtn.setAttribute('disabled', 'disabled')
    setTimeout(() => {
        state++
        render()        
        asyncBtn.removeAttribute('disabled', 'disabled')
    }, 1000)
    
})


warnBtn.addEventListener('click', () => {
    state = 0
    render()
})

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})


render()

