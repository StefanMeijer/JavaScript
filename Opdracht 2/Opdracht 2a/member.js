//This class cotnains innformation about a member
class Member {
    constructor(name, adres) {
        this.name = name;
        this.adres = adres;
    }

    //Getter & Setter
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }    

    setAdres(adres) {
        this.adres = adres;
    }
    getAdres() {
        return this.adres;
    }
}

const lid1 = new Member('stefan', 'erica');
boekenwinkel.addMember(lid1);
