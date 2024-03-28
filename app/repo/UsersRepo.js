export let users = []
let loggedInUser = {}

document.addEventListener('DOMContentLoaded', domHandler);
async function domHandler(){
    const userDataResponse = await fetch('app/data/users.json');
    const userDataArray = await userDataResponse.json();
    users = userDataArray;
    console.log(users);
}

export function findUser(username, password) {
    const foundUser = users.find((user)=>user.username==username && user.password==password);
    if(foundUser === undefined){
        return undefined;
    }else{
        loggedInUser = foundUser
        return foundUser;
    }
}

function getLoggedInUser() {
    return loggedInUser;
}