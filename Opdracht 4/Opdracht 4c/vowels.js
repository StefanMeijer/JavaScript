var inputText = document.getElementById('inputText');

/**
 * Function to remove vowels from string
 */
inputText.addEventListener('input', function (e) {
    let str = inputText.value;
    const noVowels = str.replace(/[aeiou]/gi, ''); ///[aeiou]/gi = regex

    document.getElementById('userInput').innerHTML = noVowels;
});