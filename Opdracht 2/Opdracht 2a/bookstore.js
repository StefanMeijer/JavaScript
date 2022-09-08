//This class is a bookstore
class Bookstore {
    constructor(name) {
        this.name = name;
        this.member = [];
        this.book = [];
        this.rent = [];
    }

    //Getter & Setter
    addMember(member) {
        this.member.push(member);
    }
    getMember() {
        return this.member;
    }

    addBook(book) {
        this.book.push(book);
    }
    getBook() {
        return this.book;
    }

    addRent(rent) {
        this.rent.push(rent);
    }
    getRent() {
        return this.rent;
    }
}