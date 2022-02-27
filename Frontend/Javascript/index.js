// window.onload = () => {
//     if(localStorage.getItem("token")){
//         window.location.href = "/Frontend/index.html";
//     }
// }
document.getElementById("Officer").addEventListener("click",() => {
    localStorage.setItem("userType","Officer");
})
document.getElementById("User").addEventListener("click",() => {
    localStorage.setItem("userType","User");
})