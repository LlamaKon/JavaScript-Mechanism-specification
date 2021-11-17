/* 「instanceof」

    どのコンストラクターから生成された
    オブジェクトかを確認するもの
*/ 

function F(a, b) {
    this.a = a;
    this.b = b;
    // 内部的に行われている処理
    const result = new Object();
    result.a = 1;
    return result;
    // return {a: 1};
}

// プロトタイプに対してメソッド作成
F.prototype.c = function() {}

// インスタンス作成
const instance = new F(1, 2);
// FはObjectを継承しているため、結果はtrueを返す
console.log(instance instanceof Object);

console.log(instance.__proto__ === Object.prototype);



function fn(arg) {
    if (arg instanceof Array) {
    // 配列が渡ってきた場合の値の格納
    arg.push('value');
    } else {
    // オブジェクトが渡ってきた場合の値の格納
    arg['key'] = 'value';
    }
    console.log(arg);
}

fn({});
fn([]);