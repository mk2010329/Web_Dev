
var usersList = []
var loggedInUser = {}

async function loadUsers(){
    const userDataResponse = await fetch('/app/data/users.json');
    const userDataArray = await userDataResponse.json();
    return userDataArray
}

export async function findUser(username, password) {
    usersList = await loadUsers() 
   localStorage.users =  JSON.stringify(usersList)  
   let list = localStorage.users
    const foundUser = usersList.find((user)=>user.username==username && user.password==password);
    if(foundUser === undefined){
        return undefined;
    }else{
        console.log(foundUser);
        loggedInUser = foundUser
        return loggedInUser;
    }
}

export async function uploadItemRpo(newItem){
    let loggedInUser = getLoggedInUser();

    if (!loggedInUser) {
        alert("No user logged in.");
        return;
    }

    loggedInUser.listOfCurrentItems.push(newItem);
    localStorage.users = JSON.stringify(usersList);
    alert("Item uploaded successfully.");
    return "Item uploaded successfully.";
}





export function getLoggedInUser() {
    return loggedInUser;
}

