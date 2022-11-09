const bdark = document.getElementById('bdark')
const body = document.querySelector('body')
const header = document.querySelector('header')
const main = document.querySelector('main')

bdark.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
    header.classList.toggle('dark-mode')
    main.classList.toggle('dark-mode')
})