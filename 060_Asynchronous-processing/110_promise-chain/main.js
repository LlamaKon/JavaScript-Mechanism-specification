/**
 * 問題：
 * myFetch関数を使って以下の「データ取得の流れ」の通り、
 * 順次JSONを取得し、取得したデータを加工して、
 * 以下のメッセージをコンソールに表示してください。
 * 
 * --Bob's timeline--
 * Tim says: waiting at station.
 * Sun says: go shopping?
 * John says: how's it going?
 * Sun says: drink?
 *
 ******************************   
 * データ取得の流れ
 * １．"user1.json"を取得（Bobのユーザー情報取得）
 * 
 * ２．"user1.json"のidの項目を元に
 *     `friendsOf${id}.json`でフレンド一覧を取得
 * 
 * ３．取得したフレンドのID（ユーザーID）を元に、
 * 　　`user${id}.json`で各ユーザーの情報を取得
 * 
 * ４．各ユーザー情報のlatestMsgIdが最後に投稿した
 * 　　メッセージのIDになりますので、そのidを用いて
 * 　　`message${friend.latestMsgId}.json`
 * 　　を取得。
 * 
 * １～４で取得したデータをもとにコンソールログに
 * タイムラインの文字列を作成してください。
 * 
 * ※await/asyncで記述してみてください。
 */

// jsonから情報を取得するasyncクラス
async function myFetch(fileName) {
	const response = await fetch(`./json/${fileName}`);
	const json = await response.json();
	return json;
}

// 即時関数
(async function() {
	// user1.jsonから情報を取得
	// awaitを使用し、Promiseのインスタンスを受ける
	const me = await myFetch('user1.json');
	console.log(`--${me.name}'s timeline--`);

	// meに格納されているユーザのidに関連するフレンドid一覧を取得
	const friendList = await myFetch(`friendsOf${me.id}.json`);
	
	// Promise.allで使用するためにSetを定義
	const friendIds = new Set();

	// フレンドの各idを取得し、Setに追加
	for (const id of friendList.friendIds) {
		friendIds.add(myFetch(`user${id}.json`));
	}

	// Setを使用してPromise.allでフレンド情報を格納
	const friends = await Promise.all(friendIds);
	
	// メッセージを取得するためのSetを定義
	const msgIds = new Set();
	
	// for文で先ほど取得したフレンド情報を使用し、関連するメッセージのidを取得
	for (const friend of friends) {
		// 先ほど定義したSetに格納
		msgIds.add(myFetch(`message${friend.latestMsgId}.json`));
	}

	// 各メッセージを取得
	const msgs = await Promise.all(msgIds)

	// 対応するメッセージを取得
	for (const friend of friends) {
		for (const msg of msgs) {
			if (friend.id === msg.userId) {
				console.log(`${friend.name} says: ${msg.message}` )
			}
		}
	}

})();
