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
        const addBook = document.querySelector(".add-book")

        card.classList.add("card");
        card.textContent = `Title: ${book.title}; Author: ${book.author};
         Pages: ${book.pages}; Read: ${book.read}`;
        gridContainer.insertBefore(card, addBook);
    })
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read");
addBookToLibrary("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 223, "read");
addBookToLibrary("Carrie", "Stephen King", 253, "read");
addBookToLibrary("A Court of Thorns and Roses", "Sarah J. Maas", 429, "read");
addBookToLibrary("Fourth Wing", "Rebecca Yaros", 528, "read");
addBookToLibrary("Sherlock Holmes: The Sign of The Four", "Sir Arthur Conan Doyle", 283, "read");
addBookToLibrary("Dune", "Frank Herbert", 412, "not read");
addBookToLibrary("The Count of Monte Cristo", "Alexandre Dumas", 1312, "read");
addBookToLibrary("Romeo and Juliet", "William Shakespeare", 141, "read");


displayBooks();

