/**　「シンボル」
 * 
 *　　プロパティーの重複を避けるために
 *　　必ず一意の値を返す関数 
 *
 *　　プリミティブ型の値の１つ。 
 * 
 */



// シンボルを定義
// 引数には文字列を格納することができる
const s = Symbol('hello');
console.log(s);

// Symbolで同じ値を入れることは可能だが、
// 比較すると異なるものであると分かる
const s2 = Symbol('hello');
console.log(s);
console.log(s === s2);


const str = new String('Tom');
console.log(str);

String.prototype[s] = function() {
    return 'hello ' + this;
}

const tom = 'Tom';
console.log(tom[s]());