function add_student(){
    username= document.getElementById("username".value);
    localStorage.setItem("username",username);
    window.location="fairy_room.html";
    
}