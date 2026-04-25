import { setHours, setMinutes, addDays, differenceInMinutes } from "date-fns";

const regularMinutes = (workMinutes: number) => Math.min(workMinutes, 8 * 60);
const overtimeMinutes = (workMinutes: number) =>
  Math.max(workMinutes - 8 * 60, 0);

const getOverlapMinutes = (
  startA: Date,
  endA: Date,
  startB: Date,
  endB: Date,
): number => {
  const start = startA > startB ? startA : startB;
  const end = endA < endB ? endA : endB;

  if (end <= start) return 0;

  return differenceInMinutes(end, start);
};

const calculateNightMinutes = (start: Date, end: Date): number => {
  let total = 0;
  let current = new Date(start);
  while (current < end) {
    const nightStart = setMinutes(setHours(current, 22), 0);
    const nightEnd = addDays(setMinutes(setHours(current, 5), 0), 1);
    total += getOverlapMinutes(start, end, nightStart, nightEnd);
    current = addDays(current, 1);
  }
  return total;
};
