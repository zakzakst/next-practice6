"use client";

// https://chachart.net/pie
// https://bulma.io/documentation/start/overview/
// http://localhost:3000/chart-form

export const Parts = () => {
  return (
    <div>
      <input type="text" defaultValue={`項目1`} className="input" />
      <input type="number" defaultValue="0" />
      <button>削除</button>
    </div>
  );
};
