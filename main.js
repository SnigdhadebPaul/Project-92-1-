function Login(){
v1=document.getElementById("Player1").value;
v2=document.getElementById("Player2").value;
localStorage.setItem("v1",v1);
localStorage.setItem("v2",v2);
window.location="game_page.html";




}
