function sleep(val) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log(val++);
            resolve(val)
        }, val * 500);
    });
}

// 引数に指定したものが全て完了してから次の処理に進む
// Promise.all([sleep(2), sleep(3), sleep(4)])

// 引数に指定した一部の処理が終了したら次の処理が開始
// Promise.race([sleep(2), sleep(3), sleep(4)])

// 全ての処理を終えてから次の処理に進むが、
// 成功したか失敗したかが分からない（catchメソッドが無視される）
Promise.allSettled([sleep(2), sleep(3), sleep(4)])
.then(function(data) {
    console.log(data);
});
// sleep(0).then(function(val) {
//     /**
//      * 非同期の処理を繋げるには、thenメソッドの引数のコールバック関数のreturnに
//      * Promiseのインスタンスをセットする
//      */
//     return Promise.all([sleep(2), sleep(3), sleep(4)])
// }).then(function(val) {
//     return sleep(val);
// }).then(function(val) {
//     return sleep(val);
// }).then(function(val) {
//     return sleep(val);
// }).then(function(val) {
//     return sleep(val);
// })