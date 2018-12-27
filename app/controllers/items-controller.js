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

 /**
 * 新規に登録する
 * 
 * @param req リクエスト
 * @param res レスポンス
 */
create(req, res) {
  const item = new ItemEntity();
  item.jan = req.body.jan;
  item.name = req.body.name;
  item.price = req.body.price;
  item.amount = req.body.amount;
  item.img = req.body.img;
  this.itemModel.create(item)
    .then((resid)=>{
      this.itemModel.findAll()
      .then(this.controller.findSuccess(res))
      .catch(this.controller.findError(res));
    })
    .catch((error) => {
      error.errorMessage="Arleady Exist";
      this.controller.editError(res)(error)
    });
}

/**
 * 削除する
 * 
 * @param req リクエスト
 * @param res レスポンス
 */
delete(req, res) {
  const jan = req.body.jan;
  this.itemModel.delete(jan)
  .then(()=>{
    this.itemModel.findAll()
    .then(this.controller.findSuccess(res))
    .catch(this.controller.findError(res));
})
  .catch((error) => {
      if(error.errorCode == 21) {
        error.errorMessage="Is Not Exist"
        this.controller.deleteError(res)(error);
      }
      else {
        this.controller.editError(res)(error);
      }
    });
}

/**
 * 更新する
 * 
 * @param req リクエスト
 * @param res レスポンス
 */
edit(req, res) {
  const jan = req.body.jan;
  const item= new ItemEntity(jan, req.body.name, req.body.price,req.body.amount,req.body.img);
  this.itemModel.update(item)
  .then(()=>{
    this.itemModel.findAll()
    .then(this.controller.findSuccess(res))
    .catch(this.controller.findError(res));
})
    .catch((error) => {
      error.errorMessage="Is Not Exist"
      this.controller.editError(res)(error)
    });
    }
}

module.exports = ItemsController;