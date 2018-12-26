# labmart-apis : Node.js + Express + REST API + SQLite DB.

Express で REST API を構築し、SQLite でデータ永続化を実現した、Node.js  Web API サーバ。



## 使い方

```sh
$ npm install
$ npm start

サーバ起動 : http://localhost:3000/
```

ユーザ情報を扱う `/users` 、アイテムを扱う `/item` という API を用意している。それぞれ以下のメソッド・URL を指定して参照・操作できる。

| 機能                 | メソッド | URL                                 |
|----------------------|----------|-------------------------------------|
| Item全件取得             | GET      | `http://localhost:3000/api/item/all`  |
| Item編集取得 | PUT      | `http://localhost:3000/api/item/edit` |
| Item削除            | DELETE     | `http://localhost:3000/api/item/remove`  |
| User参照    | GET      | `http://localhost:3000/api/users/:uid` |
| User登録(IDは自動割り当て)    | POST   | `http://localhost:3000/api/users/add` |
| 支払   | PUT  | `http://localhost:3000/api/users/pay` |

`./test/` 配下の各ファイルはこれらの API を叩く Node.js スクリプトなので、`$ npm start` でサーバ起動後、`$ node ./test/user-find-all-test.js` というように実行してみてほしい。


