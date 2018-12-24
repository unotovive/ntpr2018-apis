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

//アイテム追加
router.post('/add', (req,res) =>{
  itemController.create(req,res);
})

//アイテム削除
router.delete('/remove',(req,res) =>{
  itemController.delete(req,res);
})

//アイテム更新
router.put('/edit',(req,res) =>{
  itemController.edit(req,res);
})

module.exports = router;

