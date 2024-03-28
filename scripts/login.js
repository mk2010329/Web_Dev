import { findUser,users } from "../app/repo/UsersRepo.js";
const form = document.querySelector("#login-form");//select the form attribute.

form.addEventListener('submit',handleSubmission);
function handleSubmission(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const loginOBJ = {};
    for(const [key,value] of formdata){
        loginOBJ[key] = value; //form the login obj.
    }
    console.log(loginOBJ);

    if(findUser(loginOBJ.user,loginOBJ.pass)){
        window.location.href = "../home_page.html";
    }else{
        alert("Incorrect Username and/or Password")
    }
}
