function signIn(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error-message");

    if (email === "" || password === "") {
        window.alert("Please enter your email and password.");
    }

    else {
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
    }


}
