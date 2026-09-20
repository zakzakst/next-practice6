"use client";

export const Parts = () => {
  return (
    <div>
      <div
        draggable
        style={{
          width: 200,
          padding: 20,
          background: "lightblue",
          cursor: "grab",
        }}
      >
        Drag Me
      </div>
      <div
        style={{
          width: 200,
          padding: 20,
          background: "lightyellow",
          cursor: "grab",
        }}
      >
        Not Drag Me
      </div>
    </div>
  );
};
