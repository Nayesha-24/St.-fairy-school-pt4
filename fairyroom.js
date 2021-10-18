const firebaseConfig = {
    apiKey: "AIzaSyCxQsaxcl4YcYfGgTvRxus7F1rNG0Prkms",
    authDomain: "project-st-fairy-school.firebaseapp.com",
    databaseURL: "https://project-st-fairy-school-default-rtdb.firebaseio.com",
    projectId: "project-st-fairy-school",
    storageBucket: "project-st-fairy-school.appspot.com",
    messagingSenderId: "569657487046",
    appId: "1:569657487046:web:b3511298468a721e5331c7",
    measurementId: "G-6QP6916B4R"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addroom()
    {
     room_name= document.getElementById("roomname").value;
     firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
     });
     localStorage.setItem("roomname" , room_name);

    window.location="kwitter_page.html";

     }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names +" onclick='redirect_to_roomname(this.id)' >#"+Room_names + " <div> <hr>";
      document.getElementById("output").innerHTML=row;
      

      //End code
      });});}
getData();

function redirect_to_roomname(name){
      console.log(name);
      localStorage.setItem("roomname",name)
      window.location="fairy_page.html";
}


