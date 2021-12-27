/**
 * Await / Async
 * 
 *      Promiseを更に直感的に記述できるようにしたもの
 * 
 * Async
 * 
 *      Promiseを返却する関数の宣言を行う
 * 
 * Await
 * 
 *      Promiseを返却する関数の非同期処理が完了するまで待つ
 * 
 */


function sleep(val) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log(val++);
            resolve(val)
        }, 1000);
    });
}

// 関数の中でawaitを使用している場合は関数名の前にasyncを使用する
// async関数はPromiseのインスタンスがそのまま返される
async function init() {

    // awaitを使用するとnew Promiseの中のresolveの引数が変数に代入される
    // awaitを使用しないと、Promiseのインスタンスが返される
    // awaitはasync関数の中でしか使用できない
    let val = await sleep(0);
    val = await sleep(val);
    val = await sleep(val);
    val = await sleep(val);
    val = await sleep(val);

    // throw new Error();

    // awaitを使用したため、以下の記述が先に実行されることはない
    return val
}

// then
init().then(function(val) {
    console.log('hello ' + val);
}).catch(function() {
    console.log('error');
})
