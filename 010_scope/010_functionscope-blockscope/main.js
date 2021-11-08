function a() {
    // {}の中を関数スコープという
    let b = 0;
    console.log(b);
}

a();

// 関数の中で定義した変数を出力するとエラー
// console.log(b);


// {} -> ブロック
// ブロックスコープではletかconstのみ定義可能
// varで定義するとブロックスコープが無視されるため、非推奨
{
    let c = 1;
    console.log(c);

    const d = 0;
    console.log(d);

    var e = 10;
    console.log(e);

    function f() {
        console.log('f is called.')
    }

    f();

    // 関数を定義する際、ブロックスコープを有効にしたい場合
    const g = function() {
        console.log('g is called')
    }
    g();
}

// ブロックスコープ外で出力しようとするとエラー
// console.log(c);
// console.log(d);

// varはブロックスコープ外でもエラーが発生しない
console.log(e)

// functionはブロックスコープ外でもエラーが発生しない
f()

// 関数をconstで変数宣言したため、ブロックスコープ外で呼び出すとエラー
// g()