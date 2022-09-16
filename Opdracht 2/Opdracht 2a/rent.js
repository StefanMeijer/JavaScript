//This class contains information about a rent
class Rent {
    constructor(member, book, rentDate, returnDate) {
        this.member = member;
        this.book = book;
        this.rentDate = rentDate;
        this.returnDate = returnDate;
    }

    //Getter & Setter
    setMember(member) {
        this.member = member;
    }
    getMember() {
        return this.member;
    }

    setBook(book) {
        this.book = book;
    }
    getBook() {
        return this.book;
    }

    setRentDate(rentDate) {
        this.rentDate = rentDate;
    }
    getRentDate() {
        return this.rentDate;
    }
}

const huur1 = new Rent(lid1, boek1, '14-09-2022', '18-09-2022');
boekenwinkel.addRent(huur1);
