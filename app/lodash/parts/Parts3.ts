import uniq from "lodash/uniq";
import groupBy from "lodash/groupBy";

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
