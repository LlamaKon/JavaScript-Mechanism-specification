/** 「演算子」
 *
 *　　値（オペランド）を元に処理を行い、結果を返す記号
 * 
 */

let a = (1 + 2) * 3
console.log(a);


let b = 0;
let c = b++;
console.log(c);

let d = 0;
let e = ++d;
console.log(d);


function fn() {
    let a = 0;
    return a++;
}
console.log(fn() * 5);
console.log(!fn() * 5);
console.log(!(fn() * 5));


function fn2() {
    let a = 0;
    return ++a;
}
console.log(fn2() * 5);