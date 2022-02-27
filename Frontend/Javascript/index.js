document.getElementById("Officer").addEventListener("click",() => {
    localStorage.setItem("userType","Officer");
})
document.getElementById("User").addEventListener("click",() => {
    localStorage.setItem("userType","User");
})