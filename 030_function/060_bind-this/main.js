window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}

person.hello();

// bind()を使用することで()の中に指定したオブジェクトから値を参照することを定義
const helloTom = person.hello.bind(person);

function fn(ref) {
    ref();
}
fn(person.hello);
fn(helloTom);

function a() {
    console.log('hello ' + this.name);
}

const b = a.bind({name: 'Tim'});
b();

// bind()を使用して引数の値を固定することも可能
// 関数実行時に引数に値を与えても
// bindが優先される
function c(name) {
    console.log('hello ' + name);
}

const d = c.bind(null, 'Mike');
d('Tom');