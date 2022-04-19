const hamburger = document.getElementById('hamburger');
const overlay = document.querySelector('.overlay');
const overlayMenu = document.querySelector('.overlay-menu');

hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('.open')) {
        hamburger.classList.remove('.open');
        overlay.style.display = 'none';
        overlayMenu.style.display = 'none'
    } else {
        hamburger.classList.add('.open');
        overlay.style.display = 'block';
        overlayMenu.style.display = 'block'

    };
});
