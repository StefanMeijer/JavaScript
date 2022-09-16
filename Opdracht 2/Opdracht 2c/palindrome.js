/**
 * Class to check if a string is a palindrome
 * to test, write in console: const palindrome = new Palindrome('lepel');
 */
class Palindrome {
    constructor(text) {
        this.text = text;

        console.log(this.isPalindrome());
    }

    /**
     * function to check if the text is a palindrome
     * @returns {string} message if the text is a palindrome or not}
     */
    isPalindrome() {
        //Make sure word is lowercase for comparison
        this.text.toLowerCase();
        let reverse = this.text.split("").reverse().join("");

        if (this.text === reverse) {
            return this.text + ' is a palindrome';
        } else {
            return this.text + ' is NOT a palindrome';
        }
    }

    setText(value) {
        this.text = value;
    }
    getText() {
        return this.text;
    }
}

const palindrome = new Palindrome('lepel');
const palindrome2 = new Palindrome('bodypump');