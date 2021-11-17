/* 「new演算子」

    コンストラクター関数からインスタンスを作成するために使用する演算子

*/

/* 「コンストラクター関数の戻り値がオブジェクトの場合」

    returnが返すオブジェクトを新しいインスタンスオブジェクトとして
    呼び出し元に返す
*/

/* 「コンストラクター関数の戻り値がオブジェクト以外/returnなしの場合」

    コンストラクターのprototypeのプロパティを
    __proto__にコピー

    コンストラクター関数内で使用しているthisを呼び出し元に返す
*/

// コンストラクター関数の戻り値がオブジェクトの場合
function F(a, b) {
    this.a = a;
    this.b = b;
    // returnがない場合は、__proto__の中にcが格納される
    // return {};
}

// プロトタイプ
F.prototype.c = function(){

}

const instance = new F(1,2);
console.log(instance);

// コンストラクター関数の戻り値がオブジェクト以外の場合
function F2(a, b) {
    this.a = a;
    this.b = b;
    return 1;
}

const instance2 = new F2(1,2);
console.log(instance2);

// コンストラクター関数の戻り値がreturnなしの場合
function F3(a, b) {
    this.a = a;
    this.b = b;
}

const instance3 = new F3(1,2);
console.log(instance3);


// コンストラクター関数
function CF(a,b) {
    this.a = a;
    this.b = b;
    return {a: 1};
}

CF.prototype.c = function() {

}

// new演算子と同じ挙動をする関数
function newOpe(C, ...args) {
    const _this = Object.create(C.prototype);
    const result = C.apply(_this, args);
    if (typeof result === "object" && result !== null) {
        return result;
    } 
    return _this;
}
const cf = newOpe(CF, 1, 2);
console.log(cf);