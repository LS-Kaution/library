const bdark = document.querySelector('#bdark')
const body = document.querySelector('body')
const header = document.querySelector('header')
const mainButton = document.querySelector('#button-new-book')

bdark.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
    header.classList.toggle('dark-mode')
    mainButton.classList.toggle('dark-mode')
})