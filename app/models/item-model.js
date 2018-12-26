const Model = require('./model');
const ItemEntity = require('../entities/item-entity');

/**
 * Item Model
 */
class ItemModel {
 
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
  
  
  /**
   * 登録 or 更新する
   * @param jan Jan
   * @return 更新できたら Resolve する
   */
  update(item){
    const sql = `
      REPLACE INTO item (
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