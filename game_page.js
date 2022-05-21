p1_name = localStorage.getItem("player1_name")
p2_name = localStorage.getItem("player2_name")

document.getElementById("p1_name").innerHTML = p1_name + " : "
document.getElementById("p2_name").innerHTML = p2_name + " : "

p1_score = 0
p2_score = 0

document.getElementById("p1score").innerHTML = p1_score
document.getElementById("p2score").innerHTML = p2_score

document.getElementById("p_qTurn").innerHTML = p1_name
document.getElementById("p_aTurn").innerHTML = p2_name

function send(){
    getword = document.getElementById("pWord").value
    word = getword.toLowerCase()

    charAt1 = word.charAt(1)
    middle = Math.floor(word.length/2)
    charAt2 = word.charAt(middle)
    last = word.length - 1
    charAt3 = word.charAt(last)

    remove1 = word.replace(charAt1 , "_")
    remove2 = remove1.replace(charAt2 , "_")
    remove3 = remove2.replace(charAt3 , "_")
    console.log(remove3)

    ques = "<h4 id='word'>Q. &nbsp"+remove3+"</h4>"
    ansbox = "<br><h5>Answer: <input type='text' placeholder='input' id='pWordEntered'></h5>"
    checkbutton = "<br><br><button onclick='check()' id='checkbutton' class='btn btn-info'>Check</button>"

    divcontents = ques + ansbox + checkbutton 
    document.getElementById("output").innerHTML = divcontents
    document.getElementById("pWord").value = ""
}

    questionTurn = "player1"
    answerTurn = "player2"

function check(){
    userAns = document.getElementById("pWordEntered").value
    ansUser = userAns.toLowerCase()

    if(ansUser == word){
        if(answerTurn == "player1"){
            p1_score = p1_score + 1
            document.getElementById("p1score").innerHTML = p1_score
        }

        else{
            p2_score = p2_score + 1
            document.getElementById("p2score").innerHTML = p2_score
        }
    }

    if(questionTurn == "player1"){
        questionTurn = "player2"
        document.getElementById("p_qTurn").innerHTML = p2_name
    }

    else{
        questionTurn = "player1"
        document.getElementById("p_qTurn").innerHTML = p1_name
    }

    if(answerTurn == "player1"){
        answerTurn = "player2"
        document.getElementById("p_aTurn").innerHTML = p2_name
    }

    else{
        answerTurn = "player1"
        document.getElementById("p_aTurn").innerHTML = p1_name
    }

    document.getElementById("output").innerHTML = ""
}