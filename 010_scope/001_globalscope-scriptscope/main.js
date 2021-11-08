// let, constはスクリプトスコープ
let a = 0;

// var, functionはグローバルスコープ
// windowオブジェクトに格納される
var b = 0;
function c() {}

// この行に処理が進むと処理が止まる
//debugger;

console.log(b);

// windowオブジェクトそのものがグローバルスコープ
window.d = 1;

console.log(d);