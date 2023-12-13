import PriceValidate from "../utils/validation/PriceValidate.js";

class Price {
  #price;

  constructor(input) {
    this.#validate(input);
    this.#price = Number(input);
  }

  // 구입 금액 예외 처리
  #validate(input) {
    PriceValidate(input);
  }

  // 구입 금액 구하기
  getPrice() {
    return Number(this.#price);
  }
}

export default Price;
