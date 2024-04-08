let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.header__body__ul');
let menuUl = document.querySelector('header__body__item');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})

menu.querySelectorAll('.header__body__link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    })
})