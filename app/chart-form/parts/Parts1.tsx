"use client";

// https://chachart.net/pie
// https://bulma.io/documentation/start/overview/
// http://localhost:3000/chart-form

import { ChangeEvent, useState } from "react";

type FormValues = {
  label: string;
  point: number;
};

export const Parts = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    label: "",
    point: 0,
  });

  const handleChangeLabel = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("change label", e.target.name, e.target.value);
    setFormValues((v) => ({
      ...v,
      label: e.target.value,
    }));
  };

  const handleChangePoint = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("change point", e.target.name, e.target.value);
    setFormValues((v) => ({
      ...v,
      point: Number(e.target.value),
    }));
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <>
      <div>{JSON.stringify(formValues)}</div>
      <div className="fixed-grid has-3-cols">
        <div className="grid">
          <div className="cell">
            <input
              name="label"
              type="text"
              defaultValue={`項目1`}
              className="input"
              onChange={handleChangeLabel}
            />
          </div>
          <div className="cell">
            <input
              name="point"
              type="number"
              defaultValue="0"
              className="input"
              onChange={handleChangePoint}
            />
          </div>
          <div className="cell">
            <button className="button is-fullwidth" onClick={handleDelete}>
              削除
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
