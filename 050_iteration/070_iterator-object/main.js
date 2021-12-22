// // オブジェクト生成
// const obj = {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3',
// }

// // オブジェクトはfor文が使用できないため、配列に変換
// const items = Object.entries(obj);

// // 配列をfor...ofで反復
// for (let item of items) {
//     console.log(item);
// }

// オブジェクト生成
const items = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
}

// イテレータ
Object.prototype[Symbol.iterator] = function() {
    // thisには上記のitemsを指す
    const keys = Object.keys(this);
    let i = 0;
    let _this = this;
    return {
        next() {
            let key = keys[i++];
            // ここでthisを出力するとnextが返る
            console.log(this);
            // 外で変数に入れておくとitemsの値を出力できる
            console.log(_this);
            return{
                value: [key, _this[key]],
                done: i > keys.length
            }
        }
    }
}

// 配列をfor...ofで反復
for (let [k, v] of items) {
    console.log(k, v);
}
