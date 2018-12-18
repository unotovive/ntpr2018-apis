/**
 * Hist Entity
 */
class HistEntity {
  /**
   * コンストラクタ
   * 
   * @param id ID
   * @param jan 商品JAN
   * @param uid ユーザーID
   * @param date 日付
   */
  constructor(id, jan, uid, date) {
    this.id   = id;
    this.jan   = jan;
    this.uid   = uid;
    this.date  = date;
  }
}

module.exports = HistEntity;
