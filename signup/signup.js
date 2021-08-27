

let userData = []

function createUser(e){
    e.preventDefault()
    const email  = document.getElementById("email").value 
    const password = document.getElementById("password").value
    const mobileNumber = document.getElementById("phoneNumber").value
   
    if(email === "" || password === "" || mobileNumber === ""){
        alert("Please Fill all the required Fields")
    }


    const user = 
        {
        userMobile : mobileNumber,
        userpassword : password,
        useremail : email
    }
    userData.push(user)

     localStorage.setItem("userData",JSON.stringify(userData))
     
     if(JSON.parse(localStorage.getItem("userData")) === null){
         alert("please enter the required data")
     }else if(JSON.parse(localStorage.getItem("userData")) != null){
        window.location.href = "../login/login.html"
     }
     
}