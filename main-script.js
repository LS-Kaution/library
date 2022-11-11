const form = document.querySelector('#form-section')
form.style.display = 'none'

const container = document.querySelector('#result-section')
container.style.display = 'none'

const buttonNewBook = document.querySelector('#button-new-book')
buttonNewBook.addEventListener('click', function callForm() {
    form.style.display = 'flex'     
})

const buttonSubmit = document.querySelector('#form')
buttonSubmit.addEventListener('submit', showInput)

buttonSubmit.onsubmit = (ev) => {
    ev.preventDefault();
}

function showInput(event) {
    
    let inputTitle = document.querySelector('#title').value;
    let inputAuthor = document.querySelector('#author').value;
    let inputPages = document.querySelector('#pages').value;
    let inputCheck = document.querySelector('#check').checked;

    let newBook = new Data(inputTitle, inputAuthor, inputPages, inputCheck)
}

function Data(title, author, pages, check) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.check = check;

    const titleContainer = document.querySelector('#title-container')
    titleContainer.textContent = this.title

    const authorContainer = document.querySelector('#author-container')
    authorContainer.textContent = this.author

    const pagesContainer = document.querySelector('#pages-container')
    pagesContainer.textContent = this.pages 

    const buttonRead = document.querySelector('#button-read')
      
    if(this.check === true){
        buttonRead.textContent = 'Read'
    }

    else{
        buttonRead.textContent = 'Unread'
        buttonRead.classList.toggle('unread')
    }

    form.style.display = 'none'
    container.style.display = 'flex'
}

const buttonRead = document.querySelector('#button-read')
buttonRead.addEventListener('click', function() {
    buttonRead.classList.toggle('unread')
    
    if(buttonRead.textContent === 'Read') {
        buttonRead.textContent = 'Unread'
    }
    
    else {
        buttonRead.textContent = 'Read'
    }
})

const buttonRemove = document.querySelector('#button-remove')
buttonRemove.addEventListener('click', function(){
    container.remove()
})