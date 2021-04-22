
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyB11DD72vN38hOie0ertUuqquUex7aKHyU",
  authDomain: "kwitter-57196.firebaseapp.com",
  databaseURL: "https://kwitter-57196-default-rtdb.firebaseio.com",
  projectId: "kwitter-57196",
  storageBucket: "kwitter-57196.appspot.com",
  messagingSenderId: "694240187512",
  appId: "1:694240187512:web:27e673018d425f477d498d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";



function addRoom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"add room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
} 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name-"+Room_names);
        row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}

