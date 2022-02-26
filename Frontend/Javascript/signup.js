document.getElementById("signup").addEventListener("click",() => {
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
            password : password
        })
    })
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        alert(data.message);
        window.location.href = "../userHome.html";
    })
})