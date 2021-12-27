function a(b) {

    // 第２引数に秒数の指定がないため、コールスタックに何もない状態になるまで待機
    setTimeout(function task1() {
        console.log('task1 done');
        b();
    });

    console.log('fn a done');
}

function b() {
    console.log('fn b done');
}

a(b);

// b();