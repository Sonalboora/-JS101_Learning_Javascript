//Problem 3 : Given an array of numbers find the average of all the even numbers.
let sum=0;
let c=0
let a=[1,2,3,4,5];
for(let i=0;i<a.length;i++){
  if(i%2==0){
    sum+=a[i];
    c++;
    
  }
}
console.log(sum/c)