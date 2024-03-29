
let user = []
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
    let computer=""
   itemList = localStorage.itemList
    if (itemList){
        itemList = JSON.parse(localStorage.itemList)
    }
  else{
    const data = await fetch('app/data/items.json')
    itemList= await data.json()
    
  } 
  computer = itemList.filter(p => p.category=="laptop" )
  localStorage.itemList = JSON.stringify(itemList)
  items.innerHTML= computer.map(item => getItems(item)).join("");
}

async function showMobile(){
    slider.style.display='none'
    categories.style.display='none'
    hr.style.display='none'
    let mobile =""
    itemList = localStorage.itemList
    if (itemList){
        itemList = JSON.parse(localStorage.itemList)
    }
  else{
    const data = await fetch('app/data/items.json')
    itemList= await data.json()
  } 
  mobile = itemList.filter(p => p.category=="mobile" )
    localStorage.itemList = JSON.stringify(itemList)
  items.innerHTML= mobile.map(item => getItems(item)).join("");
}

async function showAcc(){
    slider.style.display='none'
    categories.style.display='none'
    hr.style.display='none'
    let acc =""
    itemList = localStorage.itemList
    if (itemList){
        itemList = JSON.parse(localStorage.itemList)
    }
  else{
    const data = await fetch('app/data/items.json')
    itemList= await data.json()
  } 
   acc = itemList.filter(p => p.category=="accessories" )
    items.innerHTML= acc.map(item => getItems(item)).join("");
    localStorage.itemList = JSON.stringify(itemList)

}

async function addToCart(id){

    let users=""
    // if(loggedInUser){
       let loggedInUser = JSON.parse(localStorage.userList)
      
    // }else{
    //     const data = await fetch('app/data/users.json')
    //     users =  await data.json()
    //     loggedInUser = users.find(user => user.username==2)
         
    // }
    itemList = JSON.parse(localStorage.itemList)
    const item = itemList.find(i => i.id == id)
    loggedInUser.cart.push(item)
    localStorage.userList = JSON.stringify(loggedInUser)   
    window.alert(item.name + " is add to your cart!");

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
    <button  class="add-btn" onclick="addToCart('${item.id}')">Add to Cart</button>
    </div>
    </div>
`
}