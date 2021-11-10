window.name = 'John';

// ここに記載されているthisはレキシカルスコープである
// windowオブジェクトを参照する
// const a = () => console.log('bye ' + this.name);

// アロー関数を使用した場合、thisは無視される
const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
        const a = () => console.log('bye ' + this.name);
        a();
    }
    // この書き方も無名関数
    // hello() {
    //     console.log('Hello ' + this.name);
    // }
}

// person.hello();

// 呼び出しより後にアロー関数を定義しているとエラー
// const a = () => console.log('bye ' + this.name);


function b() {
    const a = () => console.log('bye ' + this.name);
    a();
}

b();