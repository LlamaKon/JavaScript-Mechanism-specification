console.log('ESmodule called');

    let privateVal = 1;

    // プリミティブ型をモジュールの外で変更するとエラーになる。
    // そのため、オブジェクトのプロパティとして値を定義する。
    export let publicVal = {prop: 10};

    export function publicFn() {
        console.log('publicFn called: ' + publicVal.prop);
    }

    function priavteFn() {

    }