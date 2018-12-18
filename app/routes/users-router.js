const express = require('express');

// ルータをモジュールとして作成する
const router = express.Router();

// コントローラを用意する
const UsersController = require('../controllers/users-controller');
const usersController = new UsersController();

// // 全件取得
// router.get('/', (req, res) => {
//   usersController.findAll(res);
// });

// ID を指定して1件取得
router.get('/:uid', (req, res) => {
  usersController.findById(req, res);
});

// 登録
router.post('/add', (req, res) => {
  console.log('router');
  usersController.create(req, res);
});

// 更新
router.put('/pay', (req, res) => {
  usersController.pay(req, res);
});

// // 削除
// router.delete('/:id', (req, res) => {
//   usersController.delete(req, res);
// });

module.exports = router;
