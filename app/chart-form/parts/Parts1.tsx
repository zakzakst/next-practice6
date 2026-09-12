"use client";

// https://chachart.net/pie
// https://bulma.io/documentation/start/overview/
// http://localhost:3000/chart-form

export const Parts = () => {
  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div className="fixed-grid has-3-cols">
      <div className="grid">
        <div className="cell">
          <input type="text" defaultValue={`項目1`} className="input" />
        </div>
        <div className="cell">
          <input type="number" defaultValue="0" className="input" />
        </div>
        <div className="cell">
          <button className="button is-fullwidth" onClick={handleDelete}>
            削除
          </button>
        </div>
      </div>
    </div>
  );
};
