"use client";

// https://chachart.net/pie
// https://bulma.io/documentation/start/overview/
// http://localhost:3000/chart-form

import { ChangeEvent, useState } from "react";
import clsx from "clsx";

export type FormValues = {
  label: string;
  point: number;
  color: string;
};

const defaultValues: FormValues = {
  label: "項目名",
  point: 0,
  color: "#888",
};

interface Props {
  onChangeValues: (values: FormValues) => void;
  onDelete: () => void;
  canMoveUp: boolean;
  moveUp: () => void;
  canMoveDown: boolean;
  moveDown: () => void;
}

export const Parts = ({
  onChangeValues,
  onDelete,
  canMoveUp,
  moveUp,
  canMoveDown,
  moveDown,
}: Props) => {
  const [formValues, setFormValues] = useState<FormValues>(defaultValues);

  const handleMoveUp = () => {
    if (canMoveUp) {
      moveUp();
    }
  };

  const handleMoveDown = () => {
    if (canMoveDown) {
      moveDown();
    }
  };

  const handleChangeLabel = (e: ChangeEvent<HTMLInputElement>) => {
    const newValues: FormValues = {
      ...formValues,
      label: e.target.value,
    };
    setFormValues(newValues);
    onChangeValues(newValues);
  };

  const handleChangePoint = (e: ChangeEvent<HTMLInputElement>) => {
    const newValues: FormValues = {
      ...formValues,
      point: Number(e.target.value),
    };
    setFormValues(newValues);
    onChangeValues(newValues);
  };

  const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    const newValues: FormValues = {
      ...formValues,
      color: e.target.value,
    };
    setFormValues(newValues);
    onChangeValues(newValues);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="fixed-grid has-5-cols">
      <div className="grid">
        <div className="cell">
          <div className="fixed-grid has-2-cols">
            <div className="grid">
              <div className="cell">
                <button
                  className="button is-fullwidth is-small"
                  onClick={handleMoveUp}
                  disabled={!canMoveUp}
                >
                  ↑
                </button>
              </div>
              <div className="cell">
                <button
                  className="button is-fullwidth is-small"
                  onClick={handleMoveDown}
                  disabled={!canMoveDown}
                >
                  ↓
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cell">
          <input
            name="label"
            type="text"
            defaultValue={defaultValues.label}
            className="input"
            onChange={handleChangeLabel}
          />
        </div>
        <div className="cell">
          <input
            name="point"
            type="number"
            defaultValue={defaultValues.point}
            className="input"
            onChange={handleChangePoint}
          />
        </div>
        <div className="cell">
          <input
            name="color"
            type="color"
            defaultValue={defaultValues.color}
            className="input"
            onChange={handleChangeColor}
          />
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
