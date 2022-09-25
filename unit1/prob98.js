//Given 3 numbers (all different values), print which is greatest

a=21
b=75
c=15

if(a>b && a>c){
  console.log("a is greater")
  
}else if(b>a && b>c){
  console.log("b is greater")
  
}else{
  console.log("c is greater")
}

a>b && a>c? console.log("a is greater")
  : b>a && b>c ? console.log("b is greater")
: console.log("c is greater")

