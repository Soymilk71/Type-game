console.log('Hallo Persoon');


function newGame() {
    const wordsContainer = document.getElementById('words');
    wordsContainer.innerHTML = '';

    fetch('/words.txt')
        .then(response => response.text())
        .then(text => {
            const words = text.split(/\s+/);

            words.forEach(word => {
                const wordDiv = document.createElement('div');
                wordDiv.style.display = 'inline-block';

                [...word].forEach(letter => {
                    const letterSpan = document.createElement('span');
                    letterSpan.innerText = letter;
                    wordDiv.appendChild(letterSpan);
            });
            wordsContainer.appendChild(wordDiv);
        });
    });
}



window.onload = function(){
    newGame();
};