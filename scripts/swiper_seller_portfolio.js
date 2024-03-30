import * as itemsRepo from "../app/repo/ItemsRepo.js"
import * as UsersRepo from "../app/repo/UsersRepo.js"

const loggedInUser = await UsersRepo.getLoggedInUser()


document.getElementById("currently-selling-items").style.display = "block";
displayCurrentUsersItems()

document.getElementById("current-items-button").addEventListener("click", displayCurrentUsersItems)
document.getElementById("purchase-history-button").addEventListener("click", displayPurchaseHistory)
document.getElementById("sale-history-button").addEventListener("click", displayUsersSaleHistory)

document.querySelector(".below-header-div").innerHTML =
                `<h1>Hi ${loggedInUser.name}&#x1F44B;</h1>`


function currentItemCardTemplate({name, price, quantity, category, picture}) {
        return `<article class="card product-card">
                <img src="${picture}" alt="Item"><br>
                <p><b>Name: </b>${name}</p><br>
                <p><b>Price: </b>${price}</p> <br>
                <p><b>Quantity: </b>${quantity}</p> <br>
                <p><b>category: </b>${category}</p><br>
        </article>`;
}

function soldItemCardTemplate({name, quantity, category, picture}) {
        const item = itemsRepo.searchItem(111)
        return `<article class="card product-card">
                <img src="${picture}" alt="Item"><br>
                <p><b>Name: </b>${name}</p><br>
                <p><b>Quantity: </b>${quantity}</p> <br>
                <p><b>category: </b>${category}</p><br>
                <p><b>Bought by User: </b>${item.boughtByUser}</p><br>
                <p><b>Selling Price: </b>${item.price}</p><br>
        </article>`;
}

function displayCurrentUsersItems() {
        var i;
        var x = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
        }
        document.getElementById("currently-selling-items").style.display = "block";
        document.querySelector("#currently-selling-items > .items-list").innerHTML = 
                loggedInUser.listOfCurrentItems
                        .map(item => currentItemCardTemplate(item)).join(" ")

}

function displayPurchaseHistory() {
        var i;
        var x = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
        }
        document.getElementById("purchase-history").style.display = "block";
        document.querySelector("#purchase-history > .items-list").innerHTML = 
                loggedInUser.listOfPurchasedItems
                        .map(item => currentItemCardTemplate(item)).join(" ")

}

async function displayUsersSaleHistory() {
        var i;
        var x = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
        }
        document.getElementById("sale-history").style.display = "block"
        const saleHistoryInfo = document.querySelector(".sale-history-info")
        saleHistoryInfo.innerHTML += `<h3><b>Number of Items Sold: </b>${loggedInUser.listOfSoldItems.length}</h3>`

        document.querySelector("#sale-history > .items-list").innerHTML =
                loggedInUser.listOfSoldItems
                        .map(item => soldItemCardTemplate(item)).join(" "); 

}
