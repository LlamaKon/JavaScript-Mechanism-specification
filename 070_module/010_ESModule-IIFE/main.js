// 即時関数（IIFE）
const moduleA = (function() {

    console.log('IIFE called');

    let privateVal = 1;
    let publicVal = 10;

    function publicFn() {
        console.log('publicFn called: ' + publicVal);
    }

    function priavteFn() {

    }

    return {
        publicFn,
        publicVal
    }
})();

const moduleB = (function({publicFn: fn, publicVal: val}) {
    fn();
    fn();
    fn();
    console.log(val++);
    console.log(val++);
    fn();
})
