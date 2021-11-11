/*　「クロージャー」

    内側スコープに定義されている関数から
    レキシカルスコープの変数への参照を保持している状態
*/

// プライベート変数　-> 関数内に変数を保持し、外部からアクセスさせない
function incrementFactory() {
    
    // incrementFactory関数スコープに収まっているため、
    // 外側のスコープからは呼び出されない
    let num = 0;

    function increment() {
        // 関数内で必ず０に初期化されるため、繰り返しにはならない
        // let num = 0;
        num = num + 1;
        console.log(num);
    }
    return increment;
}

const increment = incrementFactory();

increment();
increment();
increment();



// 動的な関数の生成
function addNumberFactory(num) {
    function addNumber(value) {
        return num + value;
    }
    return addNumber;
}

const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);
const result = add10(10);

console.log(result);