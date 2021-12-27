// function sleep(callback) {

//     setTimeout(function() {
//         console.log('hello');
//         callback();
//     }, 1000);
// }

// sleep(function() {
//     console.log('callback done');
// })

// 非同期処理を繋げて、処理を実行する
function sleep(callback, val) {

    setTimeout(function() {
        console.log(val++);
        callback(val);
    }, 1000);
}

sleep(function(val) {
    sleep(function(val) {
        sleep(function(val) {
            sleep(function(val) {
                sleep(function(val) {
                },val)
            },val)
        },val)
    },val)
}, 0)

/**
 * 　このような書き方でも処理は問題なく実行できるが、
 *   階層が深くなり、読みにくくなるため、
 * 　Promiseを使用する方が良い
 */