import { ERROR_MESSAGE } from "../../constants/message.js";

// 로또 예외 처리
const LottoValidate = {
  // 당첨 번호 예외 처리
  WinNumValidate(winNum) {
    // 쉼표로 구분하지 않은 경우
    LottoCheck.checkSeparate(winNum);

    // 구분한 경우
    const winNumArr = MakeArray(winNum);

    LottoCheck.checkNumber(winNumArr);
    LottoCheck.checkRange(winNumArr);
    LottoCheck.checkLengthWin(winNumArr);
    LottoCheck.checkDuplicate(winNumArr);
  },

  // 보너스 번호 예외 처리
  BonusNumValidate(winNumArr, bonusNum) {
    const bonusNumArr = [bonusNum];

    LottoCheck.checkNumber(bonusNumArr);
    LottoCheck.checkRange(bonusNumArr);

    if (winNumArr.includes(bonusNum)) {
      throw new Error(ERROR_MESSAGE.duplicateBonus);
    }
  },
};

// 배열로 만들기
const MakeArray = (nums) => {
  return nums
    .split(",")
    .map((num) => num.trim())
    .sort((a, b) => a - b);
};

const LottoCheck = {
  // 쉼표로 구분하지 않은 경우
  checkSeparate(nums) {
    if (!nums.includes(",")) {
      throw new Error(ERROR_MESSAGE.notSeparate);
    }
  },
  // 숫자가 아닌 경우
  checkNumber(nums) {
    nums.forEach((num) => {
      if (isNaN(num)) {
        throw new Error(ERROR_MESSAGE.notNumLotto);
      }
    });
  },
  // 1~45까지 숫자가 아닌 경우
  checkRange(nums) {
    nums.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error(ERROR_MESSAGE.invalidRange);
      }
    });
  },
  // 6개가 아닌 경우
  checkLengthWin(nums) {
    if (nums.length !== 6) {
      throw new Error(ERROR_MESSAGE.invalidLength);
    }
  },
  // 중복되는 경우
  checkDuplicate(nums) {
    const set = [...new Set(nums)];

    if (nums.length !== set.length) {
      throw new Error(ERROR_MESSAGE.duplicateWin);
    }
  },
};

export default LottoValidate;
