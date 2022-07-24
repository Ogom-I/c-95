function addUser() {
    window.location = "kwitter_room.html"
    var user_name = document.getElementById("User_name").value;
    localStorage.setItem("User", user_name )
}