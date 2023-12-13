import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";
import InputValidate from "../utils/validation/InputValidate.js";

const InputView = {
  // 구입 금액 입력
  async readPrice() {
    const price = await Console.readLineAsync(INPUT_MESSAGE.price);
    return String(price);
  },
  // 당첨 번호 입력
  async readWinNum() {
    const winNum = await Console.readLineAsync(INPUT_MESSAGE.winNum);
    return String(winNum);
  },
  async readBonusNum() {
    const bonusNum = await Console.readLineAsync(INPUT_MESSAGE.bonusNum);
    return String(bonusNum);
  },
};

export default InputView;
