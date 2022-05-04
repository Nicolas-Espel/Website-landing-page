const hamburger = document.getElementById('hamburger');
const overlay = document.querySelector('.overlay');
const overlayMenu = document.querySelector('.overlay-menu');
const toggle = document.querySelector('.burger-toggle');

hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('.open')) {
        hamburger.classList.remove('.open');
        hamburger.classList.remove('hamburger-toggle');
        overlay.style.display = 'none';
        overlayMenu.style.display = 'none';
    } else {
        hamburger.classList.add('.open');
        hamburger.classList.add('hamburger-toggle');
        overlay.style.display = 'block';
        overlayMenu.style.display = 'block'

    };
});
