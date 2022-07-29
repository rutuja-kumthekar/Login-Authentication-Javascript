// ---------------------------------------------- Sign UP _____-------------------------------------

function signup() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const account = {
        email: email,
        password: password,
    }

    if (localStorage.getItem('user')) {
        let oldUsers = JSON.parse(localStorage.getItem('user'))
        console.log(oldUsers)
        let array = [...oldUsers, account]
        localStorage.setItem("user", JSON.stringify(array));
    }
    else {
        localStorage.setItem("user", JSON.stringify([account]));
    }



}

// ------------------------------------------ Log In ---------------------------------------//

function login() {
    var emailUser = document.getElementById("email").value;
    var passwordUser = document.getElementById("password").value;

    var user = JSON.parse(localStorage.getItem("user"));
    console.log(user);


    if (user && user.length !== 0) {
        let findUser = user.filter((item) => item.email === emailUser && item.password === passwordUser)
        // console.log(findUser)

        if (findUser && findUser.length !== 0) 
        {
            // alert("user login successfully");
           window.location.href="index.html";
        //    console.log("you are IN");
        }
        else {
            alert("user password is not match");
        }
    }
    else {
        alert("username and password is not found");
    }




}



