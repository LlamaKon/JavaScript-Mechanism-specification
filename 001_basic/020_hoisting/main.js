// 関数宣言より前で実行しても出力される
a();

function a() {
    // エラー発生
    // console.log(d);
    let d = 2;
    e();
    function e() {
        console.log('e is called');
    }
    console.log('a is called')
}
a();

// 変数宣言より前で実行してもundefinedが出力
console.log(b);
var b = 0;
console.log(b);


// let、constでの変数宣言の場合、
// 変数宣言前で実行するとエラーが発生する

//console.log(c);

let c = 1;

console.log(c);


// 無名関数宣言
// 無名関数の場合は宣言より前で実行すると
// 変数宣言としての挙動と同じになるため、エラーが発生する
const z = function() {
    
    console.log('no name function');
}
z();