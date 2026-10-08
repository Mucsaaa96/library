const myLibrary = [];

function Book(title, author, pages, read) {
    if(!new.target) {
        throw Error("You must use 'new'!")
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID() 
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks() {
    myLibrary.forEach((book) => {
        const gridContainer = document.querySelector("#grid-container");
        const card = document.createElement("li");
        card.classList.add("card");
        card.textContent = `Title: ${book.title}, Author: ${book.author},
         Pages:${book.pages}, Read: ${book.read}`;
        gridContainer.appendChild(card);
    })
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read");
addBookToLibrary("Harry Potter", "J. K. Rowling", 223, "read");

displayBooks();

