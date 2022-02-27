document.getElementById("signup").addEventListener("click",(event) => {
    event.preventDefault();
    let email = document.getElementById("email-signup").value;
    let password = document.getElementById("password-signup").value;
    let name = document.getElementById("name").value;
    fetch("http://localhost:8080/signup",{
        method : "POST",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify({
            email : email,
            name : name,
            password : password,
            userType : localStorage.getItem("userType")
        })
    })
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        alert(data.message);
        document.getElementById("su").style.zIndex = -1;
    })
})
document.getElementById("signin-toggle").addEventListener("click",(event) => {
    // event.preventDefault();
    console.log("kkkk")
    document.getElementById("su").style.zIndex = -1;
})
document.getElementById("signup-toggle").addEventListener("click",(event) => {
    // event.preventDefault();
    document.getElementById("su").style.zIndex = 10;
})