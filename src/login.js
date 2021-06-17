var text_of_invalid = " <i class='fa fa-warning'>&nbsp;</i> Enter a valid information";

function getStarted() {
    username = document.getElementById("name").value;
    useremail = document.getElementById("email").value;
    user_room = document.getElementById("room").value;

    if (username, useremail, user_room == "") {
        document.getElementById("invalid_error").innerHTML = text_of_invalid;
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("useremail", useremail);
        localStorage.setItem("user_room", user_room);

        window.location = "../../public/main.html";
    }
}