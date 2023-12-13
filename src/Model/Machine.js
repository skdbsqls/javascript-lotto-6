import { MissionUtils } from "@woowacourse/mission-utils";

class Machine {
  #lottos;

  constructor(price) {
    this.#lottos = [];
    this.amount = price / 1000;
  }

  // 구입 수량 구하기
  getAmount() {
    return this.amount;
  }

  // 로또 발행 하기
  getLottos() {
    for (let i = 0; i < this.amount; i++) {
      const nums = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = nums.sort((a, b) => a - b); // 오름차순

      this.#lottos.push(lotto);
    }
    return this.#lottos;
  }
}

export default Machine;
