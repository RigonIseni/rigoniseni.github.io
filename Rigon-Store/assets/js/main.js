

// sign up function

function signup(e) {
    e.preventDefault();
    // console.log(`working`)

    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var success = document.getElementById("kaloj");

    var user = {
        email: email,
        username: username,
        password: pass,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log(`user added`);
    success.style.display = "block";
}

function loginFunc(e){
    e.preventDefault();

    var username = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var result = document.getElementById("result");

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if(user == null) {
        result.innerHTML = 'wrong username';
    } else if(username == data.username && pass == data.password){
        window.location.href = './install.html';
    } else {
        result.innerHTML = 'wrong password';
    }
}

