import uniq from "lodash/uniq";
import groupBy from "lodash/groupBy";
import orderBy from "lodash/orderBy";

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqNumbers = uniq(numbers);
console.log(uniqNumbers);

const users = [
  { name: "Taro", role: "admin" },
  { name: "Jiro", role: "user" },
  { name: "Saburo", role: "admin" },
];
const groupedUsers = groupBy(users, "role");
console.log(groupedUsers);

const employees = [
  { name: "Yamada", department: "Sales" },
  { name: "Suzuki", department: "Engineering" },
  { name: "Tanaka", department: "Sales" },
  { name: "Sato", department: "Engineering" },
];
const groupedEmployees = groupBy(employees, "department");
console.log(groupedEmployees);

/**
 * その他利用例
 */
// グループごとにUI表示
// Object.entries(groupedEmployees).map(([department, members]) => (
//   <div key={department}>
//     <h2>{department}</h2>
//     {members.map((m) => (
//       <p key={m.name}>{m.name}</p>
//     ))}
//   </div>
// ));

// 名前の文字数で分類
// groupBy(employees, (e) => e.name.length);

// 日付を月ごとに分類
// groupBy(orders, (o) => o.date.slice(0, 7));

const users2 = [
  { name: "Taro", age: 25 },
  { name: "Jiro", age: 40 },
  { name: "Saburo", age: 30 },
];
const orderedUsers = orderBy(users2, ["age"], ["desc"]);
console.log(orderedUsers);

/**
 * その他利用例
 */
// 部署 → 年齢の順で並べる
// orderBy(users, ["department", "age"], ["asc", "desc"]);

// 名前の長さで並び替え
// orderBy(users, [(u) => u.name.length], ["desc"]);

// 日付ソート（超頻出）
// orderBy(posts, [(p) => new Date(p.createdAt)], ["desc"]);
