const items = [
    {
        "name" : "Headphones",
        "price" : 100,
        "quantity" : 1,
        "category" : "Accessories"
    },
    {
        "name" : "Headphones",
        "price" : 200,
        "quantity" : 2,
        "category" : "Accessories"
    }
]

export function uploadItem(newItem){
    let items = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("items")) : [];
    items.push(newItem);
    localStorage.setItem("items", JSON.stringify(items));
    return "Done" ;
}

export function searchItem(item){

}

export function getItems(){
    return items;
}


export function storeItem(){

}

export function purchaseItem(item){
    
}
