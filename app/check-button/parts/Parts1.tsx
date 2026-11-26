// https://github.com/ics-creative/170307_micro_interaction/blob/master/docs/check.html
"use client";

import clsx from "clsx";
import styles from "./styles1.module.css";

export const Parts = () => {
  // <script>
  //   // 時間経過でアニメーションをリピートさせる
  //   setInterval(() => {
  //     const el = document.querySelector(".circle");
  //     el.classList.remove("animation");
  //     setTimeout(() => {
  //       el.classList.add("animation");
  //     }, 16);
  //   }, 4000);
  // </script>

  return (
    <div>
      <div className={clsx(styles.container, styles["content-bg-check"])}>
        <div className={clsx(styles.circle, styles.animation)}>
          <span className={styles["circle-cover-1"]} />
          <span className={styles["circle-cover-2"]} />
          <span className="circle-illust">
            {/* チェックマークのイラスト */}
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
