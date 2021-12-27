/**
 *  プロミスチェーン
 * 
 *      Promiseを使って非同期処理を順次実行すること
 * 
 */

// // 書きの記述をPromiseに変換
// function sleep(callback, val) {
//     setTimeout(function() {
//         console.log(val++);
//         callback(val);
//     }, 1000);
// }


function sleep(val) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log(val++);
            resolve(val)
        }, 1000);
    });
}

sleep(0).then(function(val) {
    /**
     * 非同期の処理を繋げるには、thenメソッドの引数のコールバック関数のreturnに
     * Promiseのインスタンスをセットする
     */
    return sleep(val);
}).then(function(val) {
    return sleep(val);
}).then(function(val) {
    return sleep(val);
}).then(function(val) {
    return sleep(val);
}).then(function(val) {
    return sleep(val);
})
