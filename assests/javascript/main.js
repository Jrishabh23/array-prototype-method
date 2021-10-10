console.log("Page loaded");
//TODO: Create an array
const arr = [1, 2, 3, 4, 5, 6, 7, { key: "value" }];
const number_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr1 = ["a", "b", "c", "d", "e", "f", "e", {}];
const arr2 = ["!", "@", "#", "$"];
const obj = { 0: "a", 1: "b", 2: "c", 3: "d" };
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

//TODO: The copyWithin()
/**
 * @desc shallow copies part of an array to another location in the same array and
 *       returns it without modifying its length.
 * @param integer value
 *         if negative integer then is start end of array
 *       mutable method
 * copyWithin(target)
 * copyWithin(target, start)
 * copyWithin(target, start, end)
 * @return modify array
 *
 */

console.log(`CopyWithin of -1 index ${arr.copyWithin(-1)}`); //[1,2,3,4,5,6,7,1]
console.log(`CopyWithin of 1 index ${arr.copyWithin(1)}`); //[ 1,1,2,3,4,5,6,7]
console.log(
    `CopyWithin of 1 index start 3 and end 4 ${arr.copyWithin(1, 3, 4)}`
); //[1,3,2,3,4,5,6,7]
console.log(
    `CopyWithin of 1 index start 3 and end 6 ${arr.copyWithin(1, 3, 6)}`
); //[1,3,4,5,4,5,6,7]

//TODO: Entries method
/**
 * @desc returns an array whose elements are arrays corresponding to the enumerable string-keyed property [key, value] pairs found directly upon object.
 */

console.log("Entries method", Object.entries(obj));
/**
 * output: 0: (2) ['0', 'a']
 * 1: (2) ['1', 'b']
 * 2: (2) ['2', 'c']
 */

console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
/**
 * * Converting object in to map
 * @desc  The new Map() constructor accepts an iterable of entries. With Object.entries, you can easily convert from Object to Map
 */
const map = new Map(Object.entries(obj));
console.log(`Object convert into map`, map);
/**
 * output :
 *  0: {"0" => "a"}
1: {"1" => "b"}
2: {"2" => "c"}
3: {"3" => "d"}
size: 4
 *  */

//TODO: every method
/**
 * @desc method tests whether all elements in the array pass the test implemented by the provided function.
 * @return boolean value
 *
 */
const is_number = (number) => {
    console.log(number);
}; //arr > 10;
console.log(
    `array is ${number_array} is all value less than 10`,
    number_array.every((number) => number < 10)
); // true
console.log(
    `array is ${number_array} is all value greater than 10`,
    number_array.every((number) => number > 10)
); // false

//TODO: fill method
/**
 * @desc Find method changes all element of array with static value, from start index to an end index.
 * @params
 * fill(value)
 * fill(value, start)
 * fill(value, start, end)
 * @return modified array. It will change the array itself and return it, not a copy of it.
 * *If start is negative, it is treated as array.length + start.
 * *If end is negative, it is treated as array.length + end.

 */
console.log(
    `replace all value with 4 in fill method [1, 2, 3, 4]`,
    [1, 2, 3, 4].fill(4)
); //output: [4, 4, 4, 4]
console.log(
    `replace first 2 value with 4 in fill method [1, 2, 3, 4]`,
    [1, 2, 3, 4].fill(4, 0, 2)
); //output: [4, 4, 3, 4]
/**
 * *Using fill() to populate an Empty Array
 */
let test = new Array(5).fill("new");
console.log(test); //output: ['new', 'new', 'new', 'new', 'new']

//TODO: filter method
/**
 * @desc It create new array with all element that pass the test implemented by provides function.
 * @param
 * filter((element) => { ... } )
 * filter((element, index) => { ... } )
 * filter((element, index, array) => { ... } )
 * @return new array
 *
 */
const filter_array = number_array.filter((value) => value > 6);
console.log(`filter array value with is greater than 6`, filter_array);

//TODO: constructor method
/**
 * @desc Property return a reference to the Object constructor function that created the instance object.
 * Case1: Property is a reference to the function itself, not a string containing the function itself.
 * The value is only read-only for primitive values such as 1, true, and "test".
 * * All object have constructor property except if you create object like object.create(null)
 * case 1 :
 * * The changing the constructor property does not affect the instanceof operator.
 * case2: If the object is sealed/frozen then the change has no effect and no exception is thrown:
 * @param {*} two array
 * @return new merge array
 */
