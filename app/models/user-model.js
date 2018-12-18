const Model = require('./model');
const UserEntity = require('../entities/user-entity');

/**
 * User Model
 */
class UserModel {
  /**
   * コンストラクタ
   */
  constructor() {
    this.model = new Model();
  }
  
  // /**
  //  * 全件取得する
  //  * 
  //  * @return Entity の配列を Resolve する
  //  */
  // findAll() {
  //   const sql = `
  //     SELECT
  //         id,
  //         name,
  //         age
  //     FROM
  //         user
  //   `;
    
  //   return this.model.findAll(sql)
  //     .then((rows) => {
  //       const users = [];
        
  //       for(const row of rows) {
  //         users.push(new UserEntity(row.id, row.name, row.age));
  //       }
        
  //       return users;
  //     });
  // }
  
  /**
   * ID を指定して1件検索する
   * 
   * @param uid ID
   * @return Entity を Resolve する
   */
  findById(uid) {
    const sql = `
      SELECT
          uid,
          name,
          wallet
      FROM
          user
      WHERE
          uid = $uid
    `;
    const params = {
      $uid: uid
    };
    
    return this.model.findOne(sql, params)
      .then((row) => {
        return new UserEntity(row.uid, row.name, row.wallet);
      });
  }
  
  ///**
  // * 登録する
  // * 
  // * @param user 登録情報を持つ Entity
  // * @return 登録できたら Resolve する
  // */
  create(user) {
    // ID は自動採番させる
    console.log('u-m1');
    const sql = `
      INSERT INTO user (
          name,
          wallet
      ) VALUES (
          $name,
          $wallet
      )
    `;
    const params = {
      $name: user.name,
      $wallet : user.wallet
    };
    return this.model.run(sql, params)
      .then((id) => {
        return id
      });
  }
  
  /**
   * 登録 or 更新する
   * 
   * @param user 更新情報を持つ Entity
   * @return 登録 or 更新できたら Resolve する
   */
  update(user) {
    const sql = `
      REPLACE INTO user (
          uid,
          name,
          wallet
      ) VALUES (
          $uid,
          $name,
          $wallet
      )
    `;
    const params = {
      $uid  : user.uid,
      $name: user.name,
      $wallet : user.wallet
    };
    
    return this.model.run(sql, params);
  }
  
  // /**
  //  * 削除する
  //  * 
  //  * @param id ID
  //  * @return 削除できたら Resolve する
  //  */
  // delete(id) {
  //   const sql = `
  //     DELETE FROM
  //         user
  //     WHERE
  //         id = $id
  //   `;
  //   const params = {
  //     $id: id
  //   };
    
  //   return this.model.run(sql, params);
  // }
}

module.exports = UserModel;
