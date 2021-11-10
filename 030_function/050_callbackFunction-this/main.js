window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}

person.hello();

function fn(ref) {
    ref();
}

// コールバック関数としてhelloメソッドを使用すると
// グローバルオブジェクトからnameを取得してくる
fn(person.hello);

// オブジェクトのメソッドとして実行される場合
// -> thisは呼び出し元のオブジェクトから値を取得

// 関数として実行される場合
// -> thisはグローバルオブジェクトから値を取得