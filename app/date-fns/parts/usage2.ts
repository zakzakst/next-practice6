import {
  startOfDay,
  endOfDay,
  startOfMonth,
  endOfMonth,
  subDays,
  isWithinInterval,
} from "date-fns";

// 今日かどうかの判定
// const today = new Date();
// const start = startOfDay(today);
// const end = endOfDay(today);
// const isToday = (date: Date) => isWithinInterval(date, { start, end });

// 今月かどうかの判定
// const now = new Date();
// const start = startOfMonth(now);
// const end = endOfMonth(now);
// const isThisMonth = (date: Date) => isWithinInterval(date, { start, end });

// 過去7日間
const now = new Date();
const start = subDays(now, 7);
const end = now;
const isLast7Days = (date: Date) => isWithinInterval(date, { start, end });

// 期間指定（from〜to）
export const filterByDateRange = (date: Date, from?: string, to?: string) => {
  if (!from && !to) return true;
  const start = from ? startOfDay(new Date(from)) : new Date("1900-01-01");
  const end = to ? endOfDay(new Date(to)) : new Date("2999-12-31");
  return isWithinInterval(date, { start, end });
};
