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

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read");
const book2 = new Book("Harry Potter", "J. K. Rowling", 223, "read");


addBookToLibrary(book1);
addBookToLibrary(book2);

console.log(myLibrary);

