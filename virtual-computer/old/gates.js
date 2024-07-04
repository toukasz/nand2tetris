import {nand, not, and, or, xor, mux, dmux, not16, and16, or16, mux16, or8way, mux4way16} from './nand.js'


console.log(xor(true, true));
console.log(xor(true, false));
console.log(xor(false, true));
console.log(xor(false, false));
console.log('\n');
console.log(not(true));
console.log(not(false));
console.log('\n');
console.log(dmux(true, true, false));
console.log(dmux(true, false, false));
console.log(dmux(false, true, false));
console.log(dmux(false, false, false));
console.log(dmux(true, true, true));
console.log(dmux(true, false, true));
console.log(dmux(false, true, true));
console.log(dmux(false, false, true));
console.log('\n');

console.log(not16([true, true, false, true, true, false]));
console.log(and16([true, true, true, true], [true, true, true, true]));
console.log(or16([true, true, false, false], [true, false, true, false]));

const a = [true, true, true, true, false, false, false, false,
		true, true, true, true, false, false, false, false];
const b = [false, true, false, true, false, true, false, true,
		false, true, false, true, false, true, false, true];

console.log(mux16(a, b, true));
console.log(or8way([false, false, false, false, false, false, false, false]));

console.log(and(true, true));

console.log(mux4way16(a, b, b, a, [false, false]));
