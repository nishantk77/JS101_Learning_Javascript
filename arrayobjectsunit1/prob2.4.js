//Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total
let arr=[
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]
let m;
let y;
let max=-Infinity
for(i=0; i<=arr.length-1; i++){

max=-Infinity

  for(j=0; j<=arr[i].students.length-1; j++){
   sum=0

  for(k=0; k<=arr[i].students[j].marks.length-1; k++){

    let m=arr[i].students[j].marks

    sum=sum+m[k]
    
  
}if(sum>max){
     max=sum
     y=arr[i].students[j].name
    z=arr[i]["grade"]
   } 
   
    


  }console.log(z+"-"+y+"-"+max)
}