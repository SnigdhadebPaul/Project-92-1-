player1name = localStorage.getItem("v1");
player2name = localStorage.getItem("v2");
player1score = 0;
player2score = 0;
document.getElementById("player1name").innerHTML = player1name + ":";
document.getElementById("player2name").innerHTML = player2name + ":";

document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;

document.getElementById("player_question").innerHTML = "Question Turn-" + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn-" + player2name;

function send() {
    var v1 = document.getElementById("word").value;
    var word = v1.toLowerCase();

    var A1 = word.charAt(1);
    var v2 = Math.floor(word.length / 2);
    var A2 = word.charAt(v2);
    var v3 = word.length - 1;
    var A3 = word.charAt(v3);
    var v4 = word.replace(A1, "_");
    var v5 = v4.replace(A2, "_");
    var v6 = v5.replace(A3, "_");

    question_word = "<h4 id='word_display'> Q. " + v6 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";




}
var question_turn = "player_1";
var answer_turn = "player_2";
function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    if (answer == word) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    } if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}
