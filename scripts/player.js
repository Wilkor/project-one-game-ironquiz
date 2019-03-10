var Player = function (name,surname){

   this.name = name;
   this.surname = surname;
   
   this.score = function(){
     var s = new Quiz();
      return {hits:s.countResponseTrue,mistakes:s.countResponseWrong}
   }
   

}