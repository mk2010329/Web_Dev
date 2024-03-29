import * as itemsRepo from "../app/repo/ItemsRepo.js"
import * as UsersRepo from "../app/repo/UsersRepo.js"

document.addEventListener("DOMContentLoaded", async () =>{
        document.getElementById("all-items").style.display = "block";
        document.querySelector("#all-items > .items-list").innerHTML = itemsRepo.getItems()
                                .map(item => itemCardTemplate(item)).join(" ")
})

document.getElementById("purchase-history-button").addEventListener("click", displayPurchaseHistory)
document.getElementById("current-items-button").addEventListener("click", DisplayCurrentUsersItems)
document.getElementById("sale-history-button").addEventListener("click", DisplayUsersSaleHistory)

function itemCardTemplate({name, price, quantity, category, picture}) {
        return `<article class="card product-card">
                <img src="${picture}" alt="Item"><br>
                <p><b>Name: </b>${name}</p><br>
                <p><b>Price: </b>${price}</p> <br>
                <p><b>Quantity: </b>${quantity}</p> <br>
                <p><b>category: </b>${category}</p><br>
                <a class="popup-btn">Quick View</a><br>
        </article>`;
}

function displayPurchaseHistory() {
        var i;
        var x = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
        }
        document.getElementById("purchase-history").style.display = "block";
        document.querySelector("#currently-selling-items > .items-list").innerHTML = 
                UsersRepo.getLoggedInUser().listOfPurchasedItems
                        .map(item => itemCardTemplate(item)).join(" ")
}

function DisplayCurrentUsersItems() {
        var i;
        var x = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
        }
        document.getElementById("currently-selling-items").style.display = "block";
        document.querySelector("#currently-selling-items > .items-list").innerHTML = 
                UsersRepo.getLoggedInUser().listOfCurrentItems
                        .map(item => itemCardTemplate(item)).join(" ")
}

function DisplayUsersSaleHistory() {
        var i;
        var x = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
        }
        document.getElementById("sale-history").style.display = "block";
        document.querySelector("#sale-history > .items-list").innerHTML = 
                UsersRepo.getLoggedInUser().listOfSoldItems
                        .map(item => itemCardTemplate(item)).join(" ")
}

// code for pop up
document.addEventListener("click", closeItemPopUp)
function closeItemPopUp() {

}