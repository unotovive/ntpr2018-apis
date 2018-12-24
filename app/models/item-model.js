const Model = require('./model');
const ItemEntity = require('../entities/item-entity');

/**
 * Item Model
 */
class ItemModel {
  /**
   * コンストラクタ
   */
  constructor() {
    this.model = new Model();
  }
  
  /**
   * 全件取得する
   * 
   * @return Entity の配列を Resolve する
   */
  findAll() {
    const sql = `
      SELECT
          jan,
          name,
          price,
          amount,
          img
      FROM
          item
    `;
    
    return this.model.findAll(sql)
      .then((rows) => {
        const items = [];
        
        for(const row of rows) {
          items.push(new ItemEntity(row.jan, row.name, row.price, row.amount, row.img));
        }
        
        return items;
      });
  }
  
  /**
   * ID を指定して1件検索する
   * 
   * @param id ID
   * @return Entity を Resolve する
   */
  findById(id) {
    console.log("oooook")
    const sql = `
      SELECT
          Jan,
          name,
          price,
          amount,
          img
      FROM
          item
      WHERE
          Jan = $id
    `;
    const params = {
      $id: id
    };
    
    return this.model.findOne(sql, params)
      .then((row) => {
        console.log(id)
        return new ItemEntity(row.Jan, row.name, row.price,row,amount,row.img);
      });
  }
  
  // /**
  //  * 登録する
  //  * 
  //  * @param item 登録情報を持つ Entity
  //  * @return 登録できたら Resolve する
  //  */
  create(item) {
    console.log("i-c")
    const sql = `
      INSERT INTO item (
          jan,
          name,
          price,
          amount,
          img
      ) VALUES (
        $jan,
        $name,
        $price,
        $amount,
        $img
      )
    `;
    const params = {
        $jan:item.jan,
        $name:item.name,
        $price:item.price,
        $amount:item.amount,
        $img:item.img
    };
    
      return this.model.run(sql, params)
      .then((id) => {
        // 登録したデータを返却する
        return id;
      });
  }
  
  
  // /**
  //  * 登録 or 更新する
  //  * 
  //  * @param user 更新情報を持つ Entity
  //  * @return 登録 or 更新できたら Resolve する
  //  */
  // update(user) {
  //   const sql = `
  //     REPLACE INTO user (
  //         id,
  //         name,
  //         age
  //     ) VALUES (
  //         $id,
  //         $name,
  //         $age
  //     )
  //   `;
  //   const params = {
  //     $id  : user.id,
  //     $name: user.name,
  //     $age : user.age
  //   };
    
  //   return this.model.run(sql, params);
  // }
  
  /**
   * 削除する
   * 
   * @param jan Jan
   * @return 削除できたら Resolve する
   */
  delete(jan) {
    const sql = `
      DELETE FROM
          item
      WHERE
          jan = $jan
    `;
    const params = {
      $jan: jan
    };
    
    return this.model.run(sql, params);
  }
}

module.exports = ItemModel;
