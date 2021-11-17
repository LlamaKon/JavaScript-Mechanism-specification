/* 「コンストラクター関数」
    
    ・新しくオブジェクトを作成するための雛形となる関数
    ・コンストラクター関数を呼び出すときにはnewを使用
    ・newを使用してオブジェクトを作成することを「インスタンス化」という
    ・newを使用して作成したオブジェクトを「インスタンス」という
*/

// コンストラクター関数は明確に区別するために１文字目を大文字にする
function Person(name, age) {
    // インスタンス化した際に格納したいプロパティを定義
    this.name = name;
    this.age = age;
} 

// インスタンス化
const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);