import { ERROR_MESSAGE } from "../../constants/message.js";

// 구입 금액 예외 처리
const PriceValidate = (price) => {
  PriceCheck.checkNumber(price);
  PriceCheck.checkUnit(price);
};

const PriceCheck = {
  // 숫자가 아닌 경우
  checkNumber(price) {
    if (isNaN(price)) {
      throw new Error(ERROR_MESSAGE.notNumPrice);
    }
  },
  // 1000원 단위로 입력하지 않은 경우
  checkUnit(price) {
    if (price % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.invalidUnit);
    }
  },
};

export default PriceValidate;
