// 再宣言
let a = 0;
const b = 0;
var c = 0;
// let, constの再宣言は不可能
// let a = 0;
// const b = 0;

// varは再宣言可能
var c = 1;


// 再代入
let d = 0;
d = 1;

// constは再代入不可能
const e = 0;
// e = 1;


// ブロックスコープ
{
    let f = 0;
    const g = 0;
    var h = 0;
}


// varのみブロックスコープの外から参照可能
// console.log(f);
// console.log(g);
console.log(h);


// ホイスティング

// let, constは宣言より前に出力しようとするとエラー
// console.log(i);
// console.log(j);
console.log(k);

let i = 0;
const j = 0;
var k = 0;