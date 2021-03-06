const Controller = require('./controller');
const UserModel  = require('../models/user-model');
const UserEntity = require('../entities/user-entity');

/**
 * Users Controller
 */
class UsersController {
  /**
   * コンストラクタ
   */
  constructor() {
    this.controller = new Controller();
    this.userModel = new UserModel();
  }
  
  // /**
  //  * 全件取得する
  //  * 
  //  * @param res レスポンス
  //  */
  // findAll(res) {
  //   this.userModel.findAll()
  //     .then(this.controller.findSuccess(res))
  //     .catch(this.controller.findError(res));
  // }
  
  /**
   * ID を指定して1件取得する
   * 
   * @param req リクエスト
   * @param res レスポンス
   */
  findById(req, res) {
    const uid = req.params.uid;
    
    this.userModel.findById(uid)
      .then(this.controller.findSuccess(res))
      .catch(this.controller.findError(res));
  }
  
  /**
   * 登録する
   * 
   * @param req リクエスト
   * @param res レスポンス
   */
  create(req, res) {
    const user = new UserEntity();
    // user.id = req.body.id;
    user.name = req.body.name;
    user.wallet = 0;
    console.log('u-c');
    this.userModel.create(user)
      .then((resid)=>{
        console.log('resid'+resid)
        this.controller.createSuccess(res,resid);
      })
      .catch(this.controller.editError(res));
  }
  
  /**
   * 登録 or 更新する
   * 
   * @param req リクエスト
   * @param res レスポンス
   */
  pay(req, res) {
    let newwallet = req.body.user.wallet;
    for(let i = 0; i < req.body.cart.length; i++) {
      newwallet -= req.body.cart[i].price;
    }
    const user = new UserEntity(req.body.user.uid, req.body.user.name, newwallet);
    
    this.userModel.update(user)
      .then(this.controller.editSuccess(res))
      .catch(this.controller.editError(res));
  }
  
  // /**
  //  * 削除する
  //  * 
  //  * @param req リクエスト
  //  * @param res レスポンス
  //  */
  // delete(req, res) {
  //   const id = req.params.id;
    
  //   this.userModel.delete(id)
  //     .then(this.controller.editSuccess(res))
  //     .catch((error) => {
  //       if(error.errorCode === 21) {
  //         // 削除対象がなかった場合は 404
  //         return this.controller.deleteError(res)();
  //       }
  //       else {
  //         return this.controller.editError(res)();
  //       }
  //     });
  // }
}

module.exports = UsersController;
