// // サーバー上から情報取得（fetch)
// fetch('users.json')

//     .then(function(response) {
//         //console.log(response);
//         // json関数を返す
//         return response.json();
//     // jsonのオブジェクトを渡す
//     }).then(function(json) {
//         // jsonの中身を出力
//         console.log(json);
//         // jsonから取得した情報１つずつを出力
//         for (const user of json) {
//             console.log(`I'm ${user.name}, ${user.age} years old`);
//         }
//     })


// 上記のプログラムをasyncを用いて記述
async function fetchUsers() {
    const response = await fetch('users.json');
    const json = await response.json();
    for (const user of json) {
        console.log(`I'm ${user.name}, ${user.age} years old`);
    }
}

fetchUsers();