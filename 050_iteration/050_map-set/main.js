/** Map, Set
 * 
 *      データを管理するための入れ物
 *      → コレクション
 * 
 *  
 *  ObjectとMapの違い
 * 
 *  【キー】
 *      object：　文字列
 *      Map   ：　制約なし
 * 
 *  【for...in】
 *      object：　◯
 *      Map   ：　×
 *  
 *  【for...of】
 *      object：　×
 *      Map   ：　◯
 * 
 * 
 *  ArrayとSetの違い
 * 
 *  【重複値】
 *      Array ：　◯
 *      Set   ：　×
 * 
 *  【for...in】
 *      Array ：　◯
 *      Set   ：　×
 * 
 *  【for...of】
 *      Array ：　◯
 *      Set   ：　◯
 */

// Mapオブジェクトの作成
const map = new Map();

// オブジェクト格納
const key1 = {};
map.set(key1, 'value1');
console.log(map.get(key1));

// 関数格納
const key2 = function() {}
map.set(key2, 'value2');
console.log(map.get(key2));

//  下記のような値の代入も可能
let key3;
map.set(key3 = 0, 'value3');
console.log(map.get(key3));

// map削除
map.delete(key3);
console.log(map.get(key3));

// for...of
for (const [k, v] of map) {
    console.log(k, v);
}

// Set
const s = new Set();
s.add(key1);
s.add(key1);
s.add(key2);
s.add(key3);

// Setは値が重複している場合、１つしか出力されない
for (let k of s) {
    console.log(k);
}

// 削除
s.delete(key3);

// 値を保持しているか確認
console.log(s.has(key2));
console.log(s.has(key3));

// Setは添字で指定して値を取得することはできない
// 配列に変換
const array = Array.from(s);
console.log(array[1]);

// スプレット構文(配列に変換)
const array2 = [...s];
console.log(array2);

