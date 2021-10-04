console.log("Page loaded");
//TODO: Create an array
const arr = [1, 2, 3, 4, 5, 6, 7, { key: "value" }];
const arr1 = ["a", "b", "c", "d", "e", "f", "e", {}];
const arr2 = ["!", "@", "#", "$"];
console.log({ arr, arr1, arr2 });

//TODO: at method
/**
 * @desc it takes integer value and return the item at index.
 * Case1: if negative integer value then index start count from the last item of an array.
 * Case2: if index not found then return undefined
 * @param index value
 * @return item value
 */
console.log("at method");
console.log(`value of 1 index of arr is ${arr.at(1)}`); //output : value of 1 index of arr is 2
//Case1:
console.log(`value of -1 index of arr is ${arr.at(-1)}`); //output : value of -1 index of arr is [object Object]
// Case2;
console.log(`value of 1234 index of arr is ${arr.at(1234)}`); //output :value of 1234 index of arr is undefined

//TODO: concat method
/**
 * @desc it merge two or more array.
 * @param {*} two array
 * @return new merge array
 */
console.log("concat method");
console.log(`concat two array arr and arr1 ${arr.concat(arr1)}`); //output :concat two array arr and arr1 1,2,3,4,5,6,7,[object Object],a,b,c,d,e,f,e,[object Object]
console.log(`concat three array arr, arr1 and arr2 ${arr.concat(arr1, arr2)}`); //output : 1,2,3,4,5,6,7,[object Object],a,b,c,d,e,f,e,[object Object],!,@,#,$
