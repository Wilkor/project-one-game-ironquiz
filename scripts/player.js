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
   window.location.href = "game.html"

 }
 
 Player.prototype.getCookie = function () {


   var name = "ironquiz";
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
 
