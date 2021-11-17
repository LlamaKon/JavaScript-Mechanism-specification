/** 「プロトタイプ継承」
 * 
 * 　別のコンストラクター関数のプロトタイプを受け継ぎ、
 * 　機能を流用できるようにすること
 */

/** 「継承」
 *
 *   別のコンストラクター関数を受け継ぐこと 
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function() {
    console.log('hello ' + this.name);
}
// このようにコンストラクター関数を別で定義するとコードが増える
// function Japanese(name, age) {
//     this.name = name;
//     this.age = age;
// }

function Japanese(name, age, gender) {
    // 第１引数　　 -> Japanese関数コンテキストのthis
    // 第２引数以下 -> 関数の引数
    Person.call(this, name, age);
    
    // Japaneseコンストラクタにのみプロパティを追加することも可能
    this.gender = gender;
}

// Personオブジェクトから空のオブジェクトを作成し、__proto__の中身も格納
Japanese.prototype = Object.create(Person.prototype);

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);

// prototypeのメソッドは書き換えることが可能
Japanese.prototype.hello = function() {
    console.log('konnichiwa ' + this.name);
}

Japanese.prototype.bye = function() {
    console.log('Sayonara ' + this.name);
}

taro.hello();
taro.bye();