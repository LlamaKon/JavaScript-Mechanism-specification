/** 「クラス継承」
 *
 *　　他のクラスのプロパティーとメソッドを継承すること
 * 
 */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log('hello ' + this.name);    
    }
}

// extendsで継承を表す
class Japanese extends Person {
    constructor(name, age, gender) {
        // superで継承元のコンストラクターを実行
        super(name, age);
        this.gender = gender;
    }

    hello() {
        console.log('hello ' + this.name);
    }

    bye() {
        console.log('bye ' + this.name);
    }

}


// // コンストラクター関数
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // prototype
// Person.prototype.hello = function() {
//     console.log('hello ' + this.name);
// }

// // Personコンストラクター関数を継承したJapaneseコンストラクター関数
// function Japanese(name, age, gender) {
//     Person.call(this, name, age);
//     this.gender = gender;
// }

// // PersonのprototypeをJapaneseのprototypeに継承
// Japanese.prototype = Object.create(Person.prototype);

// // Japanese.prototypeのメソッドを書き換え
// Japanese.prototype.bye = function() {
//     console.log('bye ' + this.name);
// }

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);

taro.bye();
taro.hello();