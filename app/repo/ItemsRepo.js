let itemList = []

export function uploadItem(newItem){
    let items = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("items")) : [];
    items.push(newItem);
    localStorage.setItem("items", JSON.stringify(items));
    return "Done" ;
}
const items = JSON.parse(await getItems())
export function searchItem(id) {
    return items.find(i => i.id == id)
}

export async function getItems(){ 
    if (localStorage.itemList){
        itemList = JSON.parse(localStorage.itemList)
    } else {
        const data = await fetch('/app/data/items.json')
        itemList = await data.json()
        localStorage.itemList = JSON.stringify(itemList)
    }
    return localStorage.itemList
}


export function storeItem(){

}

export function purchaseItem(item){
    
}
