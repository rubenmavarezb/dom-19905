

const products = [
    {
        id:1,
        name:'producto 1',
        price: 1000,
    },
    {
        id:2,
        name:'producto 2',
        price: 2000,
    },
    {
        id:3,
        name:'producto 3',
        price: 3000,
    },
    {
        id:4,
        name:'producto 4',
        price: 4000,
    },
    {
        id:5,
        name:'producto 5',
        price: 5000,
    },
]

let cart = [];


{/* <article>

    <h5>nombre del producto</h5>
    <p>precio</p>
</article> */}

const renderProducts = (productArray, element) => {
    const productsSection = document.querySelector(element);
    productsSection.innerHTML = '';

    let productArticles = '';


    productArray.forEach(product => {
        productArticles += `
            <article>
                <h5>${product.name}</h5>
                <p>${product.price}</p>
                <button class="btn-comprar" value="${product.id}">Comprar</button>
            </article>
        `;
    });

    productsSection.innerHTML = productArticles;
    
}

const deleteFromCart = productId => {
    const newCart = cart.filter(product => product.id !== parseInt(productId));
    cart = newCart;
    
    renderProductsInCart(cart, '.cart');
}

const renderProductsInCart = (productArray, element) => {
    const cartSection = document.querySelector(element);
    cartSection.innerHTML = '';

    let productArticles = '';


    productArray.forEach(product => {
        productArticles += `
            <article>
                <h5>${product.name}</h5>
                <p>${product.price}</p>
                <button class="btn-delete" onclick="deleteFromCart('${product.id}')">X</button>
            </article>
        `;
    });

    cartSection.innerHTML = productArticles;
    
}

const addToCart = (event) => {
    const productId = event.target.value;
    const productInDB = products.find(product => product.id === parseInt(productId));

    //console.log('Antes de agregar al carrito:', cart);
    cart.push(productInDB);
    //console.log('Despues de agregar al carrito:', cart);



    renderProductsInCart(cart, '.cart');

}


window.onload = () => {
    renderProducts(products, '.products');

    const btnsComprar = document.querySelectorAll('.btn-comprar');
    console.log(btnsComprar);

    btnsComprar.forEach(btn => btn.addEventListener('click', addToCart))
}

