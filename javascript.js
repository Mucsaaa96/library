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

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read");

console.log(book1);