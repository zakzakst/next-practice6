"use client";

import { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  isWithinInterval,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
} from "date-fns";

const generateCalendar = (currentMonth: Date) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);

  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days: Date[] = [];

  let day = startDate;

  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  return days;
};

export const Parts = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const [from, setFrom] = useState<Date | null>(null);
  const [to, setTo] = useState<Date | null>(null);

  const days = generateCalendar(currentMonth);

  const handleClick = (day: Date) => {
    if (!from || (from && to)) {
      setFrom(day);
      setTo(null);
    } else {
      if (day < from) {
        setTo(from);
        setFrom(day);
      } else {
        setTo(day);
      }
    }
  };

  return (
    <div>
      {/* ヘッダー */}
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
          ←
        </button>
        <span>{format(currentMonth, "yyyy-MM")}</span>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          →
        </button>
      </div>

      {/* グリッド */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
        {days.map((day) => {
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isSelected =
            from && to && isWithinInterval(day, { start: from, end: to });

          const isStart = from && isSameDay(day, from);
          const isEnd = to && isSameDay(day, to);

          return (
            <div
              key={day.toString()}
              onClick={() => handleClick(day)}
              style={{
                padding: 8,
                cursor: "pointer",
                opacity: isCurrentMonth ? 1 : 0.3,
                background:
                  isStart || isEnd
                    ? "#2563eb"
                    : isSelected
                      ? "#93c5fd"
                      : "transparent",
                // color: isStart || isEnd ? "white" : "black",
              }}
            >
              {format(day, "d")}
            </div>
          );
        })}
      </div>
    </div>
  );
};
