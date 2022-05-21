function loginplayer(){
    p1 = document.getElementById("p1").value
    p2 = document.getElementById("p2").value

    localStorage.setItem("player1_name" , p1)
    localStorage.setItem("player2_name" , p2)

    window.location = "game_page.html"
}