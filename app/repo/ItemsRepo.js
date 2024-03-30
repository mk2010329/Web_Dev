let itemList = []

export function uploadItem(item){
    
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
