// npx tsx app/date-fns/parts/usage1.ts
import {
  format,
  addDays,
  subDays,
  isAfter,
  isBefore,
  differenceInDays,
} from "date-fns";
import { ja } from "date-fns/locale";

/**
 * 日付フォーマット
 */
const now = new Date();
const formatted = format(now, "yyyy-MM-dd HH:mm:ss");
console.log(formatted);
// 例: 2026-04-23 14:30:00

/**
 * 日付を加算・減算する
 */
const today = new Date();
const tomorrow = addDays(today, 1);
const yesterday = subDays(today, 1);
console.log(tomorrow, yesterday);

/**
 * 日付の比較
 */
const date1 = new Date("2026-01-01");
const date2 = new Date("2026-06-01");
console.log(isAfter(date2, date1));
console.log(isBefore(date1, date2));

/**
 * 差分を取る
 */
const start = new Date("2026-01-01");
const end = new Date("2026-01-10");
const diff = differenceInDays(end, start);
console.log(diff);

/**
 * 日本語対応（ロケール）
 */
// tsxで実行するとエラーになるが、'use client'で利用したら問題なく表示された。処理にwindowとか使っている？（調べてないが一旦スルー）
// const jaDate = format(new Date(), "yyyy年MM月dd日EEEE", { locale: ja });
// console.log(jaDate);
