
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBU1HDTV2zwDqQJEafdw6HYkP90SMLNDJo",
      authDomain: "kwitter-c0a24.firebaseapp.com",
      databaseURL: "https://kwitter-c0a24-default-rtdb.firebaseio.com",
      projectId: "kwitter-c0a24",
      storageBucket: "kwitter-c0a24.appspot.com",
      messagingSenderId: "850844850546",
      appId: "1:850844850546:web:6d1ea5050e183e177165eb"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "Welcome "+user_name
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       Room_names = childKey;
      //Start code
         console.log("Room Nme - " + Room_names);
         row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#" + Room_names+"</div><hr>";
         document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
