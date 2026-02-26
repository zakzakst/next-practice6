import uniqBy from "lodash/uniqBy";
import pick from "lodash/pick";

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
