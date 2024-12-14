const myform = document.getElementById("myform")
const data = []
myform.addEventListener("submit",(e) =>{
    e.preventDefault()
    const email = myform.email.value
    const pass = myform.pass.value
    const acc = {email,pass}
    data.push(acc)
    if(check(email))
    {
        localStorage.setItem("accounts",JSON.stringify(data))
    }
    
})

function check(mail)
{
    for (let i = 0; i < JSON.parse(localStorage.getItem("accounts")).length; i++) {
        if (JSON.parse(localStorage.getItem("accounts"))[i].email == mail){
            return false;
        }
        
    }
    return true
}