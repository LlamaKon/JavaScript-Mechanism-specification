/** 「クラス」
 * 　
 *　　コンストラクター関数をクラス表記で書けるようになったもの
 */

// クラス
class Person {

    // コンストラクター関数と同じ機能を持つ
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // prototypeと同じ機能を持つ
    hello() {
        console.log('hello ' + this.name);    
    } 

}

// コンストラクター関数
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// prototype
// Person.prototype.hello = function() {
//     console.log('hello ' + this.name);
// }


const bob = new Person('Bob', 23);
console.log(bob);