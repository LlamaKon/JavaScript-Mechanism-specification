const a = {
    prop: 0
}

const b = {
    prop: 0
}

// オブジェクトへの比較の際、参照先のオブジェクトを比較する
console.log(a === b);

// オブジェクト内の値の比較を行いたい場合はプロパティを呼び出す
console.log(a.prop === b.prop);


const c = a;
console.log(a === c);