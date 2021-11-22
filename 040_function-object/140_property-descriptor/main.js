/**　「プロパティの値」
 *  　
 *　　value         : 値
 *　　configurable  : 設定変更可能性
 *　　enumerable    : 列挙可能性
 *　　writable      : 値の変更可能性
 *
 */

// この記述をファイルの先頭に記述すると、エラーを発生させる
'use strict';


const obj = {prop: 0};



// ディスクリプターを確認
// 第１引数 -> 対象となるオブジェクト
// 第２引数 -> プロパティの名前
const descriptor = Object.getOwnPropertyDescriptors(obj, 'prop');
console.log(descriptor);


const obj2 = {};

// ディスクリプターを設定
// 第１引数 -> 対象オブジェクト
// 第２引数 -> プロパティ
// 第３引数 -> オブジェクトで設定値
Object.defineProperty(obj2, 'prop', {
    configurable: true,
    value:0,
    writable: true
});

delete obj2.prop;
console.log(obj2.prop);

const descriptor2 = Object.getOwnPropertyDescriptors(obj2, 'prop');
console.log(descriptor2);