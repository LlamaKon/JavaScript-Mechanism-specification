// プリミティブ型の値は互いに影響を受けることはない
let a = 0;

function fn1(arg1) {
    arg1 = 1;
    console.log(a, arg1);
}

fn1(a);

// 上記の関数は以下の記述と同じ処理を行なっている

let arg2 = a;
arg2 = 1;
console.log(a, arg2);


// オブジェクトの値は互いに影響を受ける
let b = {
    prop: 0
}

function fn2(arg3) {
    arg3.prop = 1;
    console.log(b, arg3);
}

fn2(b);



function fn3(arg3) {
    arg3 = {};
    console.log(b, arg3);
}

fn3(b);