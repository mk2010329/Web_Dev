import { findUser} from "../app/repo/UsersRepo.js";
const form = document.querySelector("#login-form");//select the form attribute.

form.addEventListener('submit',handleSubmission);
async function handleSubmission(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const loginOBJ = {};
    for(const [key,value] of formdata){
        loginOBJ[key] = value; //form the login obj.
    }
    console.log(loginOBJ);
    const user = await findUser(loginOBJ.user,loginOBJ.pass)
    if(user){
    localStorage.userList = JSON.stringify(user)
    window.location.href = "../home_page.html";
    }else{
        alert("Incorrect Username and/or Password")
    }
}
