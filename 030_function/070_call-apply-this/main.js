function a() {
    console.log('hello ' + this.name);
}

const tim = {name: 'Tim'};
const b = a.bind(tim);
b();

a.apply(tim);
a.call(tim);


function c(name, name1) {
    console.log('Hello ' + name + ' ' + name1);
}

// 第２引数に関数の仮引数として与えることが可能
c.call(tim, 'Tim', 'Bob');

// 第２引数に配列として与え、呼び出す関数で順番に値が取得される
c.apply(tim,['Tim','Tom'])


const arry = [1,2,3,4,5];

// const result = Math.max.apply(null, arry);
const result = Math.max(...arry);
console.log(result);