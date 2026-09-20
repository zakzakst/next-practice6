"use client";

const DargMemoKey = "drag-memo";

export const Parts = () => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData(DargMemoKey, "Item A");
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const data = event.dataTransfer.getData(DargMemoKey);
    console.log(data);
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

      <div
        onDragOver={(event) => {
          event.preventDefault();
        }}
        onDrop={handleDrop}
        style={{
          width: 300,
          height: 200,
          marginTop: 30,
          border: "2px dashed gray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Drop Area
      </div>
    </div>
  );
};
