import Price from "../Model/Price.js";
import Lotto from "../Model/Lotto.js";
import Bonus from "../Model/Bonus.js";
import Machine from "../Model/Machine.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import { Console } from "@woowacourse/mission-utils";

class Controller {
  #price;

  #lottos;

  #winNum;

  #bonusNum;
  async run() {
    await this.#executePurchase();
    this.#executePublish();
    await this.#executeWinNum();
    await this.#executeBonusNum();
    this.#executeWinning();
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
    this.#lottos = new Machine(this.#price).getLottos();
    OutputView.printLottos(this.#lottos);
  }

  // 로또 응모 (당첨 번호)
  async #executeWinNum() {
    try {
      const input = await InputView.readWinNum();
      this.#winNum = new Lotto(input).getLotto();
      // console.log(this.#winNum, [1, 2, 3, 4, 5, 6]);
    } catch (error) {
      Console.print(error.message);
      return this.#executeWinNum();
    }
  }

  // 로또 응모 (보너스 번호)
  async #executeBonusNum() {
    try {
      const bonus = await InputView.readBonusNum();
      this.#bonusNum = new Bonus(this.#winNum, bonus).getBonus();
      // console.log(this.#bonusNum, 7);
    } catch (error) {
      Console.print(error.message);
      return this.#executeBonusNum();
    }
  }

  // 로또 당첨
  #executeWinning() {
    OutputView.printStats();
  }
}

export default Controller;
