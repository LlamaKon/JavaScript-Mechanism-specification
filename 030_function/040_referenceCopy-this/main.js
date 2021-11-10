window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}

// personのhelloをrefに代入

// thisは呼び出し元のオブジェクト
// 一度代入をすると参照先が変更されるため、
// 上記の例では参照先がpersonではなくなる
// そのため、personの中のnameが出力されず、
// グローバルオブジェクトのnameが呼び出される
// const ref = person.hello;
// ref();




const person2 = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
        a();

        const person2 = {
            name: 'Tim',
            hello: function() {
                console.log('Hello ' + this.name);
                a();
            }
        }
        person2.hello()
    }
}

function a() {
    console.log('Hello ' + this.name);
}
person2.hello();