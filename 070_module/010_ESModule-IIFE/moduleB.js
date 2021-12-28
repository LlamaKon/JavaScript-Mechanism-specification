import { publicFn as fn, publicVal as val } from './moduleA.js';

fn();
fn();
fn();
// プリミティブ型をモジュールの外で変更するとエラーになる。
// そのため、オブジェクトのプロパティとして値を定義する。
console.log(val.prop++);
console.log(val.prop++);
fn();