const users = []

export function findUser(username, password) {
    
}

export function getLoggedInUser(){
    const data = fetch('app/data/users.json')
    const users =  data.json()
    const loggedInUser = users.find(user => user.username==2)
    return loggedInUser
}