/**
 * 
 * constは再代入するとエラーになるが、
 * for文の中で使用してもエラーが発生しない
 * 
 * → for文が一周するごとにスコープが切り替わっている　
 * 
 */
for (let i = 0; i < 5; i++) {
    const j = i * 2;
    console.log(j);
}


/**
 * 
 * for文内でsetTimeout関数を使用しても
 * 1秒毎に結果が出力されるのではなく、まとめて出力される
 * 
 */
for (let k = 0; k < 5; k++) {
    const l = k * 2;
    setTimeout(function() {
        console.log(l);
    }, 1000);
}


/**
 * 
 * varで変数宣言した場合は下記のfor文の場合、
 * 8が5回出力されたと結果が返る
 * 
 * → varはブロックスコープを無視されるため、
 * 　for文の外で宣言しているのと変わらない
 * 
 */
for (let m = 0; m < 5; m++) {
    var n = m * 2;
    setTimeout(function() {
        console.log(n);
    }, 1000);
}