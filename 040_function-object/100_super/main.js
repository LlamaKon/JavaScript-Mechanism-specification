/** 「super」
 * 
 * 　継承元の関数を呼び出すためのキーワード 
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

    bye() {
        console.log('Bye ' + this.name);
    }
}

class Japanese extends Person {
    constructor(name, age, gender) {
        // superはコンストラクターの一番上に記述
        super(name, age);
        this.gender = gender;
    }

    hello() {
        // 親クラスのPersonのhelloメソッドを呼び出している
        // メソッド内では一番上に書かなくても良い
        super.hello();
        console.log('konnichiwa ' + this.name);
    }
    
    bye() {
        console.log('Sayonara ' + this.name);
    }
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.bye();
taro.hello();