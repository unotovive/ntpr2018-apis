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
 
  findById(id) {
    const sql = `
      SELECT
          jan,
          name,
          price,
          amount,
          img
      FROM
          item
      WHERE
          jan = $id
    `;
    const params = {
      $id: id
    };
    return this.model.findOne(sql, params)
      .then((row) => {
        return new ItemEntity(row.Jan, row.name, row.price, row,amount, row.img);
      });
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
  
  
  create(item) {
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
  
  
  /**
   * 登録 or 更新する
   * @param jan Jan
   * @return 更新できたら Resolve する
   */
  update(item){
    const sql = `
      UPDATE item 
      SET 
          name= $name,
          price= $price,
          amount= $amount,
          img= $img
      WHERE 
          jan= $jan
    `;

    const params = {
      $jan:item.jan,
      $name:item.name,
      $price:item.price,
      $amount:item.amount,
      $img:item.img
  };
    return this.model.run(sql, params);
  }
  

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
    
  //   return this.model.run(sql, params);
  // }
    return this.model.run(sql, params);
  }
}

module.exports = ItemModel;