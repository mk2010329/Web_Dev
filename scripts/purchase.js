
let cartItems = []



document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelector("#cart-id")
    cartItems = localStorage.userList
    if(cartItems){
        console.log("yes data is here");
    }
    cartItems = JSON.parse(localStorage.userList)
    console.log(cartItems.cart);


        cart.innerHTML += 
     `
    <div class ="item-card">
    <img src="${cartItems.picture}">
    <div>
    <p><b>Title:</b> ${cartItems.name} </p>
    <p><b>Price:</b> ${cartItems.price} QAR </p>
    </div>
    <div>
    <button  class="add-btn" >Remove From Cart</button>
    </div>
    </div>
` 
})

