const a = {
    prop: 0
}

// オブジェクトのプロパティの値を分割代入する際は、名前を同一にする。
let { prop } = a;

// 名前を変更したい場合は、下記のように記述する　
// let { prop: b } = a;

prop = 1;
console.log(a, prop);

function fn(obj) {
    prop = 1;
    console.log(a, prop);
}

fn(a)

const c = {
    prop1: {
        prop2: 0
    }
}

let { prop1 } = c;
console.log(prop1);

prop1.prop2 = 1;
console.log(c, prop1);