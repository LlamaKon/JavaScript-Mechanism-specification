// グローバルスコープ a, fn1
let a = 2;
// 関数スコープ　b, fn2
function fn1() {
    let b = 1;
    // 関数スコープ c
    function fn2() {
        let c = 3;
        console.log(b);
    }
    fn2();
}
fn1();

// 自分のスコープより外にあるスコープにはアクセス可能