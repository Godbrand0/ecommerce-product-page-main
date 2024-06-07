
document.addEventListener('DOMContentLoaded', function () {
    const close_page = document.querySelector('#close_page');
    const menu = document.querySelector('#menu');
    const close = document.querySelector('#close');


    menu.addEventListener('click', () => {
        close_page.classList.add('block');        
        close_page.classList.remove('hidden');        
    });

    close.addEventListener('click', () => {
        close_page.classList.remove('block');        
        close_page.classList.add('hidden');        
    });

})