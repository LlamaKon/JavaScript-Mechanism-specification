function a() {
    console.log('hello');
}


// 関数にプロパティやメソッドを追加できる
// -> 関数はオブジェクトであると言える
a.prop = 0;
a.method = function() {
    console.log('method');
}

// ()は実行可能なオブジェクトを意味する
a();

a.method();

console.log(a.prop);