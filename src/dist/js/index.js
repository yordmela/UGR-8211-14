document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    burgerButton.addEventListener('click', function () {
        navLinks.classList.toggle('hidden');
    });
});
