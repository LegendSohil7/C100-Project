//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC9nEtn14qrIZrmsyTMMCAlYqhM8orzI_Q",
      authDomain: "c100-project.firebaseapp.com",
      databaseURL: "https://c100-project-default-rtdb.firebaseio.com",
      projectId: "c100-project",
      storageBucket: "c100-project.appspot.com",
      messagingSenderId: "292182596714",
      appId: "1:292182596714:web:f22fca714b416b63a4fe13"
    };
      firebase.initializeApp(firebaseConfig);
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}