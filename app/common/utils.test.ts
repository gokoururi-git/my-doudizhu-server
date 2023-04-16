import { isDecreaseArray, isIncreaseArray } from "./utils";

console.log('======= isIncreaseArray []', isIncreaseArray([]));
console.log('======= isIncreaseArray [1]', isIncreaseArray([1]));
console.log('======= isIncreaseArray [1,2,3,4,5,6,7,8]', isIncreaseArray([1,2,3,4,5,6,7,8]));
console.log('======= isIncreaseArray [8,7,6,5,4,3,2,1]', isIncreaseArray([8,7,6,5,4,3,2,1]));
console.log('======= isIncreaseArray [1,2,3,2,1,2,3,2]', isIncreaseArray([1,2,3,2,1,2,3,2]));
console.log('======= isDecreaseArray []', isDecreaseArray([]));
console.log('======= isDecreaseArray [1]', isDecreaseArray([1]));
console.log('======= isDecreaseArray [1,2,3,4,5,6,7,8]', isDecreaseArray([1,2,3,4,5,6,7,8]));
console.log('======= isDecreaseArray [8,7,6,5,4,3,2,1]', isDecreaseArray([8,7,6,5,4,3,2,1]));
console.log('======= isDecreaseArray [1,2,3,2,1,2,3,2]', isDecreaseArray([1,2,3,2,1,2,3,2]));