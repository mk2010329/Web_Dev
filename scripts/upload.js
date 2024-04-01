import { Item } from "../app/item.js";
import * as itemsRepo from "../app/repo/ItemsRepo.js"
import * as UsersRepo from "../app/repo/UsersRepo.js"

document.getElementById("Upload").addEventListener("submit",async function(event) {
    event.preventDefault();

    let itemName = document.getElementById("itemName").value;
    let price = parseFloat(document.getElementById("price").value);
    let quantity = parseInt(document.getElementById("quantity").value);
    let category = document.querySelector('input[name="category"]:checked').value;
    let picture = document.getElementById("picture").files[0];

    if (!itemName || isNaN(price) || isNaN(quantity) || !picture ) {
        showMessage("Please fill in all fields.");
        return;
    }

    if (!picture.type.startsWith('image/')) {
        showMessage("Please upload an image file.");
        return;
    }

    let loggedInUser = localStorage.loggedInUser;

    if (!loggedInUser) {
        // showMessage("Please log in to upload items.");
        window.alert("Pleae log in to continue")
        return;
    }

    
    // this code should push items to the items list and the user listOfCurr the issue is here 
    let sellerId = loggedInUser.id;
    let newItem = new Item(sellerId, itemName, price, "", quantity, picture.name, category);
    let result = await itemsRepo.uploadItem(newItem);
    let result1 = await UsersRepo.uploadItemRpo(newItem);

  
    showMessage(result1);
    document.getElementById("Upload").reset();
  });
  
  function showMessage(message) {
    document.getElementById("message").textContent = message;
  }
  


