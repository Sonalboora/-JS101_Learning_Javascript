//Given an array find the unique items in the array
let arr=["sonal","renu","neeraj","moohit","renu","moohit","neeraj"]
let obj={}
for(let i=0;i<arr.length;i++){
  obj[arr[i]]=1;
  
}
console.log(obj)