const colors = ['##b5d4f1', '#bbaacc', '#f8fccc', '#fffefe', '#fde9f8', '#daf1b5', '#dab084', '#fa9292', '#d9ecbb', '#e5f1fc'];
const backBtn = document.querySelector('#backBtn');

const body = document.querySelector('.top');
const btn1 = document.querySelector('#btn');
function changeBgc() {
    const colorOne = colors[Math.floor(Math.random() * colors.length)];
    const colorTwo = colors[Math.floor(Math.random() * colors.length)];
    body.style.background = `linear-gradient(to top,${colorOne}, ${colorTwo})`;
}
backBtn.addEventListener('click', changeBgc);
