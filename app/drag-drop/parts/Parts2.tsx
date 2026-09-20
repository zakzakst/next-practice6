"use client";

export const Parts = () => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);

    event.dataTransfer.setData("target-item", "Item A");
    event.dataTransfer.setData("memo", "this is memo");

    console.log(event.dataTransfer.getData("target-item"));
    console.log(event.dataTransfer.getData("memo"));
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
