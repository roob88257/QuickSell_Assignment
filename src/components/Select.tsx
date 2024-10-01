import React, { useState } from "react";
import styles from "./select.module.css";
import { PiCaretDownBold } from "react-icons/pi";

interface SelectProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  options: string[];
  onChange: (x: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  children,
  className,
  options,
  onChange,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      className={[styles.select, className].join(" ")}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <div className={styles.text}>{children}</div>
      <PiCaretDownBold size={12} />
      {open && (
        <div className={styles.options}>
          {options.map((option, idx) => (
            <div
              key={idx}
              className={styles.option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </button>
  );
};
