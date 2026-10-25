"use client";

// https://github.com/ics-creative/260731_ui_menu_safe_triangle/blob/main/01_basic.html

import { useRef, useEffect, useState } from "react";
import type { MouseEvent } from "react";
import styles from "./styles1.module.css";

type ActionItem = {
  name: string;
  subMenus: string[];
};

const actionItems: ActionItem[] = [
  {
    name: "Share",
    subMenus: ["Copy link", "Send by email", "Manage access"],
  },
  {
    name: "Invite",
    subMenus: [
      "Add reviewer",
      "Copy invite",
      "View guests",
      "Set permissions",
      "Revoke invite",
    ],
  },
  {
    name: "Move",
    subMenus: [
      "Move to next",
      "Send to backlog",
      "Move to project",
      "Duplicate task",
      "Change status",
      "Archive task",
      "Delete task",
    ],
  },
];

type ActionLiProps = {
  actionItem: ActionItem;
};

// 始点を三角形の内側へ含めるための重なり幅。
const TRIANGLE_OVERLAP = 4;

const ActionLi = ({ actionItem }: ActionLiProps) => {
  const actionItemRef = useRef<HTMLLIElement>(null);
  const subMenuRef = useRef<HTMLUListElement>(null);
  const [subMenuRect, setSubMenuRect] = useState<DOMRect>();

  useEffect(() => {
    const menuRect = subMenuRef.current?.getBoundingClientRect();
    setSubMenuRect(menuRect);
  }, [subMenuRef]);

  const handleMouseMove = (e: MouseEvent) => {
    // TODO: 三角形の上だとmousemoveが有効にならない。修正が必要

    if (!actionItemRef.current || !subMenuRect) return;

    // 三角形の頂点がメニューの高さからはみ出さないように収める。
    const safeY = Math.min(
      Math.max(e.clientY - subMenuRect.top, 0),
      subMenuRect.height,
    );
    const safeLeft = e.clientX - TRIANGLE_OVERLAP;

    // 始点を少し重ね、ポインターが三角形の境界から抜けるのを防ぐ。
    actionItemRef.current.style.setProperty(
      "--safe-top",
      `${subMenuRect.top}px`,
    );
    actionItemRef.current.style.setProperty("--safe-left", `${safeLeft}px`);
    actionItemRef.current.style.setProperty(
      "--safe-width",
      `${Math.max(subMenuRect.left - safeLeft, 0)}px`,
    );
    actionItemRef.current.style.setProperty(
      "--safe-height",
      `${subMenuRect.height}px`,
    );
    actionItemRef.current.style.setProperty("--safe-y", `${safeY}px`);
  };

  return (
    <li key={actionItem.name} ref={actionItemRef} className={styles.actionItem}>
      <button className={styles.actionTrigger} onMouseMove={handleMouseMove}>
        {actionItem.name}
      </button>
      <ul ref={subMenuRef} className={styles.submenu}>
        {actionItem.subMenus.map((subMenu) => (
          <li key={subMenu}>
            <button>{subMenu}</button>
          </li>
        ))}
      </ul>
    </li>
  );
};

export const Parts = () => {
  return (
    <div>
      <ul className={styles.actionList}>
        {actionItems.map((actionItem) => (
          <ActionLi key={actionItem.name} actionItem={actionItem} />
        ))}
      </ul>
    </div>
  );
};
