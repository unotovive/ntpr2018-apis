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
        console.log('resid'+resid)
        this.controller.createSuccess(res,resid);
      })
      .catch(this.controller.editError(res));
  }

  /**
   * 削除する
   * 
   * @param req リクエスト
   * @param res レスポンス
   */
  delete(req, res) {
    const jan = req.body.jan;
    console.log(req.body.jan);
    this.itemModel.delete(jan)
      .then(this.controller.editSuccess(res))
      .catch((error) => {
        if(error.errorCode === 21) {
          // 削除対象がなかった場合は 404
          return this.controller.deleteError(res)();
        }
        else {
          return this.controller.editError(res)();
        }
      });
  }

  /**
   * 登録 or 更新する
   * 
   * @param req リクエスト
   * @param res レスポンス
   */
  edit(req, res) {
    let newwallet = req.body.user.wallet;
    for(let i = 0; i < req.body.cart.length; i++) {
      newwallet -= req.body.cart[i].price;
    }
    const user = new UserEntity(req.body.user.uid, req.body.user.name, newwallet);
    
    this.userModel.update(user)
      .then(this.controller.editSuccess(res))
      .catch(this.controller.editError(res));
  }
  
  
}

module.exports = ItemsController;
