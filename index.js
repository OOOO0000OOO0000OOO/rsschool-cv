hljs.highlightAll();

const button = document.querySelector('.contact');
const list = button.nextElementSibling;

button.addEventListener('click', () => {
  button.classList.toggle('active');
  list.style.maxHeight = (list.style.maxHeight) ? null : '150px';
});