//Pass By Reference
let arr = [1,2,3];

function updateArr(list){
    list.push('newItem');
}
updateArr(arr);
console.log(arr);

const myObj = {id:1, type:'object'};
function updateObj(obj){
    obj.newProp = 'I am a new prop';
    obj['newProp'] = 'I am a new prop';
}
updateObj(myObj);
console.log(myObj)

//Pass By Value

let num =0;
function updateNum(val){
    val=1
}
updateNum(num);
console.log(num)




//Ways to write functions

function funcA(){
    console.log('this is funcA');
}
const funcB=function(){
    console.log('this is funcB');
}

const funcC = ()=>/*return*/'hello'
console.log(funcC())

const funcD = param => console.log(param);
funcD('Hello World')

const funcE = (param1, param2)=> console.log(param1, param2);