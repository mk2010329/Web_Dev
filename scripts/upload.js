import { Item } from "../app/item.js";
import * as UsersRepo from "../app/repo/UsersRepo.js";

document.addEventListener("DOMContentLoaded", async function () {
    async function uploadItem(event) {
        event.preventDefault();

        let itemName = document.getElementById("itemName").value;
        let price = parseFloat(document.getElementById("price").value);
        let quantity = parseInt(document.getElementById("quantity").value);
        let category = document.getElementById("category").value;
        let picture = document.getElementById("picture").files[0];

        if (!itemName || isNaN(price) || isNaN(quantity) || !picture) {
            showMessage("Please fill in all fields.");
            return;
        }

        if (!picture.type.startsWith('image/')) {
            showMessage("Please upload an image file.");
            return;
        }

        let loggedInUser = UsersRepo.getLoggedInUser();

        if (!loggedInUser) {
            showMessage("Please log in to upload items.");
            return;
        }

        let sellerId = loggedInUser.id;
        let newItem = new Item(sellerId, itemName, price, "", quantity, picture.name, category);
        let result = await UsersRepo.uploadItemRpo(newItem);
        showMessage(result);

    }

    function showMessage(message) {
        document.getElementById("message").textContent = message;
    }

    document.getElementById("Upload").addEventListener("submit", uploadItem);
});















