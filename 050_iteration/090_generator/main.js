// // オブジェクト生成
// const items = {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3',
// }

// // イテレータ
// Object.prototype[Symbol.iterator] = function() {
//     // thisには上記のitemsを指す
//     const keys = Object.keys(this);
//     let i = 0;
//     let _this = this;
//     return {
//         next() {
//             let key = keys[i++];
//             return{
//                 value: [key, _this[key]],
//                 done: i > keys.length
//             }
//         }
//     }
// }

// ジェネレーターを使用して反復可能オブジェクトを定義
const items = {
        prop1: 'value1',
        prop2: 'value2',
        prop3: 'value3',
    }

Object.prototype[Symbol.iterator] = function*() {
    for (let key in this) {
        yield [key, this[key]];
    }
}

for (let [k, v] of items) {
    console.log(k, v);
}