
//obj 4 keys
//is correct/ 
let gradedObj = {
    answer1:true,
    answer2:true,
    answer3:true,
    answer4:false,
    
}
function func(obj){
  /* let counter =0;
   for (const key in obj) {
        if(obj[key]) counter++;
   }   
   let grade =counter/Object.keys(obj).length;
   return grade>=0.75*/
   let filteredObj =keys.filter(key=> obj[key])
   return (filteredObj.length/keys.length)>=.75
}
console.log(func(gradedObj))