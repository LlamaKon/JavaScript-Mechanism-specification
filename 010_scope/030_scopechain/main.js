// グローバルスコープはスクリプトスコープよりも外側にある
let a = 2;
window.a = 4;
function fn1() {
    // let a = 1;
    function fn2() {
        // let a = 3;
        // 一番近い変数の値を出力
        console.log(a);
        
    }
    fn2();
}
fn1();



