import get from "lodash/get";

const data1 = {
  user: {
    info: {
      name: "Yamada",
    },
  },
};

const data2 = {
  user: {
    info: {},
  },
};

const lodashResult1 = get(data1, "user.info.name", "未設定");
const lodashResult2 = get(data2, "user.info.name", "未設定");

console.log(lodashResult1, lodashResult2);
