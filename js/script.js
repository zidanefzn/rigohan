// DOMContentLoaded digunakan agar js bisa berjalan tanpa perlu menunggu assets selesai loading
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle input');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('slide');
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            nav.classList.remove('slide');
            menuToggle.checked = false; 
        });
    });
});
