const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const $form = document.querySelector('#form')
const $buttonMailTo = document.querySelector('#EmailJE')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailTo.setAttribute('href',`mailto:erick03juan@gmail.com?subject=Nombre: ${form.get('name')}  Correo: ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailTo.click()
}