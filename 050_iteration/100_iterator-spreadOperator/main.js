/** スプレッド演算子
 * 
 *      反復可能や列挙可能オブジェクトの展開を行う
 * 
 *      let a = [...array]
 * 
 *      {}, []の中で使用
 * 
 * 
 * 　残余引数
 * 
 *      実引数に渡された変数を配列にまとめる
 * 
 *      function(...args)
 * 
 *  スプレッド演算子はイテレーターの操作に従う     
 * 
 */

// 配列定義
const array1 = [1,2,3,4,5];

// スプレッド演算子
const array2 = [...array1];
console.log(array2);

// スプレッド演算子で作成した配列は元の配列とは別のものになる
console.log(array1 === array2);

// 同時に値を追加することなどが可能
const array3 = [...array2, 6,7]
console.log(array3);


// 可変長の引数を取る関数
function sum(...args) {
    let ret = 0;
    for(let v of args) {
        ret += v;
    }
    return ret;
}

const result = sum(1,2,3,4,5,6);
console.log(result);


// イテレーターとの関係
// スプレッド演算子 []を使用
const obj1 = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
}

Object.prototype[Symbol.iterator] = function*() {
    for (let key in this) {
        yield [key, this[key]];
    }
}

const array4 = [...obj1];
console.log(array4);


// イテレーターとの関係
// スプレッド演算子 {}を使用
Object.prototype[Symbol.iterator] = function*() {
    for (let key in this) {
        yield [key, this[key]];
    }
}

const array5 = {...obj1};
// オブジェクトの要素をそのまま出力
console.log(array5);