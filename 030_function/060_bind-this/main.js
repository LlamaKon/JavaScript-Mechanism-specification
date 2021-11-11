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

// 関数内でthisが使用されていない場合はbind()の第１引数を指定する必要がない
// 第２引数で関数の引数を渡すことで、出力を束縛することができる
function c(name) {
    console.log('hello ' + name);
}

const d = c.bind(null, 'Mike');
d('Tom');