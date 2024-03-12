document.querySelector('#add-btn').addEventListener('click', () => {
    
    const productNameField = document.querySelector('#product-name')
    const productQuantityField = document.querySelector('#product-quantity')
    const productName = productNameField.value 
    const productQuantity = productQuantityField.value
    productNameField.value = ''
    productQuantityField.value = ''

    displayProducts(productName, productQuantity)
    saveProductToLocalStorage(productName, productQuantity)
})

const displayProducts = (product, quantity) => {
    const ol = document.querySelector('#output')
    const li = document.createElement('li')
    li.innerText = `${product}: ${quantity}`
    ol.appendChild(li)
}

const getStoredCart = () => {
    let cart = {}
    const storedCart = localStorage.getItem('cart')
    if(storedCart) {
        cart = JSON.parse(storedCart)
    }
    return cart
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredCart()
    cart[product] = quantity
    const cartString = JSON.stringify(cart)
    localStorage.setItem('cart', cartString)
}

const displayProductsFromLocalStorage = () => {
    const savedCart = getStoredCart()
    for(const product in savedCart) {
        const quantity = savedCart[product]
        console.log(product, quantity)
        displayProducts(product, quantity)
    }
}

displayProductsFromLocalStorage()