import OutputView from "../View/OutputView.js";

class Stats {
  #stats;

  #profit;

  constructor(lottos, winNum, bonusNum) {
    this.#stats = { fifth: 0, fourth: 0, third: 0, second: 0, first: 0 };
    this.#profit = 0;
    this.compareLotto(lottos, winNum, bonusNum);
  }

  // 당첨 번호와 로또 번호 비교하기
  compareLotto(lottos, winNum, bonusNum) {
    lottos.forEach((lotto) => {
      const total = lotto.filter((num) => winNum.includes(num)).length;
      const bonus = lotto.includes(bonusNum).length;

      this.compileStats(total, bonus);
    });
  }

  // 당첨 통계 내기
  compileStats(total, bonus) {
    if (total === 3) {
      this.#stats.fifth += 1;
      this.#profit += 5000;
    }
    if (total === 4) {
      this.#stats.fourth += 1;
      this.#profit += 50000;
    }
    if (total === 5 && !bonus) {
      this.#stats.third += 1;
      this.#profit += 1500000;
    }
    if (total === 5 && bonus) {
      this.#stats.second += 1;
      this.#profit += 30000000;
    }
    if (total === 6 && bonus) {
      this.#stats.first += 1;
      this.#profit += 2000000000;
    }
  }

  // 당첨 내역 출력
  printStats() {
    OutputView.printStats();
    OutputView.printFifth(this.#stats.fifth);
    OutputView.printFourth(this.#stats.fourth);
    OutputView.printThird(this.#stats.third);
    OutputView.printSecond(this.#stats.second);
    OutputView.printFirst(this.#stats.first);
  }

  // 수익률 계산
  calculateRate(price) {
    const rate = (this.#profit / price) * 100;
    return rate.toFixed(1);
  }
}

export default Stats;
