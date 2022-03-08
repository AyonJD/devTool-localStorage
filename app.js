const gateAndUpdate = () => {
    const inputField = document.getElementById('input');
    const inputValue = inputField.value;
    if (!inputValue) {
        return
    }
    //Update li with input value
    updateUi(inputValue);
    //Update local storage
    updateCart(inputValue)
    //Clearing input field
    inputField.value = '';
}
//function for updating the ul with the input value
const ul = document.getElementById('ul');
const updateUi = (inputValue) => {
    const li = document.createElement('li');
    li.innerText = inputValue;
    ul.appendChild(li);
};
//function to confirm if there is a key named cart or not in the local storage
const getCartObject = () => {
    const cart = localStorage.getItem('cart');
    let cartObject = {};
    if (cart) {
        cartObject = JSON.parse(cart)
    } else {
        cartObject = {};
    }
    return cartObject;
}
//function for updating local storage
const updateCart = (inputValue) => {
    const cartObject = getCartObject();
    if (!cartObject[inputValue]) {
        cartObject[inputValue] = 1;
    } else {
        cartObject[inputValue]++;
    }
    const cartObjectStringify = JSON.stringify(cartObject);
    localStorage.setItem('cart', cartObjectStringify)
}
//Auto update with the UI with the localstorage
const autoUpdate = () => {
    const cartData = JSON.parse(localStorage.cart);
    for (const keys in cartData) {
        updateUi(keys)
    }
}
autoUpdate()