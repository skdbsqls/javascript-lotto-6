const INPUT_MESSAGE = Object.freeze({
  price: "구입금액을 입력해 주세요.\n",
  winNum: "\n당첨 번호를 입력해 주세요.\n",
  bonusNum: "\n보너스 번호를 입력해 주세요.\n",
});

const OUTPUT_MESSAGE = Object.freeze({
  amount: "\n${n}개를 구매했습니다.",
  lotto: (nums) => `[${nums}]`,
  stats: "\n당첨 통계",
  divide: "\n---",
  fifth: (n) => `3개 일치 (5,000원) - ${n}개`,
  fourth: (n) => `4개 일치 (50,000원) - ${n}개`,
  third: (n) => `5개 일치 (1,500,000원) - ${n}개`,
  second: (n) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${n}개`,
  first: (n) => `6개 일치 (2,000,000,000원) - ${n}개`,
  rate: (n) => `총 수익률은 ${n}%입니다.`,
});

const ERROR_MESSAGE = Object.freeze({
  notNum: "[ERROR] 구입금액은 숫자로 입력해 주세요.",
  invalidPrice: "[ERROR] 구입금액은 1,000원 단위로 입력해 주세요.",
  invalidLength: "[ERROR] 당첨 번호는 6개 숫자로 입력해 주세요.",
  duplicateWin: "[ERROR] 당첨 번호는 중복되지 않는 숫자로 입력해 주세요.",
  notSeparate: "[ERROR] 당첨 번호는 쉼표(,)를 기준으로 구분하여 입력해 주세요.",
  invalidRangeWin: "[ERROR] 당첨 번호는 1에서 45까지 숫자로 입력해 주세요.",
  invalidRangeBonus: "[ERROR] 보너스 번호는 1에서 45까지 숫자로 입력해 주세요.",
  duplicateBonus:
    "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1개 숫자로 입력해 주세요.",
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
