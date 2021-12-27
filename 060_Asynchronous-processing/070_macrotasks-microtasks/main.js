/**
 * マクロタスク
 *  
 *      ・タスクキューのこと
 *      ・順番が回ってきたらタスクキュー内のタスクを１つずつ実行
 * 
 * 
 * マイクロタスク
 * 
 *      ・タスクキューとは別で存在する非同期処理の待ち行列
 *      　→ ジョブキュー
 *      ・順番が回ってきたらジョブキュー内の全てのタスクを実行
 */

// // マクロタスク
// setTimeout(function task1() {
//     console.log('task1');    ④
// });

// new Promise(function promise(resolve) {

//     console.log('promise');  ①
//     resolve();

// // マイクロタスク
// }).then(function job1() {
    
//     console.log('job1');     ③

// });

// console.log('global end');   ②



new Promise(function promise(resolve) {
    console.log('promise'); // 同期

    setTimeout(function task1() {
        console.log('task1'); // 非同期
        resolve();
    });

}).then(function job1() {
    console.log('job1');    // 非同期

    /** 
     *  マイクロタスクの中にマクロタスクを挿入しているため、
     *  マイクロタスクの処理が全て終わった後に実行される。
     */ 
    setTimeout(function task2() {
        console.log('task2'); // 非同期

        /** 
         * setTimeout（マクロタスク）の中に
         * マイクロタスクを入れると、上記のマクロタスクが
         * 実行された後に処理が実行される。 
         */ 
        queueMicrotask(function job4() {
            console.log('job4');
        });

        // queueMicroTaskをPromiseに変換
        const p = Promise.resolve();
        p.then(function job4() {
            console.log('job4');
        });
    });

    /**
     *  マイクロタスクの中にマイクロタスクを挿入すると、
     *  以下の処理より先に実行される。
     */
    queueMicrotask(function job4() {
        console.log('job4');
    });
}).then(function job2() {
    console.log('job2');    // 非同期
}).then(function job3() {
    console.log('job3');    // 非同期
})

console.log('global end');  // 非同期