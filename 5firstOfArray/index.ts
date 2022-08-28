// 判断是否说空数组
type First1<T extends any[] > = T extends [] ? never : T[0];

// 判断数组长度
type First2<T extends any[] > = T['length'] extends 0 ? never : T[0];

type First3<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 看看能不能解构出一个F，如果不能返回一个never
type First4<T extends any[]> = T[0] extends [infer F, ...infer Rest] ? F: never;
// 

type ages = [1,2,3];

type a =  ages[number]; // 获取一个联合类型

type t2 = ages[0] extends ages[number] ? true: false;
// 知识点
/** 
 * 1. extends 类型条件判断
 * 2. 获取tuple 的length 属性    （indexed)
 * 3 extends union  判断的规则
 * 4. inter 的使用 （推断)
 * 
 * 
 * 
 */