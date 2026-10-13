"use client";

import { useEffect } from "react";
import styles from "./styles3.module.css";

export const Parts = () => {
  useEffect(() => {

  const buttons = document.querySelectorAll(".book");
  let selectedBook = document.querySelector(".book.is-selected");
  // 今ポインターが指している本
  let currentAnchorTarget = selectedBook;

  // 🌟ポインターの参照先（アンカー）だけを切り替える関数
  const updateAnchor = (target) => {
    currentAnchorTarget.style.anchorName = "";
    currentAnchorTarget = target;
    currentAnchorTarget.style.anchorName = "--selected-book";
  };

  // 初期状態：選択中の本を指す
  if (selectedBook) {
    updateAnchor(selectedBook);
  }

  buttons.forEach((button) => {
    // クリック → 「選択中の本」を更新
    button.addEventListener("click", () => {
      if (selectedBook) {
        selectedBook.classList.remove("is-selected");
      }
      selectedBook = button;
      selectedBook.classList.add("is-selected");
      updateAnchor(selectedBook);
    });

    // ホバー・フォーカス開始 → 一時的にこの本を指す
    const handleInteractionStart = () => {
      if (button !== currentAnchorTarget) {
        updateAnchor(button);
      }
    };

    // ホバー・フォーカス終了 → また「選択中の本」を指す
    const handleInteractionEnd = () => {
      if (selectedBook) {
        updateAnchor(selectedBook);
      }
    };

    button.addEventListener("mouseenter", handleInteractionStart);
    button.addEventListener("focus", handleInteractionStart);
    button.addEventListener("mouseleave", handleInteractionEnd);
    button.addEventListener("blur", handleInteractionEnd);
  }, []);

  return (
    <div className="wrapper">
      <div className="book-list">
        <button className="book isSelected">
          <span className="bookLabel">かんたん片付けBOOK</span>
          <span className="bookLabel">山田山男</span>
        </button>
        <button className="book">
          <span className="bookLabel">おもしろい折り紙</span>
          <span className="bookLabel">折紙折太郎</span>
        </button>
        <button className="book">
          <span className="bookLabel">魚についての本</span>
          <span className="bookLabel">さかなたろう</span>
        </button>
        <button className="book">
          <span className="bookLabel">三重県の歴史</span>
          <span className="bookLabel">四日市花子</span>
        </button>
        <button className="book">
          <span className="bookLabel">エンジニアになろう</span>
          <span className="bookLabel">ICS</span>
        </button>
      </div>

      {/* 指さしポインター（アンカーだけ見て動く） */}
      <span aria-hidden="true" className="pointer"></span>
    </div>
  );
};
