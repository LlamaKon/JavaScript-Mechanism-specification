/* 「プロトタイプチェーン」

    プロトタイプの多重形成をプロトタイプチェーンという

    プロトタイプの優先順位
    1. 自身のプロパティ
    2. コンストラクターが保持しているメソッド
    3. オブジェクトのプロトタイプに格納されているメソッド
    4. 何も見つからなければundefinedを返す
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function() {
        console.log('OwnProperty: hello ' + this.name);
    }
}

Person.prototype.hello = function() {
    console.log('Person: hello ' + this.name);
}

Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
}

// Personコンストラクタからbobをインスタンス化
const bob = new Person('Bob', 18);
bob.hello();

// プロパティが存在するかを確認
// 引数に文字列でプロパティ名を指定
const result = bob.hasOwnProperty('name');
console.log(result);