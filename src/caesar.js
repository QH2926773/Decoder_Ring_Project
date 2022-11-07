// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    let alphabet="abcdefghijklmnopqrstuvwxyz"
    let message=""
    //check for false returns
    if(!shift||shift<-25||shift>25){
      return false
    };
    if(encode===false){
      shift=-shift
    };
   for(let i=0;i<input.length;i++){
     //ignore capital letters
     let char=input[i];
     char=char.toLowerCase();
 
     let newIndex=alphabet.indexOf(char)
     //check if the input includes any symbol and spaces
     if(newIndex===-1){
       message+=char
       continue 
     }
     //allow for nagetive shift to shift left
     newIndex+=shift;
     if(newIndex<0){
     newIndex+=26
     }
     
     if(newIndex<alphabet.length){
       message+=alphabet[newIndex]
     }else{
       let shiftedIndex=newIndex-alphabet.length
       message+=alphabet[shiftedIndex]
     }
   } return message
   
    
    }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
