/** for...in
 * 
 *      列挙可能プロパティーに対して順不同で
 *      反復処理を実行する
 * 
 *      プロトタイプチェーン内も列挙対象となる
 *      → Object.hasOwnProperty()
 * 
 *  Symbolとfor...in
 * 
 *      Symbolで定義したプロパティーはfor...inで
 *      列挙対象にならない
 */

const s = Symbol();
const obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    // []を使用することで変数をキーとして使用できる
    [s]: 'value4',
}


/** メソッドを列挙対象から外す
 * 
 *  第１引数 -> メソッドが格納されているオブジェクト
 *  第２引数 -> 列挙対象から外す対象
 *  第３引数 -> どのような設定にするのかオブジェクトで渡す
*/
Object.prototype.method = function() {}
Object.defineProperty(Object.prototype,'method', {enumerable: false} );



// getOwnPropertyDescriptorで宣言しているものは列挙対象にはならない
const d = Object.getOwnPropertyDescriptor(Object.prototype, 'hasOwnProperty');
console.log(d);

// objのprop1を列挙対象から外す
Object.defineProperty(obj,'prop1', {enumerable: false} );


/** 自分自身ではないものは列挙対象から外す方法
 *  
 *      → if文を使用 
 */
// for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//         console.log(key, obj[key]);
//     }
// }


for (let key in obj) {
        console.log(key, obj[key]);
}

const e = Object.getOwnPropertyDescriptor(obj, s);
console.log(e);