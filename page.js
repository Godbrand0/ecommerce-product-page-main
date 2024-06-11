
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
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const image3 = document.getElementById('image3');
    const image4 = document.getElementById('image4');



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

    // Function to change the big image source
    function changeBigImage(newSrc) {
        const bigImage = document.getElementById('big_image');
        bigImage.src = newSrc.replace('-thumbnail', '');
    }

    // Adding event listeners to each thumbnail
    image1.addEventListener('click', function() {
        changeBigImage(this.src);
        image1.classList.add('border-orange-600', 'border-4');
        image2.classList.remove('border-orange-600', 'border-4');
        image3.classList.remove('border-orange-600', 'border-4');
        image4.classList.remove('border-orange-600', 'border-4');
    });

    image2.addEventListener('click', function() {
        changeBigImage(this.src);
        image2.classList.add('border-orange-600', 'border-4');
        image1.classList.remove('border-orange-600', 'border-4');
        image3.classList.remove('border-orange-600', 'border-4');
        image4.classList.remove('border-orange-600', 'border-4');
    });

    image3.addEventListener('click', function() {
        changeBigImage(this.src);
        image3.classList.add('border-orange-600', 'border-4');
        image2.classList.remove('border-orange-600', 'border-4');
        image1.classList.remove('border-orange-600', 'border-4');
        image4.classList.remove('border-orange-600', 'border-4');
    });

    image4.addEventListener('click', function() {
        changeBigImage(this.src);
        image4.classList.add('border-orange-600', 'border-4');
        image2.classList.remove('border-orange-600', 'border-4');
        image3.classList.remove('border-orange-600', 'border-4');
        image1.classList.remove('border-orange-600', 'border-4');
    });

    let quantity = 1;
    const quantityElement = document.getElementById('product-quantity');
    
    document.getElementById('decrease-quantity').addEventListener('click', () => {
        if (quantity > 1) {
            quantity -= 1;
            quantityElement.textContent = quantity;
        }
    });

    document.getElementById('increase-quantity').addEventListener('click', () => {
        quantity += 1;
        quantityElement.textContent = quantity;
    });

    const products = {
        1: { name: "Fall Limited Edition Sneakers", price: 125.00, image: "images/image-product-1.jpg" }
    };

    let listCards = {};

    function addToCart(key) {
        if (listCards[key] == null) {
            listCards[key] = { ...products[key], quantity: 1 };
        } else {
            listCards[key].quantity += 1;
        }
        reloadCart();
    }
})