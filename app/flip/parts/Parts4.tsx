"use client";

import { useRef, useState } from "react";

const initialItems = ["A", "B", "C"];

export const Parts = () => {
  const [items, setItems] = useState(initialItems);

  const itemRefs = useRef(new Map<string, HTMLDivElement>());

  const handleSort = () => {
    // Firstを取得
    const firstPositions = new Map<string, DOMRect>();

    itemRefs.current.forEach((element, key) => {
      firstPositions.set(key, element.getBoundingClientRect());
    });

    console.log("First:", firstPositions);

    // 並び替え
    setItems([...items].reverse());

    // lastを取得
    requestAnimationFrame(() => {
      const lastPositions = new Map<string, DOMRect>();

      itemRefs.current.forEach((element, key) => {
        lastPositions.set(key, element.getBoundingClientRect());
      });

      console.log("Last:", lastPositions);

      // 差分を計算
      firstPositions.forEach((first, key) => {
        const last = lastPositions.get(key);

        if (!last) {
          return;
        }

        const deltaX = first.x - last.x;
        const deltaY = first.y - last.y;

        console.log(key, {
          deltaX,
          deltaY,
        });
      });
    });
  };

  return (
    <div>
      <button onClick={handleSort}>並び替え</button>

      <div>
        {items.map((item) => (
          <div
            key={item}
            ref={(element) => {
              if (element) {
                itemRefs.current.set(item, element);
              }
            }}
            style={{
              width: 200,
              padding: "20px",
              marginTop: 8,
              background: "orange",
              borderRadius: 8,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
