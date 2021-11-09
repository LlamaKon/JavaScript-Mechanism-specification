const a = 'hello';

// constには再代入不可
// a = 'bye';

const b = {
    prop: 'hello'
}
// オブジェクトに関しても不可
// b = {};

// オブジェクト内のプロパティの値は変更ができる
b.prop = 'bye';
console.log(b);