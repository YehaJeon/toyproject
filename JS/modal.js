const btn = document.querySelector('#btn');
const btnFlex = document.querySelector('.btnFlex');
const textDiv1 = document.querySelector('#textDiv1');
const textDiv2 = document.querySelector('#textDiv2');
const word = document.querySelector('#word');
const title = document.querySelector('#title');
const titleDiv = document.querySelector('.titleDiv');

btn.addEventListener('click', () => {
    console.log(todaysQuote);
    localStorage.setItem('wordDive', textDiv1);
    textPush();
    btnFlex.remove();
    titleDiv.remove();
});

function textPush() {
    textDiv2.classList.remove('hidden');
    word.innerText = todaysQuote.text;
    title.innerText = todaysQuote.title;
}
