//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDShwcUd7VIpC8dvbo3SP3QGXXPD8TIFo8",
    authDomain: "kwitter-ef6dd.firebaseapp.com",
    databaseURL: "https://kwitter-ef6dd-default-rtdb.firebaseio.com",
    projectId: "kwitter-ef6dd",
    storageBucket: "kwitter-ef6dd.appspot.com",
    messagingSenderId: "992031966850",
    appId: "1:992031966850:web:c1b41db8b7b2597bda569b",
    measurementId: "G-N2X09MQJPR"
};
const app = firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0,
    });
    document.getElementById("msg").value = "";

}



function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code
                      console.log(firebase_message_id);
                      console.log(message_data);

                      name = message_data['name'];
                      message = message_data['msg'];
                      like = message_data['like'];
                      //End code
                }
          });
    });
}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}