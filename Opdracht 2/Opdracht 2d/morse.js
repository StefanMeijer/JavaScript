/**
 * Class to morse text
 * to test, write in console: const morse = new Morse('Hello World');
 */
class Morse {
    constructor(text) {
        this.text = text;
        this.morsedText = '';
        //List of morse codes
        this.morsecodes = {
            'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..',
            'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
            'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
            'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
            'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
            'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
            'y': '-.--', 'z': '--..', ' ': '/',
            '1': '.----', '2': '..---', '3': '...--', '4': '....-',
            '5': '.....', '6': '-....', '7': '--...', '8': '---..',
            '9': '----.', '0': '-----'
        }

        console.log(this.textToMorse());
    }

    /**
     * function to convert text to morse
     * @returns {string} morse code
     */
    textToMorse() {
        let textToMorse = this.getText().toLowerCase().split('');
        
        for (let i = 0; i < textToMorse.length; i++) {
            this.morsedText += this.morsecodes[textToMorse[i]] + ' ';
        }

        return this.morsedText;
    }

    //Getters and setters
    setText(value) {
        this.text = value;
    }
    getText() {
        return this.text;
    }

    getMorsedText() {
        return this.morsedText;
    }
}

const morse = new Morse('Hello World');
