/**
 *  Promise
 * 
 *      非同期処理をより簡単に、可読性が上がるように書けるもの
 * 
 *      Promiseの引数にはコールバック関数を引数に取る
 * 
 *      第１引数 -> resolve
 *      第２引数 -> reject
 * 
 *      ※ resolveが呼ばれた場合、thenメソッドのコールバック関数が実行される。
 *        resolveで渡した実引数が値としてthenメソッドの引数に渡る。
 * 
 * 　　　※ Promiseのコールバックで何らかのエラーが発生した場合に、
 *        Promiseに知らせるために、rejectが呼ばれる
 *        rejectで渡した実引数が値としてcatchメソッドの引数に渡る
 * 
 *      ※ finnalyメソッドは終了処理を記述
 *        finnalyのコールバック関数には引数を指定することはできない
 * 
 *      new Promise(function(resolve, reject){
 *          同期処理
 *      }).then(
 *          非同期処理（resolveを待つ）
 *      ).catch(
 *          非同期処理（rejectを待つ）
 *      ).finnaly(
 *          非同期処理（resolve or rejectを待つ）
 *      );
 * 
 */

// // Promiseの基本構文
// new Promise(function(resolve, reject) {

//     console.log('promise');
//     // resolve('hello');
//     reject('bye');
// // thenは非同期処理のため、コールスタックが空になってから実行される
// }).then(function(data) {
//     console.log('then ' + data);
//     return data;
//     // エラーが発生するとcatchメソッドに渡る（2回目のthenメソッドは実行されない
//     // throw new Error();
// }).then(function(data) {
//     console.log('then ' + data);
//     return data;
// }).catch(function(data) {
//     console.log('catch ' + data);

// // finallyには引数を渡すことができない 
// }).finally(function(data) {
//     console.log('finnaly: ' + data);
// })

// console.log('global end');



// PromiseにsetTimeoutを組み込む
new Promise(function(resolve, reject) {

    console.log('promise');
    setTimeout(function() {
        resolve('hello');
    }, 1000);
}).then(function(data) {
    console.log('then ' + data);
    return data;
}).then(function(data) {
    console.log('then ' + data);
    return data;
}).catch(function(data) {
    console.log('catch ' + data);
}).finally(function() {
    console.log('finnaly');
})

console.log('global end');
