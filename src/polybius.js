// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  
   const square=[
     ["A","B","C","D","E"],
     ['F','G','H','I/J','K'],
     ['L','M','N','O','P'],
     ['Q','R','S','T','U'],
     ['V','W','X','Y','Z']
  
   ]
  function polybius(input, encode = true) {
    let encodestr=""
    // your solution code here
  if(encode){
  
       //turn the word into an array of letters and convert each of them
   input=input.toUpperCase().split("");
    
   input.forEach((letter)=>{
     //translate both i and j to 42
     if(letter==='I'||letter==='J')encodestr+=42
     //should leave the space as is
     else if(letter===" "){
           encodestr+=" "
         }
     //find each letter in the 2d array of square
     else{
       for(let row=0;row<5;row++){
       for(let col=0;col<5;col++){
         if(letter===square[row][col]){
           encodestr+=`${col+1}${row+1}`
         
         }      } 
       }
     }
   })}
    //decoding
    
    if(!encode){
      //put every two digits of the number together 
     if(input.split(" ").join("").length%2===1)return false
     for(let char=0;char<input.length;char+=2){
           
           if(input[char].includes(" ")){
         
         encodestr+=input[char]
         
         char--
         continue
       }   
       const col=input[char]
       const row=input[char+1]
      
       encodestr+=square[row-1][col-1]
    
       
   }}
    return encodestr.toLowerCase()
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
