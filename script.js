let bar = document.getElementById('bar');
let nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        console.log("click")
    })
}