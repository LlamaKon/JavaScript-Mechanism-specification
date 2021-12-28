import './moduleA.js';

// モジュールコンテキストではthisを使用できない
// モジュールのトップ階層のことをモジュールコンテキストという
console.log(this);

function fn() {
    console.log(this);
}

fn();

// オブジェクトからの呼び出しはthisは呼び出し元のオブジェクトを指す
const obj = {
    fn
}
obj.fn();


// モジュールスコープ

console.log(window.d);