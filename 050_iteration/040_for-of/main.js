/** for...of
 * 
 *      イテレーターを持つオブジェクトの反復操作を行う
 * 
 *  イテレーター
 * 
 *      反復操作を行う際に使用するオブジェクト
 *      → 反復可能オブジェクト
 * 
 *      String, Array, Map, Set, arguments etc...
 */

const array = ['a', 'b', 'c'];

array[4] = 'e';

Object.prototype.method = function() {};

Object.defineProperty(array, 0, {enumerable : false});

const d = Object.getOwnPropertyDescriptor(array, 0);
console.log(d);

for (let v of array) {

    console.log(v);
}