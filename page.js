
document.addEventListener('DOMContentLoaded', function () {
    const close_page = document.querySelector('#close_page');
    const menu = document.querySelector('#menu');
    const close = document.querySelector('#close');
    const cart = document.querySelector('#cart');
    const cart_page = document.querySelector('#cart_page');
    const cart_close = document.querySelector('#cart_close');
    const close_picture = document.querySelector('#close_picture');
    const picture = document.querySelector('#picture');
    const big_image = document.querySelector('#big_image');



    menu.addEventListener('click', () => {
        close_page.classList.add('block');        
        close_page.classList.remove('hidden');        
    });

    close.addEventListener('click', () => {
        close_page.classList.remove('block');        
        close_page.classList.add('hidden');        
    });

    cart.addEventListener('click', () => {
        cart_page.classList.remove('hidden');        
        cart_page.classList.add('block');        
    });

    
    cart_close.addEventListener('click', () => {
        cart_page.classList.remove('block');        
        cart_page.classList.add('hidden');        
    });

    close_picture.addEventListener('click', () => {
        picture.classList.remove('block');        
        picture.classList.add('hidden');        
    });

    big_image.addEventListener('click', () => {
        picture.classList.add('block');        
        picture.classList.remove('hidden');        
    });

})