/**
 * Item Entity
 */
class ItemEntity {
  /**
   * コンストラクタ
   * 
   * @param jan JAN
   * @param name 名
   * @param price 金額
   * @param amount 数量
   * @param img 画像パス
   */
  constructor(jan, name, price, amount, img) {
    this.jan   = jan;
    this.name = name;
    this.price  = price;
    this.amount = amount;
    this.img = img;
  }
}

module.exports = ItemEntity;
