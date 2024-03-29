
let cartItems = []

document.addEventListener('DOMContentLoaded', () => {
    let cart = document.querySelector("#cart-id")
    let summary = document.querySelector(".summary")
    cartItems = localStorage.userList
    cartItems = JSON.parse(localStorage.userList)
    let item = cartItems.cart;
   cart.innerHTML =  item.map(i => addToCart(i)).join("");
   let cost = []
   let price = item.map(i =>cost.push(i.price) )
   let totalCost = cost.reduce((acc,i) => acc+i)
   let shipping = 20;
   let Payment = price+ shipping
    summary.innerHTML = "<br>"+"Total: " + totalCost +" QAR" + "<br>"+"Shipping Charges: " + shipping +" QAR" + "<br>" //+ "Payment: "+ Payment
    + "<br>"+ payBtn()
})

function addToCart(item){
    return `
    <div class ="item-card">
    <img class="item_img" src="${item.picture}">
    <div>
    <p><b>Title:</b> ${item.name} </p>
    <p><b>Price:</b> ${item.price} QAR </p>
    </div>
    <div>
    <button  class="add-btn" ><span>&minus;</span></button>
    </div>
    </div>
` 
}

function payBtn(){
    return `
    <button  class="pay-btn" >Pay Now</span></button>
    `
}

function removeItem(id) {
    const book = document.getElementById(`id-${id}`)
    book.remove()
    bookList = localStorage.bookList
    bookList = JSON.parse(localStorage.bookList)
    const index = bookList.findIndex(book=> book._id==id)
    bookList.splice(index,1);
    localStorage.bookList = JSON.stringify(bookList)
}
