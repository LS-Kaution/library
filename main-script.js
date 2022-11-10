const form = document.querySelector('#form-section')
form.style.display = 'none'

const container = document.querySelector('#result-section')
container.style.display = 'none'


const buttonNewBook = document.querySelector('#button-new-book')
buttonNewBook.addEventListener('click', function callForm() {
    form.style.display = 'flex'     
})


const buttonSubmit = document.querySelector('#form')
buttonSubmit.addEventListener('click', function(event){
    event.preventDefault
})

buttonSubmit.addEventListener('submit', showInput)

function showInput() {
    let inputTitle = document.querySelector('#title').value;
    let inputAuthor = document.querySelector('#author').value;
    let inputPages = document.querySelector('#pages').value;
    let inputCheck = document.querySelector('#check').checked;

    let newBook = new Data(inputTitle, inputAuthor, inputPages)
}

function Data(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    const titleContainer = document.querySelector('#title-container')
    titleContainer.textContent = title

    const authorContainer = document.querySelector('#author-container')
    authorContainer.textContent = author

    const pagesContainer = document.querySelector('#pages-container')
    pagesContainer.textContent = pages 
    
    form.style.display = 'none'
    container.style.display = 'flex'
}