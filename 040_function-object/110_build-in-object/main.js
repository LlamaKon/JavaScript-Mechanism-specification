/** 「ビルドインオブジェクト」 
 * 
 * 　コードの実行前にJSエンジンによって
 *   自動的に生成されるオブジェクト
 * 
 *   String, Object, Number, Function, Math, Boolean, Date, Sysmbol  etc...
 * 
 */


const arry = new Array(1, 2, 3, 4, 5);
console.log(arry);

console.log(arry["0"]);
arry.hasOwnProperty(0);