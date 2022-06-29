//Objects, spread and destructuring\

let dog = {
    doglegs:4,
    color: 'brown',
    name: 'Fido',
    age:5,
    bark(){
        console.log('Woof Woof')
    }
}
let {doglegs,color} = dog  //destructuring dog legs and color from the dog object

//console.log(dog.name)
//dog.bark()

for(let key in dog){  //using a For-in loop to loop through the keys within an object
    //console.log(key,dog[key])
}

let cat = {
    catlegs:3,
    age:3,
    name:'Binky',
    meow(){
        console.log('meow!')
    }
}

let catdog = {...dog,...cat}  //using the spread operator to combine the contents of the dog and cat object
console.log(catdog)


// A practical example of using the spread operator to merge 2 objects together
let user = {
    username:'Terra',
    lastPost : 'tuesday',
    numOfPosts: 10,
    id:101
}



let updatedUser = {
    username:'CoolPerson',
    lastPost:'wednesday',
    numOfPosts:11
}

let updates = {...user, ...updatedUser}
console.log(updates)


let age=100;
let type="kangaroo"
let location = "Australia";

let animalObj = {age, type, location};  //Object shorthand
console.log(animalObj)




let complexObj={
    id:0,
    nestedObj:{
        id:1,
        value:"I'm an inner Object"
    }
}


//an example of gaining access to a nested object
let {nestedObj} = complexObj;


//an example of gaining access to a nested object using a for-in loop
for(let item in complexObj){
    console.log(item, complexObj[item])
    if(typeof complexObj[item]==="object"){
        let nestedObj = complexObj[item];
        for(let nestedItem in nestedObj){
            console.log(nestedItem,nestedObj[nestedItem])
        }
    }
}


