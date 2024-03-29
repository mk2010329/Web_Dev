
let cartItems = []
const order = document.querySelector('.order_summary')


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
    <div class ="item-card" id="id-${item.id}">
    <img class="item_img" src="${item.picture}">
    <div>
    <p><b>Title:</b> ${item.name} </p>
    <p><b>Price:</b> ${item.price} QAR </p>
    </div>
    <div>
    <button  class="add-btn"  onclick="removeItem('${item.id}')"><span>&minus;</span></button>
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
    const item = document.getElementById(`id-${id}`)
    // order.style.display='none'
    item.remove()
    userList = localStorage.userList
    userList = JSON.parse(localStorage.userList)
    const index = userList.cart.findIndex(i=> i.id==id)
    userList.cart.splice(index,1);
    localStorage.userList = JSON.stringify(userList)
    location.reload()
}
