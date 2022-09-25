//Given a string count the number of words in that string


let school="The Massai school is a transformation in education"


count=0


for(i=0; i<=school.length-1; i++){
if(school[i]===" "){

  count=count+1
}

  
} if(count>0){
  console.log(count+1)
}else{console.log(1)}
  



