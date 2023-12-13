import Price from "../Model/Price.js";
import Machine from "../Model/Machine.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import { Console } from "@woowacourse/mission-utils";

class Controller {
  #price;

  async run() {
    await this.#executePurchase();
    this.#executePublish();
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

  // 로또 발행
  #executePublish() {
    const amount = new Machine(this.#price).getAmount();
    OutputView.printAmount(amount);
    const lottos = new Machine(this.#price).getLottos();
    OutputView.printLottos(lottos);
  }
}

export default Controller;
