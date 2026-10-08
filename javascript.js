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

//const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read");
//const book2 = new Book("Harry Potter", "J. K. Rowling", 223, "read");


addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read");
addBookToLibrary("Harry Potter", "J. K. Rowling", 223, "read");

console.log(myLibrary);

