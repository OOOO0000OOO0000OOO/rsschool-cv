hljs.highlightAll();

const button = document.querySelector('.contact');
const list = button.nextElementSibling;

button.addEventListener('click', () => {
  button.classList.toggle('active');
  list.style.maxHeight = (list.style.maxHeight) ? null : '150px';
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navlist = document.querySelectorAll('.nav-link');

[burger, ...navlist].forEach(item => {
  item.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
  });
});
