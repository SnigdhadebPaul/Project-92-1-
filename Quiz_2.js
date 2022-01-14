function Back(){
window.location="Quiz_2.html";




}
function getscore(){
var score= localStorage.getItem("param");
document.getElementById("update").innerHTML=score;






}