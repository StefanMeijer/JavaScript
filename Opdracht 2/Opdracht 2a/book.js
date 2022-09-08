//This class contains information about a book
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages; 
    }
    //Getter & Setter
    setTitle(title) {
        this.title = title;
    }
    getTitle() {
        return this.title;
    }

    setAuthor(author) {
        this.author = author;
    }
    getAuthor() {
        return this.author;
    }

    setPages(pages) {
        this.pages = pages;
    }
    getPages() {
        return this.pages;
    }
}