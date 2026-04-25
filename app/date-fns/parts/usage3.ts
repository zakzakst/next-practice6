import { addDays, differenceInMinutes } from "date-fns";

type Work = {
  date: Date;
  clockIn: string;
  clockOut: string;
  break: string;
};

const parseTime = (baseDate: Date, time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date(baseDate);
  date.setHours(hours, minutes, 0, 0);
  return date;
};

const parseBreakToMinutes = (breakTime: string) => {
  const [h, m] = breakTime.split(":").map(Number);
  return h * 60 + m;
};

const calculateWorkHours = (work: Work) => {
  const baseDate = new Date(work.date);
  let start = parseTime(baseDate, work.clockIn);
  let end = parseTime(baseDate, work.clockOut);
  if (end <= start) {
    end = addDays(end, 1);
  }
  const totalMinutes = differenceInMinutes(end, start);
  const breakMinutes = parseBreakToMinutes(work.break);
  const workMinutes = totalMinutes - breakMinutes;
  return workMinutes / 60;
};

// データ形式改善案
type WorkRecord = {
  id: string;

  // 勤務開始・終了（ISOで統一）
  start: string; // "2026-04-01T09:00:00+09:00"
  end: string; // "2026-04-02T09:00:00+09:00"

  // 休憩
  breakMinutes: number;

  // 休憩（複数対応）
  // breaks: {
  //   start: string;
  //   end: string;
  // }[];

  // 表示用（任意）
  workDate: string; // "2026-04-01"
};
