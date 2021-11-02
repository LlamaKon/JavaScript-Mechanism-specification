// 関数の外で定義された変数(外部変数)
let a = 0;
function b() {
    // 関数コンテキスト
    console.log(this, arguments, a);
    
}
//console.log(a);
b();