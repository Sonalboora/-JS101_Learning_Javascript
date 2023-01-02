//Problem 1 : Given a string count the number of words in that string
let str="sonal renu neeraj mohit"
let space=0
for(let i=0;i<str.length;i++){
  if(str[i]==" "){
    space++
  }
}
console.log("words:",space+1)