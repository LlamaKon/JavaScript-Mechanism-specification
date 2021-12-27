/**
 *   同期処理
 * 
 *      ・メインスレッドでコードが順番に実行される
 *      ・１つの処理が完了するまで次の処理には進まない
 * 　   
 */

function sleep(ms) {
    const startTime = new Date();
    while (new Date() - startTime < ms);
    console.log('sleep done');
}

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    console.log('button clicked');
})

setTimeout(function() {
    sleep(3000);    
},5000)