console.log("constructor method");
console.log(`arr is instance of ${arr.constructor.name}`); // arr is instance of Array
let newArr = {};
console.log({ newArr }, `newArr is instance of ${newArr.constructor.name}`);
//output: newArr is instance of Object
function first(parameter) {
    console.log(`This is first function ${parameter}`); //output: This is first function testConstructor
}
let fun = new first("testConstructor");
console.log(`fun constructor name is ${fun.constructor}`);
/** 
 *  output: fun constructor name is function first(parameter) {
        console.log(`This is first function ${parameter}`);
    } 
*/

//Case 1
let a = [];
console.log({ a }, `a is constructor of ${a.constructor.name}`); //output: a is constructor of Array
/**
 * * You can change constructor name but not change instanceof.
 */
a.constructor = String;
console.log(`a is constructor of ${a.constructor.name}`); //output: a is constructor of String
console.log(`a is constructor of String ${a.constructor === String}`); //output : true
console.log(`a is instanceof String ${a instanceof String}`); //output: false
console.log(`a is instanceof String ${a instanceof Array}`); //output: true
//Case 2
let b = Object.freeze({});
console.log("If object b is freeze and constructor name ", b.constructor.name); // output: If object b is freeze and constructor name  Object

b.constructor = String;
/**
 * * If object is freeze than you can not change constructor name
 */
console.log(`b is constructor of ${b.constructor.name}`); //output: b is constructor of Object
console.log(`b is constructor of String ${b.constructor === String}`); //output : b is constructor of String false
console.log(`b is instanceof String ${b instanceof String}`); //output: b is instanceof String false
console.log(`b is instanceof String ${b instanceof Object}`); //output: b is instanceof String true

//TODO: find Method
/**
 * @desc return the value of first element in provided array that satisfies test condition
 * *
 */

const found = arr.find((element) => element > 5);
console.log(`In find method return value is greater than 5`, found);

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];
function isCherries(fruit) {
    return fruit.name === "cherries";
}

console.log(inventory.find(isCherries)); // { name: 'cherries', quantity: 5 }
//using arrow function
const result = inventory.find(({ name }) => name === "cherries");
console.log(result); // { name: 'cherries', quantity: 5 }
/**
 * * Difference b/w filter and find
 * Find return only one element that pass test condition and filter return array of element that pass condition.
 * Find return only object and filter return array of object
 */

//TODO: findIndex method
/**
 * @desc method return first index of provide array that satisfy test condition.
 * *  It return -1 if no element passed test condition.
 */

const index = arr.findIndex((element) => element > 5);
console.log(`findIndex return index if value is greater than 6`, index);
//output: findIndex return index if value is greater than 6 6
const ind = arr.findIndex((element) => element > 15);
console.log(`findIndex return index if value is greater than 6`, ind);
//output: findIndex return index if value is greater than 6 -1

//TODO: flat method
/**
 * @desc It create a new array with all sub-array elements concatenated into into it recursively up to the specified depth.
 * @param flat()
 * @param flat(depth) depth is like that how much label you want to array flat
 * like arr2F is depth 2 and 3 so check diff in below line
 */
const arr1F = [0, 1, 2, [3, 4]];
console.log(arr1F.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2F = [0, 1, 2, [[[3, 4]]]];
console.log(arr2F.flat(2));
// expected output: [0, 1, 2, [3, 4]]
console.log(arr2F.flat(3));
// expected output: [0, 1, 2, 3, 4]

//TODO: flatMap method
/**
 * @desc The flatMap method is identical to a map followed by a call to flat of depth 1.
 */
let arr1M = [1, 2, 3, 4];
arr1M.map((x) => [x * 2]);
// [[2], [4], [6], [8]]
arr1M.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]
// only one level is flattened
arr1M.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]

//TODO: isArray Method
/**
 * @desc it determine whether the passed value is an array or not.
 *
 *  */
