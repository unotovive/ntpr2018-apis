const express = require('express');

// ルータをモジュールとして作成する
const router = express.Router();

// コントローラを用意する
const ItemsController = require('../controllers/items-controller');
const itemController = new ItemsController();

// 全件取得
router.get('/all', (req, res) => {
  itemController.findAll(res);
});

module.exports = router;
