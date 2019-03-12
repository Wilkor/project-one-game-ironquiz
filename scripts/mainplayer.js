
var p = new Player();

var btnGamePlayer = document.getElementById('gamePlayer');
var btnPlayerFunction = function () {
var nickname = document.getElementById("nickname").value
 p.nickname = nickname
 p.setCookie()
 
};

btnGamePlayer.addEventListener('click', btnPlayerFunction, false);