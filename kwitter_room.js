function addRoom() {
    
    room_value = document.getElementById("add_room").value;
   firebase.database().ref("/").child(room_value).update({ 
         purpose : "adding room name"
   });   
   localStorage.setItem("room_name", room_value)
};

var get_user = localStorage.getItem("User");
document.getElementById("welcome_user").innerHTML = "Welcome " + get_user;


function getData() 
{firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>";
//End code
});});}
getData();
