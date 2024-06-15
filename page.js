
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
    const your = document.querySelector('#your');



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

   

    const products = [
        {
            id: 1,
            name: "Fall Limited Edition Sneakers",
            price: 125.0,
            image: "images/image-product-1.jpg",
        }
    ];

    let listCards = {};

    function addToCart(key) {
        if (listCards[key] == null) {
            listCards[key] = {
                ...products[0],
                quantity: +quantityElement.textContent,
            };
        } else {
            listCards[key].quantity += +quantityElement.textContent;
        }
        reloadCart();
    }
    
    // function addToCart(key) {
    // if (listCards[key] == null) {
    //     listCards[key] = { ...products[key], quantity: 1 };
    // } else {
    //     listCards[key].quantity += 1;
    // }
   
    
    function reloadCart() {
        const cartItems = document.getElementById('cart-items');
        
        cartItems.innerHTML = ''; 
         
        let totalItems = 0;

        for (const key in listCards) {
            const item = listCards[key];
            totalItems += item.quantity;

            const totalPrice = (item.quantity * item.price).toFixed(2);

            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <div class="flex m-3 gap-10 flex-col">
                    <div class="flex  gap-4 items-center">
                        <img src="${item.image}" alt="${item.name}" class="rounded-md w-12 h-12">
                        <div class="flex gap-3">
                            <div class="text-sm text-gray-400">
                                <p class="">${item.name}</p>
                                <div class="flex">
                                    <p class="flex">${item.quantity} x $${item.price}</p>
                                    <span class="font-bold text-black mx-3">$${totalPrice}</span>
                                </div>
                                
                            </div>
                            
                            <i class="fa-solid fa-trash-can cursor-pointer text-gray-400" id="delete"></i>
                        </div>
                    </div>

                    <div class="bg-orange-500 py-3 px-14 rounded-xl text-center cursor-pointer hover:opacity-45 duration-150" id="" >
                        <i class="fa-solid fa-cart-shopping"></i> <span class="font-bold px-3 ">Checkout</span>
                    </div>
                </div>
                
                
            `;
            cartItems.appendChild(itemElement);
        }

        document.getElementById('cart-count').innerText = totalItems;
    }

    document.getElementById('add-to-cart').addEventListener('click', () => {
        addToCart();
        your.innerHTML = '';
    });
})


// const deleteOption = document.querySelector('#delete')
// deleteOption.addEventListener('click', () => {
   
//     if (listCards[key].quantity > 1) {
//         listCards[key].quantity -= 1;
//     } else {
//         delete listCards[key];
//     }
//     reloadCart()
// });

// const deleteButton = document.querySelector('#delete'); // This would typically be inside a loop or a specific context
// deleteButton.addEventListener('click', () => {
//     const key = deleteButton.getAttribute('data-key');
//     deleteItem(key);
// });
