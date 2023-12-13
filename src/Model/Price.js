import PriceValidate from "../utils/validation/PriceValidate.js";

class Price {
  #price;

  constructor(input) {
    this.#validate(input);
    this.#price = Number(input);
  }

  #validate(input) {
    PriceValidate(input);
  }

  getPrice() {
    return Number(this.#price);
  }
}

export default Price;
