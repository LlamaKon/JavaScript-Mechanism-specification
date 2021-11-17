/* 「プロトタイプ」

    ・オブジェクトに存在する特別なプロパティー
    ・コンストラクター関数と合わせて使用
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// メソッドとして使用したプロパティを格納するために記述
Person.prototype.hello = function() {
    console.log('Hello ' + this.name);
}

// インスタンス化した際には、prototypeの参照が
// __proto__にコピーされる
const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

bob.hello();
tom.hello();
sun.hello();