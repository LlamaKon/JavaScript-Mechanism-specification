/**
 * 問題：
 * クロージャーの問題で作成した以下のcalcFactoryを即時関数
 * で書き直してみてください。
 */
const calc2 = (function(val) {
    return {
        plus: function(target) {
            const newVal = val + target;
            console.log(`${val} + ${target} = ${newVal}`);
            val = newVal;
        },
        minus: function(target) {
            const newVal = val - target;
            console.log(`${val} - ${target} = ${newVal}`);
            val = newVal;
        },
        multiply: function(target) {
            const newVal = val * target;
            console.log(`${val} x ${target} = ${newVal}`);
            val = newVal;
        },
        divide: function(target) {
            const newVal = val / target;
            console.log(`${val} / ${target} = ${newVal}`);
            val = newVal;
        },
    }
})(10);
calc2.plus(5);
calc2.minus(3);
calc2.multiply(3);
calc2.divide(2);