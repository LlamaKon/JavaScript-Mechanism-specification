//  一般的な関数
function a(name) {
    return 'hello ' + name;
}

// 無名関数
const b = function(name) {
    return 'hello ' + name;
}

// arrow関数
// 1. functionを削除
// 2. 引数と{}の間に=>を記述
// 3. 引数が１つの場合は()を省略できる
// 4. 処理が１行の場合は{}とreturnが省略できる
const c = name => 'hello ' + name;

console.log(c('Tom'));

// 引数が２つ以上の場合
const d = (name, name1) => 'hello ' + name + ' ' + name1;
console.log(d('Tom', 'Bob'));

// 引数なしの場合
const e = () => 'hello ';
console.log(e());