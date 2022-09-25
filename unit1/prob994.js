//Print the average of even numbers from 1 to 100 (both included)



sum=0;
count=0;

i=1
while(i<=100){
if(i%2==0){
sum=sum+i
  count=count+1
  
}
i++
  
}
avg=sum/count;


console.log(avg)