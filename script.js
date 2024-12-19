document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menuIcon');
    const navbar = document.querySelector('.navbar');
    const logo = document.getElementById('logo');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active'); 
    });

});
 