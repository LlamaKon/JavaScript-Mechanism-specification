/**
 *  Strictモード
 * 
 *      通常のJavaScriptで許容されている一部の書き方を制限する
 * 
 *  Strictモードの目的
 * 
 *      ・意図しないバグの混入の防止
 *      ・予約後の確保
 *      ・コードのセキュア化
 * 
 *  Strictモードの有効化
 * 
 *      "use strict"
 * 
 *      ファイルの先頭、もしくは関数内の先頭行に記述
 * 
 */

// 'use strict' -> ファイルの先頭に記述

function fn() {
    'use strict'
    //a = 0;

    // const implements, interface, package;


    return this;
}
console.log(fn.call(2));
// console.log(a);