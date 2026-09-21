"use client";

import { useState } from "react";

export const Parts = () => {
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = () => {
    const element = document.querySelector("#box") as HTMLDivElement;
    if (!element) return;

    const first = element.getBoundingClientRect();
    console.log("First:", first.x, first.y);

    // 要素を移動
    setIsMoved(true);

    requestAnimationFrame(() => {
      // Last
      const last = element.getBoundingClientRect();

      console.log("Last:", last.x, last.y);

      // FirstとLastの差分
      const deltaX = first.x - last.x;
      const deltaY = first.y - last.y;

      console.log("deltaX:", deltaX);
      console.log("deltaY:", deltaY);

      // Invert
      // element.style.transform = `
      //   translate(${deltaX}px, ${deltaY}px)
      // `;
      element.animate(
        [
          {
            translate: `${deltaX}px ${deltaY}px`,
          },
          {
            translate: "0 0",
          },
        ],
        {
          duration: 400,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
      );
    });
  };

  return (
    <div>
      {isMoved && (
        <div
          id="box"
          style={{
            width: 100,
            height: 100,
            background: "transparent",
          }}
        />
      )}

      <div
        id="box"
        style={{
          width: 100,
          height: 100,
          background: "orange",
        }}
      />

      <button onClick={handleClick}>位置を取得</button>
    </div>
  );
};
