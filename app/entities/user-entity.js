/**
 * User Entity
 */
class UserEntity {
  /**
   * コンストラクタ
   * 
   * @param uid ID
   * @param name 氏名
   * @param wallet zandaka
   */
  constructor(uid, name, wallet) {
    this.uid   = uid;
    this.name = name;
    this.wallet  = wallet;
  }
}

module.exports = UserEntity;
