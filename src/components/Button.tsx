import React from "react";
import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  ...props
}) => {
  return (
    <button className={styles.btn} {...props}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
};
