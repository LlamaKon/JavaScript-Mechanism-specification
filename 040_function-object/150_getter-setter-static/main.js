/**　「getter / setter」
 * 
 *　　ディスクリプターのオプション
 * 
 */

function Person1(name, age) {
    this._name = name;
    this._age = age;
}

// getter / setterを設定
Object.defineProperty(Person1.prototype, 'name', {
    get: function() {
        return this._name;
    },
    set: function(val) {
        this._name = val;
    } 
});

const p1 = new Person1('Bob', 23);
// nameに値を取りに行く
console.log(p1.name);

// p1.nameに対して値を設定すると変更が反映される
p1.name = 'Tom';
console.log(p1.name);


// getter / setter をディスクリプターで設定するのを簡略化
class Person2 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }

    static hello() {
        console.log('hello');
    }
}

const p2 = new Person2('Mob', 23);
Person2.hello();
console.log(p2);