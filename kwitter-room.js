
//ADD YOUR FIREBASE LINKS HERE
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
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
  }
  localStorage.setItem("room_name", room_name);
  

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log("Room name" + Room_names);
    row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}

getData();


function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter-page.html"; 
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}


