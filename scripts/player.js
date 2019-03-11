var Player = function (name,surname){

   this.name = name;
   this.surname = surname;

   this.fullName =  function(){
    return `${this.name} ${this.surname}`
   }

   this.score = function(){
     var s = new Quiz();
      return s.countResponseTrue
   }
   

}