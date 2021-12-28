// コンストラクタやメソッドの中ではStrictモードがONになっているため注意
class C {
    constructor() {
        function fn() {
            console.log(this);
        }
        fn();
    }

    method() {
        function fn() {
            console.log(this);
        }
        fn();
    }
}

const c = new C();
c.method();
