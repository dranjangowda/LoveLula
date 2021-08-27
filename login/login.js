let div = document.getElementById("error")

function Login(e){
    e.preventDefault()

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value
    console.log(email,password)
    const userdata = JSON.parse(localStorage.getItem("userData"))
    console.log(userdata)

    for(let i=0;i< userdata.length;i++){
        let e = userdata[i].useremail
        let p = userdata[i].userpassword

        console.log(e,p)
        if(email == "" || password == ""){
            let p = document.createElement("p")
            p.innerText="please enter the required fields !!"
            div.append(p)
            // alert("please enter the required fields")
        }else if(e === email && p === password){
            alert("successfully logged in")
            window.location.href = "../index/index.html"
        }else if(e != email || p != password){
            let div = document.getElementById("error")
            let incorrectMsg = document.createElement("p")
            incorrectMsg.innerText = "entered username or password is incorrect!!"
            div.append(incorrectMsg)
        }
    }
}