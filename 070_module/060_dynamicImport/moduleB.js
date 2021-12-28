// 従来のインポート（同期で処理が行われる
import { publicVal, publicFn } from './moduleA.js';


// ダイナミックインポート
// import('./moduleA.js').then(function(modules) {
//     console.log(modules);
//     modules.publicFn();
// })


// ダイナミックインポートとasyncの組み合わせ
async function fn() {
    const modules = await import('./moduleA.js');
    modules.publicFn();
}
fn();