/*[
	{name: "Nrupul", age: 32},
	{name: "Prateek" , age: 30},
	{name: "Aman" , age: 26},
	{name: "Albert" , age: 28},
	{name: "Yogesh" , age: 44},
]*/



let name =["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
age=[32, 30, 26, 28, 44]

arr=[]
for(i=0; i<=name.length-1; i++){
obj={}

  obj["name"]=name[i]
  obj["age"]=age[i]

 arr.push(obj)
  
}

for(j=0; j<=arr.length-1; j++){

  if(arr[j]["age"]>30){
  
  console.log(arr[j]["name"])   
  }
  
  
}