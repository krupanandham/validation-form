let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('pwd');
let button = document.getElementById('btn');
let message2Div= document.getElementById('message2')
let messageDiv = document.getElementById('message');
passwordInput.addEventListener('keypress', validate)


function validate() {
    let email = emailInput.value;
    let password = passwordInput.value;

    if (email != "" && email.length>=4 && email.includes("@") && email.includes("a")) {
        if (password != "" && password.length >= 9) {
            console.log("All good to go!")
            messageDiv.innerText = "All good to go!";
            messageDiv.style.color = "green";
            button.removeAttribute("disabled");
        }
    }

    else {
        message2Div.innerText = "Make sure email is more than 3 characters and has @ and a.";
        message2Div.style.color = "red";
        messageDiv.innerText = "Make sure password is more than 8 characters.";
        messageDiv.style.color = "red";
        console.log("Email or password is invalid")
    }
}

button.onclick= validate;
// button.onclick = clear;