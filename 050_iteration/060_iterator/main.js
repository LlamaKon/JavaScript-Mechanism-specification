/** イテレーター
 * 
 *      反復処理を行う際に使用するオブジェクト
 * 
 *      → 決められたルールに従って記述
 *      
 *      ・イテレータはnextメソッドを保持
 *      ・nextメソッドはオブジェクトを返す必要がある
 *      ・返すオブジェクトには下記２つのプロパティを保持する必要がある
 *          - done -> true / false
 *          - value
 * 
 */

// イテレーターを定義
function genIterator(max = 10) {
    let i = 0;

    // イテレーター
    return {
        next: function() {

            if (i >= max) {
                return {
                    done: true
                }
            }
            else {
                return {
                    done: false, // false -> ループを継続する
                    value: i++
                }
            }
        }
    }
}

// イテレーター生成
const it = genIterator(10);

let a = it.next();

while (!a.done) {
    console.log(a.value);
    a = it.next();
}

console.log('----------------');


const obj = {
    [Symbol.iterator]: genIterator.bind(null, 10)
}

for(const i of obj) {
    console.log(i);
}