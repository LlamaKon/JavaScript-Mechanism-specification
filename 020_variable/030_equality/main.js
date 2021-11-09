// 厳格な等価性 　a === b　-> 型の比較あり
// 抽象的な等価性 a == b　 -> 型の比較なし

function printEquality(a, b) {
    console.log(a === b);
    console.log(a == b);
    
}

let a = '1';
let b = 1;

printEquality(a, b);

let c = true;

printEquality(b, c);

let d = Number(c);

printEquality(b, d);

let e = Number("");
let f = 0;
let g = '0';

printEquality(e, f);
printEquality(f, g);
