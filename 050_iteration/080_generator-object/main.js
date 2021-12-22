/** ジェネレーター
 *  
 *      イテレーターを生成するための特殊な関数
 * 
 *      → より簡略化してイテレーターが生成可能
 * 
 *  function* gen() {
 *      if (ループ継続) {
 *          yield 値;
 *      }
 *      else {
 *          return 値;
 *      }
 *  }
 * 
 *  yield  -> done: false
 *            value: 値
 * 
 *  return -> done: true
 *            value: 値
 */

// ジェネレーター
function* gen() {
    yield 1;
    yield 2;
    return 3;
}

const it = gen();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// // このイテレーターをジェネレーターで定義
// function genIterator(max = 10) {
//     let i = 0;

//     // イテレーター
//     return {
//         next: function() {

//             if (i >= max) {
//                 return {
//                     done: true
//                 }
//             }
//             else {
//                 return {
//                     done: false,
//                     value: i++
//                 }
//             }
//         }
//     }
// }

function* genIterator(max = 10) {
    let i = 0;

    while(i < max) {
        yield i++;
    }
    return '終了'; // returnは省略できる
}

// イテレーターを生成
const it2 = genIterator();

let a = it2.next();
while(!a.done) {
    console.log(a.value);
    a = it2.next();
}

console.log('-----------------');


// Symbolのiteratorに対してgenIteratorを設定
const obj = {
    [Symbol.iterator]: genIterator
}

for (const i of obj) {
    console.log(i);
}

console.log('-----------------');


// イテレーターをそのまま使用
for (const i of genIterator()) {
    console.log(i);
}