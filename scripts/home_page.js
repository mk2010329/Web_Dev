

const slider = document.querySelector('#main')
const computer = document.querySelector("#comp-pic")
const mobile = document.querySelector("#mob-pic")
const acc = document.querySelector("#acc-pic")
const categories =document.querySelector('.categories')
const items = document.querySelector("#item-list")
const hr = document.querySelector(".heading")
const cart = document.getElementById(".add-btn")

let itemList = []

computer.addEventListener('click',showComp)
mobile.addEventListener('click',showMobile)
acc.addEventListener('click',showAcc)

async function showComp(){
    slider.style.display='none'
    categories.style.display='none'
    hr.style.display='none'
 //   itemList = localStorage.itemList
//     if (itemList){
//         itemList = JSON.parse(localStorage.itemList)
//         items.innerHTML = itemList.map(item => getItems(item)).join('')
//     }
//   else{
    const data = await fetch('app/data/items.json')
    itemList= await data.json()
    const computer = itemList.filter(p => p.category=="laptop" )
    items.innerHTML= computer.map(item => getItems(item)).join("");
//     localStorage.itemList = JSON.stringify(itemList)
//   } 
}

async function showMobile(){
    slider.style.display='none'
    categories.style.display='none'
    hr.style.display='none'
//     itemList = localStorage.itemList
//     if (itemList){
//         itemList = JSON.parse(localStorage.itemList)
//         items.innerHTML = itemList.map(item => getItems(item)).join('')
//     }
//   else{
    const data = await fetch('app/data/items.json')
    itemList= await data.json()
    const mobile = itemList.filter(p => p.category=="mobile" )
    items.innerHTML= mobile.map(item => getItems(item)).join("");
//     localStorage.itemList = JSON.stringify(itemList)
//   } 

}

async function showAcc(){
    slider.style.display='none'
    categories.style.display='none'
    hr.style.display='none'
//     itemList = localStorage.itemList
//     if (itemList){
//         itemList = JSON.parse(localStorage.itemList)
//         items.innerHTML = itemList.map(item => getItems(item)).join('')
//     }
//   else{
    const data = await fetch('app/data/items.json')
    itemList= await data.json()
    const acc = itemList.filter(p => p.category=="accessories" )
    items.innerHTML= acc.map(item => getItems(item)).join("");
//     localStorage.itemList = JSON.stringify(itemList)
//   } 

}

async function addToCart(item){
    console.log(item);
    const data = await fetch('app/data/users.json')
    const users =  await data.json()
    const loggedInUser = users.find(user => user.username==2)
    loggedInUser.cart.itemsInCart.unshift(item)
    localStorage.userList = JSON.stringify(loggedInUser)
//     cart.innerHTML += 
//      `
//     <div class ="item-card">
//     <img src="${item.picture}">
//     <div>
//     <p><b>Title:</b> ${item.name} </p>
//     <p><b>Price:</b> ${item.price} QAR </p>
//     <p><b>Quantity:</b> ${item.quantity} </p>
//     </div>
//     <div>
//     <button  class="add-btn" onclick="addToCart(${item})">Remove From Cart</button>
//     </div>
//     </div>
// `
}

function getItems(item){
    return `
    <div class ="item-card">
    <img src="${item.picture}">
    <div>
    <p><b>Title:</b> ${item.name} </p>
    <p><b>Price:</b> ${item.price} QAR </p>
    <p><b>Quantity:</b> ${item.quantity} </p>
    </div>
    <div>
    <button  class="add-btn" onclick="addToCart('${item}')">Add to Cart</button>
    </div>
    </div>
`
}