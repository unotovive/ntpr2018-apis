const Controller = require('./controller');
const ItemModel  = require('../models/item-model');
const ItemEntity = require('../entities/item-entity');

class ItemsController {
  /**
   * コンストラクタ
   */
  constructor() {
    this.controller = new Controller();
    this.itemModel = new ItemModel();
  }
  
  /**
   * 全件取得する
   * 
   * @param res レスポンス
   */
  findAll(res) {
    this.itemModel.findAll()
      .then(this.controller.findSuccess(res))
      .catch(this.controller.findError(res));
  }
}

module.exports = ItemsController;
