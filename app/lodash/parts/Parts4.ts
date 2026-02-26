import uniqBy from "lodash/uniqBy";
import pick from "lodash/pick";
import omit from "lodash/omit";
import merge from "lodash/merge";

const users = [
  { id: 1, name: "Taro" },
  { id: 2, name: "Jiro" },
  { id: 1, name: "Taro Duplicate" },
];
const uniqUsers = uniqBy(users, "id");
console.log(uniqUsers);

const user = {
  id: 1,
  name: "Yamada",
  age: 30,
  email: "test@example.com",
};
const pickedProps = pick(user, ["name", "age"]);
console.log(pickedProps);

/**
 * その他利用例
 */
// API送信データの整形
// const payload = pick(formValues, ["name", "email"]);

// レスポンスの安全化
// const safeUser = pick(apiResponse, ["id", "name"]);

// React props の制御
// const inputProps = pick(props, ["value", "onChange"]);

const user2 = {
  id: 1,
  name: "Yamada",
  password: "secret",
  email: "test@example.com",
};
const omitProps = omit(user2, ["password"]);
console.log(omitProps);

const defaultSettings = {
  theme: "light",
  options: {
    color: "red",
    fontSize: 14,
  },
};
const userSettings = {
  options: {
    fontSize: 18,
  },
};
const mergedSettings = merge(defaultSettings, userSettings);
console.log(mergedSettings);
console.log({ ...defaultSettings, ...userSettings });

// merge は「元オブジェクトを破壊する」
// 安全な書き方（必ずコピーしてから merge）
// const merged = merge({}, defaultSettings, userSettings);
// もしくは
// const merged = merge(cloneDeep(defaultSettings), userSettings);
