"use client";

export const Parts = () => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  return (
    <div>
      <div
        draggable
        onDragStart={handleDragStart}
        style={{
          width: 200,
          padding: 20,
          background: "lightblue",
          cursor: "grab",
        }}
      >
        Drag Me
      </div>
    </div>
  );
};
