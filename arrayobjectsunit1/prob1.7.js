//Problem 2: Print Prime Numbers from 1 to given limit

for(i=1; i<=100; i++){
count=0
for(j=1; j<=100; j++){

  if(i%j===0){
    
count=count+1}
  
    
    }
  if(count==2){
      console.log(i)
  }
}


