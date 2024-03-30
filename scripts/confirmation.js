const confirmation = document.querySelector(".button_submit")


confirmation.addEventListener('click',orderNow)



function orderNow(){

    let loggedInUser = JSON.parse(localStorage.loggedInUser)
    let extractedCart = loggedInUser.cart
    let sellers = []
     extractedCart.map(element => {
        loggedInUser.listOfPurchasedItems.push(element)    
    });

    let cost = []
    extractedCart.map(i =>cost.push(i.price) )
    let totalCost = cost.reduce((acc,i) => acc+i)
    let shipping = 20;   
    let Payment =Number(totalCost)+Number(shipping)
//    extractedCart.array.forEach(element => {
//     console.log(element.sellerId);
//    });
   extractedCart.map(item => {
    sellers.push(item.sellerId)
   });

    let users = JSON.parse(localStorage.users)
    
    const foundUser = users.find(user=>user.username==sellers);
    const foundLoggedInUser = users.find(user => user.username==loggedInUser.username)
    foundLoggedInUser.bankAccount.amount-=Payment
    foundUser.bankAccount.amount+=Payment
    extractedCart.map(element => {
    foundUser.listOfSoldItems.push(element)  });

    extractedCart.map(item => {foundLoggedInUser.listOfPurchasedItems.push(item)})
    // for(let i =0 ;i<users.length;i++){
    //     for (let j=0; j<users.length+1;j++){
    //         if(users.include(sellers[i])){
    //             console.log(users[j].username);
    //             console.log("found it");
    //         }else{
    //             console.log(users[j].username);
    //         }
    //     }
    // }

   loggedInUser.bankAccount.amount-=Payment
   let emtpyArray = []
   loggedInUser.cart = emtpyArray
  localStorage.loggedInUser = JSON.stringify(loggedInUser)
  localStorage.users = JSON.stringify(users)
  window.alert("Transaction successful")

}