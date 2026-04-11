// TEMA OSCURO
const themeBtn = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun');
const moonIcon = document.getElementById('moon');

function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        localStorage.setItem('theme', 'light');
    }
}

// Inicializar tema
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    setTheme(currentTheme);
});

// ANIMACIONES AL HACER SCROLL
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
// Disparar una vez al cargar
reveal();