//Given a character in lower case print the upper case character

char="a"

arr_s=["a","b","c","d","e","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

arr_c=["A","B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


for(i=0; i<=arr_s.length-1; i++){

if(arr_s[i]===char){

  char=arr_c[i]
}

  
}console.log(char)