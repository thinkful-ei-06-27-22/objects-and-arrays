function add(a = 0, b = 0) {
    console.log(a + b)
}
//add(8,3)

let arr = [1, 2, 3]

function getSum(nums = []) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    console.log(total);
}
getSum();





const cart = [
    {
        name: "Black Longline T-Shirt",
        priceInCents: 1500,
        size: "M",
        quantity: 2,
    },
    {
        name: "Light Wash Stretch Skinny Jeans",
        priceInCents: 6000,
        size: 32,
        quantity: 1,
    },
];
const options = { discountPercentage: 0.1, salesTax: 0.07 };


function calculateTotal(products=[], {discountPercentage=.1, salesTax=0.0825}={}) {
    let total = 0;
    for (let product of products) {
       let {priceInCents,quantity} = product;
        total+= priceInCents * quantity;
    }

    if(discountPercentage) total *= 1- discountPercentage;

    return total * (1+salesTax);
}

console.log(calculateTotal(cart,options))