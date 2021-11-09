let a = 0;

let b = "";

let c = null;

let d = undefined;

let e = NaN;

function CheckFalsyTruthy(val) {
    console.log(Boolean(val));
}

CheckFalsyTruthy(a);
CheckFalsyTruthy(b);
CheckFalsyTruthy(c);
CheckFalsyTruthy(d);
CheckFalsyTruthy(e);

if (!a) {
    console.log('hello');
} else {
    console.log('bye');
}