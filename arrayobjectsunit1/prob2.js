//Given a string print, the number of times each character appears



j=1
str="nishantntnti"
obj={}

for(i=0; i<=str.length-1; i++){

if(obj[str[i]]===undefined){
obj[str[i]]=1
  
}else{obj[str[i]]=(obj[str[i]]=obj[str[i]]+1)}
  
}console.log(obj)




  
