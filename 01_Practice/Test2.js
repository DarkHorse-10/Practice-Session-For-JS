const myArr = [0,1,2,3];

// const newArr = [10, 'Suman', true, myArr];

// console.log(newArr);
// newArr.push('cool');
// console.log(newArr);
// newArr.pop();
// console.log(newArr);
// newArr.unshift(7); // push at 0 index
// console.log(newArr);
// newArr.shift(); // pop at 0 index
// console.log(newArr); 

// const newArr2 = newArr.join() // 10,Suman,true,0,1,2,3 
// console.log(newArr2, typeof newArr2); // string


// console.log('1', myArr); // 0,1,2,3

// const myArrWithSlice = myArr.slice(1,3);
// console.log('2', myArr); // 0,1,2,3
// console.log('3', myArrWithSlice); // 1,2

// const myArrWithSplice = myArr.splice(1,3);
// console.log('4', myArr); // 0
// console.log('5', myArrWithSplice); // 1, 2, 3


// const myNewArr = [4,5,6,7]

// const newArr = myArr.concat(myNewArr);
// console.log(newArr); // [ 0, 1, 2, 3, 4, 5, 6, 7 ]

// const newArr = [...myArr, ...myNewArr]  //spread operator -- can add upto any numbers of array
// console.log(newArr); // [ 0, 1, 2, 3, 4, 5, 6, 7 ]


// const bigIndepthArray = [1,2,[3,4],5,6,[7,8,[9,10]]]

// console.log(bigIndepthArray.flat(Infinity)); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

console.log(Array.from('SUMAN')); // [ 'S', 'U', 'M', 'A', 'N' ]

let a = 1;
let b = 2;
let c = 3;
console.log(Array.of(a,b,c)); // [1,2,3]
console.log(Array.isArray(myArr)); // true