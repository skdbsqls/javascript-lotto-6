import LottoValidate from "../utils/validation/LottoValidate.js";

class Bonus {
  #bonus;

  constructor(winNum, bonus) {
    this.#validate(winNum, bonus);
    this.#bonus = Number(bonus);
    this.winNum = winNum;
  }

  // 보너스 번호 예외 처리
  #validate(winNum, bonus) {
    LottoValidate.BonusNumValidate(winNum, bonus);
  }

  // 보너스 번호 구하기
  getBonus() {
    return this.#bonus;
  }
}

export default Bonus;
