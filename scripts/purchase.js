
let loggedInUser = []



document.addEventListener('DOMContentLoaded', () => {
    let order = document.querySelector('.order_summary')
    let cart = document.querySelector("#cart-id")
    let summary = document.querySelector(".summary")
    let amount = document.querySelector(".amount") 
    loggedInUser = JSON.parse(localStorage.loggedInUser)
    amount.innerHTML= loggedInUser.bankAccount.amount
    let extractedCart = loggedInUser.cart;
   cart.innerHTML =  extractedCart.map(i => addToCart(i)).join("");
   let cost = []
   extractedCart.map(i =>cost.push(i.price) )
   let totalCost = cost.reduce((acc,i) => acc+i)
   let shipping = 20;   
   let Payment =Number(totalCost)+Number(shipping)
    summary.innerHTML = "<br>"+"Total: " + totalCost +" QAR" + "<br>"+"Shipping Charges: " + shipping +" QAR" + "<br>" + "Payment: "+ Payment
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
    <label for="quantity">Quantity</label>
    <select id="quantity" name="Quantity">
    <option value="one">1</option>
    <option value="two">2</option>
    <option value="three">3</option>
    <option value="four">4</option>
    <option value="five">5</option>
    </select>
    <button  class="add-btn"  onclick="removeItem('${item.id}')"><span>&minus;</span></button>
    </div>
    </div>
` 
}

function handlePayment(){
    let cart = document.querySelector("#cart-id")
   let user = JSON.parse(localStorage.loggedInUser)
   let cost = []
   let extractedCart = user.cart
   extractedCart.map(i =>cost.push(i.price) )
   let totalCost = cost.reduce((acc,i) => acc+i)
   let shipping = 20;   
   let Payment =Number(totalCost)+Number(shipping)
   let  balance = user.bankAccount.amount
   if(balance>Payment){
    window.location.href = "confirmation.html";
   }else{
    //window.location.href = "confirmation.html";
   window.alert("Low balance!")
   }


   cart.innerHTML = user.cart.map(i => addToCart(i)).join("")
  
  
}



function payBtn(){
    return `
    <button  class="pay-btn" onclick="handlePayment()">Pay Now</span></button>
    `
}

function removeItem(id) {
    const item = document.getElementById(`id-${id}`)
    // order.style.display='none'
    item.remove()
    loggedInUser = localStorage.loggedInUser
    userList = JSON.parse(localStorage.loggedInUser)
    const index = userList.cart.findIndex(i=> i.id==id)
    userList.cart.splice(index,1);
    localStorage.loggedInUser = JSON.stringify(userList)
    location.reload()
}
