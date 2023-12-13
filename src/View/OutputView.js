import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/message.js";

const OutputView = {
  // 구매 로또 수량 출력
  printAmount() {
    Console.print(OUTPUT_MESSAGE.amount);
  },
  // 발행 로또 출력
  printLotto(nums) {
    Console.print(OUTPUT_MESSAGE.lotto(nums));
  },
  // 당첨 통계 문구 출력
  printStats() {
    Console.print(OUTPUT_MESSAGE.stats);
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
