function fn(a, b) {
    console.log(a, b);
}

// 同じ名前で関数が定義されている場合は、
// 後に定義された関数を優先する
// (引数の数が違っても関係ないs)
function fn(a) {
    console.log(2);
}

// JavaScriptでは引数の順番に注意
fn(0,1);

// 引数が２つ定義されている関数に対して１つだけ値を与えると、
// ２つ目の引数に対応する値はundefinedになる
fn(1);
// 2つ目の引数のみ出力したい場合は、1つ目にnullを入れる方法もある
fn(null, 1);


function fn2(a, b=2) {
    console.log(a, b);
}

// 引数の値にデフォルト値を設定している場合は
// デフォルトの値が出力される
fn2(1);

fn2(1,5);



function fn3() {
    const a = arguments[0];
    const b = arguments[1];
    console.log(arguments);
    console.log(a, b);
    return a;
}

fn3(1, undefined);
let c = fn3(1, 5);
console.log(c);

