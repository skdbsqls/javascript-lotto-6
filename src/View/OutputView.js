import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/message.js";

const OutputView = {
  // 구매 로또 수량 출력
  printAmount(amount) {
    Console.print(OUTPUT_MESSAGE.amount(amount));
  },
  // 발행 로또 출력
  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(OUTPUT_MESSAGE.lotto(lotto));
    });
  },
  // 당첨 통계 문구 출력
  printStats() {
    Console.print(OUTPUT_MESSAGE.stats);
    Console.print(OUTPUT_MESSAGE.divide);
  },
  // 당첨 내역 출력
  printFifth(n) {
    Console.print(OUTPUT_MESSAGE.fifth(n));
  },
  printFourth(n) {
    Console.print(OUTPUT_MESSAGE.fourth(n));
  },
  printThird(n) {
    Console.print(OUTPUT_MESSAGE.third(n));
  },
  printSecond(n) {
    Console.print(OUTPUT_MESSAGE.second(n));
  },
  printFirst(n) {
    Console.print(OUTPUT_MESSAGE.first(n));
  },
  // 수익률 출력
  printRate(n) {
    Console.print(OUTPUT_MESSAGE.rate(n));
  },
};

export default OutputView;
