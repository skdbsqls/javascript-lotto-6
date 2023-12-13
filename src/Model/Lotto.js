import LottoValidate from "../utils/validation/LottoValidate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  // 로또 번호 예외 처리
  #validate(numbers) {
    LottoValidate.WinNumValidate(numbers);
  }

  // TODO: 추가 기능 구현
  // 로또 구하기
  getLotto() {
    return this.#numbers.split(",").map((num) => Number(num));
  }

  // 로또 번호 구하기
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
