import { ComponentProps, ReactNode } from "react";
import clsx from "clsx";
import styles from "./section.module.css";

export const Section = ({
  children,
  className,
  ...rest
}: ComponentProps<"div">) => {
  return (
    <div className={clsx(styles.section, className)} {...rest}>
      {children}
    </div>
  );
};

interface SectionTitleProps {
  sub?: ReactNode;
  main: ReactNode;
}

export const SectionTitle = ({ sub, main }: SectionTitleProps) => {
  return (
    <div className={styles.sectionTitle}>
      {sub && <span className={styles.sectionTitle__sub}>{sub}</span>}
      <h2 className={styles.sectionTitle__main}>{main}</h2>
    </div>
  );
};

interface SectionContentProps {
  children: ReactNode;
}

export const SectionContent = ({ children }: SectionContentProps) => {
  return <div className={styles.sectionContent}>{children}</div>;
};
