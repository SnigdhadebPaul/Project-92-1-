var score = 0;
function Update() {
    score = score + 1;
    document.getElementById("h2").innerHTML = score;

}
function Save(){
   localStorage.setItem("param",score);
}
function Next(){
window.location="Quiz_2";



}
