//Arrays, Rest and Destructuring
//             0      1     2
const arr = ['Cat', 'Dog','Bird'];
//console.log(arr);
arr.push('Fish')
//console.log(arr)

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
  //  console.log(`${i} ${element}`)
}

for(let item of arr){
  //  console.log(item)
}

let otherArr = ['Horse','Goat','Pig']

//Rest - to combine the contents of 2 arrays

let allArrs = [...arr,...otherArr]
console.log(allArrs)

//Destructuring

let [first, second, third] = otherArr;
console.log(first, second, third)

let randomArr = [1,'the', true , {class:'software engineering'}]; //javascript arrays can have data of any type