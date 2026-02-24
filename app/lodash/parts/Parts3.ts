import uniq from "lodash/uniq";

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqNumbers = uniq(numbers);
console.log(uniqNumbers);
