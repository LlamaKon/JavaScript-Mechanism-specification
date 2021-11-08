function a() {
    console.log('called');
}
a();


// １度だけ実行する場合には関数名をつけずに実行するために即時関数を定義する
(function() {
    console.log('called');
})();


// 後ろに()をつけると出力される
let b = function() {
    console.log('called');
}();


let c = (function(d) {
    console.log('called ' + d);
    return 0;
})(10);


let e = (function() {

    let privateVal = 0;
    let publicVal = 10;

    function privateFn() {
        console.log('privateFn is called');
    }
    function publicFn() {
        console.log('publicFn is called');
    }

    // 外側から呼びたいものだけreturnで定義

    return {
        publicVal,
        publicFn
    };
})()

e.publicFn();
console.log(e.publicVal);