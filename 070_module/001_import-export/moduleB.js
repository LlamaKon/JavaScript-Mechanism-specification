import defaultVal, { publicVal as val, publicFn as fn } from './moduleA.js';

console.log(val);

fn();

// moduleA.jsで export default 0;の記述をインポートする際は、
// 変数名をmoduleB.jsで好きに決めて、インポートする
console.log(defaultVal);


// asを用いたインポート
// import defaultVal, * as moduleA from './moduleA.js';

// console.log(moduleA.default);
// console.log(moduleA.publicFn());
// console.log(moduleA.publicVal);