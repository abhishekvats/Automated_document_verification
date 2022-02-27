document.getElementById("login").addEventListener("click", (event) => {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            alert(data.message);
            localStorage.setItem("token",data.token);
            window.location.href = data.user.userType == "User"?"/Frontend/userServiceList.html":"/Frontend/dashboard.html";
        })
})