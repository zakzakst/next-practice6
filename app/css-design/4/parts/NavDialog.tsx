"use client";

import { useRef, useEffect, useCallback } from "react";
import clsx from "clsx";
import styles from "./navDialog.module.css";
import { MenuButton } from "./MenuButton";

export const NavDialog = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openDialog = useCallback(() => {
    if (!dialogRef.current) return;
    // すでに open & data-open が付いていれば何もしない（連打防止）
    if (dialogRef.current.open && dialogRef.current.hasAttribute("data-open"))
      return;
    // showModal() でモーダルを開く（ open 属性の付与）
    dialogRef.current.showModal();
    // TODO: Lenisが読み込まれている場合はスクロールを停止
    // 次フレームで data-open を付与（CSS側でフェードインアニメーション開始）
    requestAnimationFrame(() => {
      if (!dialogRef.current) return;
      dialogRef.current.dataset.open = "1";
    });
  }, [dialogRef]);

  const closeDialog = useCallback(() => {
    if (!dialogRef.current) return;
    // すでに閉じている場合は何もしない
    if (!dialogRef.current.hasAttribute("data-open")) return;
    // data-open 属性を削除（CSS側でフェードアウトアニメーション開始）
    delete dialogRef.current.dataset.open;
    // TODO: Lenisが読み込まれている場合はスクロールを再開
    // TODO: アニメーション完了を待機（子要素も取得する場合は { subtree: true } を指定）
    // アニメーション終了後、dialog を閉じる（open属性の削除）
    dialogRef.current.close();
  }, [dialogRef]);

  useEffect(() => {
    openDialog();
  }, []);

  return (
    <dialog
      className={styles.navDialog}
      id="navDialog"
      aria-labelledby="navDialog-title"
      ref={dialogRef}
    >
      <div className={styles.navDialog__inner}>
        <div
          className={clsx(
            styles.navDialog__head,
            "css-design-container",
            "css-design-container--xl",
          )}
        >
          <div className={styles.navDialog__head__inner}>
            <MenuButton />
            {/* <button
              type="button"
              id="menu-close-btn"
              className="menu-btn menu-btn--close"
              aria-labelledby="menu-close-label"
            >
              <span id="menu-close-label" className="display-none">
                メニューを閉じる
              </span>
              <span className="menu-icon menu-icon--close" aria-hidden="true">
                <span></span>
                <span></span>
              </span>
            </button> */}
          </div>
        </div>

        <div className={clsx(styles.navDialog__body, "css-design-container")}>
          <h2 id="navDialog-title" className="visually-hidden">
            サイトメニュー
          </h2>
          <nav className={styles.siteNav}>
            <ul className={styles.siteNav__list}>
              <li className={styles.siteNav__item}>
                <a href="#about">About Us</a>
              </li>
              <li className={styles.siteNav__item}>
                <a href="#collection">Collection</a>
              </li>
              <li className={styles.siteNav__item}>
                <a href="#access">Visit Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </dialog>
  );
};
