/*
 * @Author: wangyunbo
 * @Date: 2021-05-19 08:54:52
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-05-19 09:07:53
 * @Description: file content
 * @FilePath: \vue3ts\readMe\ts\basicType.ts
 */
// Boolean
let isDone: Boolean = false;

// Number
// TypeScript里的所有数字都是浮点数或者大整数。浮点数类型（number）,大整数类型（bigint）。
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let bigLiteral: bigint = 100n;

// String
let username: string = "bob";
username = "smath";

// Array
// 两种定义数组的方式：
// 1： 在元素类型后面接上[]
let list: number[] = [1, 2, 3];
// 2: 使用数组泛型, Array<元素类型>
let list2: Array<number> = [1, 2, 3];

// Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let x: [string, number];
x = ['hello', 10]; // correct
x = [10, 'nihao']; // error

