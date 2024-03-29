let allContainerCart = document.querySelector('.products-slick');
let containerBuyCart = document.querySelector('.product-widget'); 

let buyThings = [];
//Funciones 

loadEventListeners();

function loadEventListeners(){

    allContainerCart.addEventListener('click', addProduct);
}

function addProduct(e){
    e.preventDefault();
    if(e.target.classList.contains('add-to-cart-btn')){
        
        //console.log(e.target.closest('.product'));
        const product = e.target.closest('.product');
        readTheContent(product);
    }

}

function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('div h3 a').textContent,
        descrip: product.querySelector('div div h5').textContent,
        price: product.querySelector('div h4').textContent,
        amount:1
    }
    buyThings =[...buyThings, infoProduct];
    loadHtml();
    //console.log(infoProduct);
}

function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image,title,descrip,price,amount} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
        <div class="cart-item" style="display: flex; align-items: center; padding: 10px;">
        <img src="${image}" alt="" style="width: 50%; margin-right: 10px;">
        <div class="item-content" style="display: flex; flex-direction: column;">
            <h5 style="margin: 0;">${title}</h5>
            <p style="margin: 0;">${descrip}</p>
            <h5 class="cart-price" style="margin: 5px 0;">Precio: ${price}</h5>
            <h6 style="margin: 0;">Cantidad: ${amount}</h6>
        </div>
    </div>
            
        `;
        containerBuyCart.appendChild(row);
    });
}


function clearHtml(){
    containerBuyCart.innerHTML='';

}