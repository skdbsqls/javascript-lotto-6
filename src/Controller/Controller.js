import Price from "../Model/Price.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import { Console } from "@woowacourse/mission-utils";

class Controller {
  #price;

  async run() {
    await this.#executePurchase();
  }

  // 로또 구매
  async #executePurchase() {
    try {
      const input = await InputView.readPrice();
      this.#price = new Price(input).getPrice();
    } catch (error) {
      Console.print(error.message);
      return this.#executePurchase();
    }
  }
}

export default Controller;
