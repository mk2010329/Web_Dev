import {Item} from "../app/repo/ItemsRepo.js"


document.addEventListener("DOMContentLoaded", function() {

     async function uploadItem(event) {
        event.preventDefault()

        let itemName = document.getElementById("itemName").value;
        let price = parseFloat(document.getElementById("price").value);
        let quantity = parseInt(document.getElementById("quantity").value);
        let category = document.getElementById("category").value;
        let picture = document.getElementById("picture").files[0];

    
        if (!itemName || isNaN(price) || isNaN(quantity) || !picture ) {
            showMessage("Please fill in all fields.");
            return;
        }

    
        if (!picture.type.startsWith('image/')) {
            showMessage("Please upload an image file.");
            return;
        }

    
        let sellerId = getLoggedInSellerId();
        if (!sellerId) {
            showMessage("Error: Unable to determine seller.");
            return;
        }

        

        usersList = localStorage.usersList;
        if(usersList){
          usersList = JSON.parse(localStorage.usersList);
        }else{
          const data = await fetch('app/data/users.json');
          usersList= await data.json();
        }
        let targetUser = usersList.find(user => user.username === 1);
        let listOfCurrentItems = targetUser.listOfCurrentItems;
        let newItem = new Item(sellerId, itemName, price, "", quantity, picture.name, category);
        listOfCurrentItems.push(newItem);
        localStorage.usersList = JSON.stringify(usersList); 


        function showMessage(message) {
            document.getElementById("message").textContent = message;
        }


        function getLoggedInSellerId() { 
            return "seller123";
        }
    }
    document.getElementById("Upload").addEventListener("submit",uploadItem);
});


