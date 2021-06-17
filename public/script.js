user_name = localStorage.getItem("username");
room_store = localStorage.getItem("user_room");

newPageTitle = user_name + "'s " + "Room";
document.querySelector('title').textContent = newPageTitle;

var firebaseConfig = {
    apiKey: "AIzaSyAQNhUpZ-GIlakWly2WRmxwms4gIlg5mIQ",
    authDomain: "my-first-authication.firebaseapp.com",
    databaseURL: "https://my-first-authication-default-rtdb.firebaseio.com",
    projectId: "my-first-authication",
    storageBucket: "my-first-authication.appspot.com",
    messagingSenderId: "528288012369",
    appId: "1:528288012369:web:bc26e9439d08caddae8070"
};

firebase.initializeApp(firebaseConfig);

document.getElementById("room_name").innerHTML = "Your room is: " + room_store;

function send() {
    msg = document.getElementById("msg").value;

    if (msg == "") {
        document.getElementById("msg").placeholder = "Don't type empty massage";
    } else {
        firebase.database().ref(room_store).push({
            name: user_name,
            message: msg
        });
        document.getElementById("msg").value = "";
        document.getElementById("msg").placeholder = "Aa";
    }
}

function getData() {
    firebase.database().ref("/" + room_store).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];

                name_tag = "<h4 class='username_h4'><img class='user_tick' src='./images/default-user.png'/> " + name + "</h4>";
                message_tag = "<h4 class='message_h4'>" + message + "</h4><hr>";
                row = name_tag + message_tag;
                document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
}
getData();

function invitee() {
    window.alert("Share this room name to chat with everyone. Your room is " + room_store);
}

function logout_() {
    localStorage.removeItem("username");
    localStorage.removeItem("user_room");
    window.location = "index.html";
}