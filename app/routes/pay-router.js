const express = require('express');

// ルータをモジュールとして作成する
const router = express.Router();

// コントローラを用意する
const UsersController = require('../controllers/users-controller');
const usersController = new UsersController();

// 全件取得
router.get('/', (req, res) => {
  usersController.findAll(res);
});

module.exports = router;
