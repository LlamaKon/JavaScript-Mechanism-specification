// const a = 0;
// const b = 2;
// const c = 3;
// const d = 0;
// console.log(a && b && c);
// console.log(a || b || c);
// console.log((a || b) && c);
// console.log((a || b) && (c || d));


// function hello(name) {
//     if (!name) {
//         name = 'Tom';
//     }
//     console.log('Hello ' + name); 
// }

// or条件を使用して簡略化
function hello(name) {
    name = name || 'Tom';
    console.log('Hello ' + name);
}
hello('Bob');

// デフォルト値を引数に設定
function morning(name = 'Jim') {
    console.log('Good morning ' + name)
}
morning();


// let name = 'Bob';
// if (name) {
//     hello(name);
// }


// and条件を使用して関数を実行するか否かを記述
let name = 'Bob';
name && hello(name);