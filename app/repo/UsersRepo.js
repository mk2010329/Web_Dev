var users = []
var loggedInUser = {}

async function loadUsers(){
    const userDataResponse = await fetch('/app/data/users.json');
    const userDataArray = await userDataResponse.json();
    users = userDataArray;
    return users
}

const usersList = await loadUsers() 
loggedInUser = usersList[0]

export function findUser(username, password) {
    const foundUser = users.find((user)=>user.username==username && user.password==password);
    if(foundUser === undefined){
        return undefined;
    }else{
        loggedInUser = foundUser
        return loggedInUser;
    }
}

export function getLoggedInUser() {
    return loggedInUser;
}