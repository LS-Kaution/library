

const form = document.querySelector('#form-section')
form.style.display = 'none'




const buttonNewBook = document.querySelector('#button-new-book')
buttonNewBook.addEventListener('click', function callForm() {
    form.style.display = 'flex'    
})


const buttonSubmit = document.querySelector('#button-submit')
buttonSubmit.addEventListener('click', function showInput() {
    let inputTitle = document.querySelector('#title').value;
    let inputAuthor = document.querySelector('#author').value;
    let inputPages = document.querySelector('#pages').value;
    let inputCheck = document.querySelector('#check').checked;

    alert(inputTitle)
    alert(inputAuthor)
    alert(inputPages)
    alert(inputCheck)

    form.style.display = 'none'
})


let Data = function xd(title, author, pages, check) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.check = check;
}


let data1 = new Data('xd', 'dx', '123')
console.log(data1) 