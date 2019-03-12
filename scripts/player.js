var Player = function (nickname){

   this.nickname = nickname;
 
   this.getNickName =  function(){
    return this.nickname
   }


   this.score = function(){
     var s = new Quiz();
      return s.countResponseTrue
   }
   

}


Player.prototype.setCookie = function setCookie() {

   var d = new Date();
   d.setTime(d.getTime() + (30*24*60*60*1000));
   var expires = "expires=" + d.toGMTString();
   document.cookie = this.getNickName() + "=" + this.getNickName() + ";" + expires + ";path=/";

 }
 
 Player.prototype.getCookie = function (cname) {
   var name = cname + "=";
   var decodedCookie = decodeURIComponent(document.cookie);
   var ca = decodedCookie.split(';');
   for(var i = 0; i < ca.length; i++) {
     var c = ca[i];
     while (c.charAt(0) == ' ') {
       c = c.substring(1);
     }
     if (c.indexOf(name) == 0) {
       return c.substring(name.length, c.length);
     }
   }
   return "";
 }
 
Player.prototype.checkCookie = function() {

   var user=getCookie(this.getNickName());
   if (user != "") {
     alert("Welcome again " + user);
   } else {
      user = prompt("Please enter your name:","");
      if (user != "" && user != null) {
        setCookie("username", user, 30);
      }
   }
 }