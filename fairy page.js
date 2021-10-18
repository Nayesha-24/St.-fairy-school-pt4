var firebaseConfig = {
    apiKey: "AIzaSyCxQsaxcl4YcYfGgTvRxus7F1rNG0Prkms",
    authDomain: "project-st-fairy-school.firebaseapp.com",
    databaseURL: "https://project-st-fairy-school-default-rtdb.firebaseio.com",
    projectId: "project-st-fairy-school",
    storageBucket: "project-st-fairy-school.appspot.com",
    messagingSenderId: "569657487046",
    appId: "1:569657487046:web:b3511298468a721e5331c7",
    measurementId: "G-6QP6916B4R"

    var app = initializeApp(firebaseConfig);
  };

  username=localStorage.getItem("user_name");
  roomname=localStorage.getItem("room_name");

  function send(){
   msg= document.getElementById ("message").value ;
   firebase.database( ).ref(room_name).push({
         name:user_name,
         message: msg,
         like:0


   });
   document.getElementById('message').value="";
   


  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
