// コールバック関数
function hello() {
    console.log('hello');
}

// コールバック関数
function bye() {
    console.log('bye');
}

function fn(cb) {
    cb();
}


fn(hello);
fn(bye);


// コールバック関数
function hello2(name) {
    console.log('hello ' + name);
}

// 引数に値がある場合
function fn2(cb) {
    cb('Tom');
}

fn2(hello2);


// 無名関数定義
fn2(function(name) {
    console.log('hello ' + name)
})


// JavaScriptに準備されている標準の関数
// 第１引数にコールバック関数
// 第２引数に何ミリ秒待機するかを指定
setTimeout(hello, 2000);
setTimeout(bye, 3000);
setTimeout(hello2, 4000);