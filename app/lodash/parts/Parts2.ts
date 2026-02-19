import isEmpty from "lodash/isEmpty";
import cloneDeep from "lodash/cloneDeep";
import has from "lodash/has";
import get from "lodash/get";

/**
 * isEmpty
 */
console.log(isEmpty([]));
console.log(isEmpty({}));
console.log(isEmpty(""));
console.log(isEmpty(null));
console.log(isEmpty(undefined));

// 利用例
// if (isEmpty(apiResponse.items)) {
//   return <EmptyState />;
// }

/**
 * cloneDeep
 */
const data = {
  user: {
    info: {
      name: "Yamada",
    },
  },
};

const copy = cloneDeep(data);
copy.user.info.name = "Sato";

console.log(data, copy);

// 利用例
// const newState = cloneDeep(state);
// newState.user.name = "New";
// setState(newState);

/**
 * has
 */
console.log(has(data, "user.info"));
console.log(has(data, "user.profile"));

/**
 * 練習
 */
const user = {
  profile: {
    hobbies: [],
  },
};

const hobbies = get(user, "profile.hobbies");

// if (has(user, "profile.hobbies") && isEmpty(user.profile.hobbies)) {
//   console.log("趣味は未登録です");
// }

if (has(user, "profile.hobbies") && isEmpty(hobbies)) {
  console.log("趣味は未登録です");
}