console.log(
    `isArray determine the array is [1, 2, 3]`,
    Array.isArray([1, 2, 3])
); // true
console.log(
    `isArray determine the array is { foo: 123 }`,
    Array.isArray({ foo: 123 })
); // false
console.log(
    `isArray determine the array is ("foobar"); `,
    Array.isArray("foobar")
); // false
console.log(
    `isArray determine the array is (undefined);`,
    Array.isArray(undefined)
); // false

//TODO: join method
/**
 * @desc returns a new string by concatenating all of the elements in an array
 */
const elements = ["Fire", "Air", "Water"];
console.log(`element join with space`, elements.join());
// expected output: "Fire,Air,Water"
console.log(`element join with space`, elements.join("___"));
// element join with space Fire___Air___Water
/**
 * * Joining an array-like object
 *
 */
function f(a, b, c) {
    var s = Array.prototype.join.call(arguments);
    console.log(s); // '1,a,true'
}
f(1, "a", true);
//expected output: "1,a,true"

//TODO: pop method
/**
 * @desc method return last element of an array and return that element
 */

console.log(arr.pop()); // o/p : 7
/**
 * *Using apply( ) or call ( ) on array-like objects
 * In object you add length key
 */
var myFish = {
    0: "angel",
    1: "clown",
    2: "mandarin",
    3: "sturgeon",
    length: 4,
};
var popped = Array.prototype.pop.call(myFish); //same syntax for using apply( )
console.log(myFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3}
console.log(popped); // 'sturgeon'

//TODO: push method
/**
 * @desc push method  add new element in end of array
 */
const animals = ["pigs", "goats", "sheep"];
const count = animals.push("cows");
console.log(count); // o/p: ["pigs", "goats", "sheep", "cows"]
//**Adding elements to an array
let sports = ["soccer", "baseball"];
let total = sports.push("football", "swimming");
console.log(`add two element in array using push`, sports); //o/p: ['soccer', 'baseball', 'football', 'swimming']
console.log(`When push element it save length of `, total);
//** merging two array
let vegetables = ["parsnip", "potato"];
let moreVegs = ["celery", "beetroot"];
// Merge the second array into the first one
vegetables.push(...moreVegs);
console.log(`merging two array`, vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']

//TODO: shift method
/**
 * @desc shift method remove the first element of an array and return that element
 */

const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(`remove element using shift`, array1, `element is `, firstElement);
// expected output: remove element using shift (2) [2, 3] element is  1

//TODO: unshift method
/**
 * @desc it add element in array at the starting of array
 */
const array11 = [1, 2, 3];
console.log(`array11 using unshift method`, array11.unshift(4, 5)); // it return length 5
console.log(`array11 using unshift method`, array11); // [4, 5, 1, 2, 3]

//TODO: splice method
/**
 * @desc method changes the contents of an array by removing or replacing existing elements and/or adding new elements
 * * insert and remove element at specific position
 * @param splice(start) //Remove all elements, starting from index 'start'
 * @param splice(start, deleteCount) // Remove elements, from start index and delete number of element after index deleteCount
 * @param splice(start, deleteCount, item1...) // Remove elements, from start index and delete number of element after index deleteCount, and add item
 */

const months = ["Jan", "March", "April", "June"];
//console.log(months.splice(1)); //o/p: It remove first element in the array
//console.log(months.splice(2)); // It remove start two element in the array
// console.log(months.splice(1, 1)); // it remove first element and show only one item
// console.log(months.splice(1, 2)); // it remove first element and show only two item

//* Remove 0 (zero) elements before index 2, and insert "drum"
let myFishes = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFishes.splice(2, 0, "drum");
//it remove zero element and add element on index 2 position
console.log(myFishes); // o/p : ["angel", "clown","drum", "mandarin", "sturgeon"]
removed = myFishes.splice(2, 0, "drum", "anu", "tanu");
console.log(myFishes); // o/p: ['angel', 'clown', 'drum', 'anu', 'tanu', 'drum', 'mandarin', 'sturgeon']

//* remove element at particular index
//console.log(myFishes.splice(3, 1)); //It remove one element at index 3
console.log(myFishes.splice(3, 3)); // It remove three element at after index three

//TODO: sort method
/**
 * @desc sort the element of array and return the sorted array
 */
