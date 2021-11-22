/**　「ラッパーオブジェクト」
 * 
 *　　プリミティブ値を内包するオブジェクト
 * 
 */


const a = new String('hello');
console.log(a);
console.log(a.toUpperCase());


//プリミティブ型の値を扱うときは、暗黙的にラッパーオブジェクトが呼ばれている
// const a = 'hello'.toUpperCase();
// console.log(a);

const b = new Number(100);
console.log(b);
console.log(b.toExponential());
