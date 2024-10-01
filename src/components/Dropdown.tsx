import React, { useEffect } from "react";

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  open,
  onClose,
  children,
  ...props
}) => {
  useEffect(() => {
    if (!open) return;

    const handleDocumentClick = () => {
      onClose();
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [open, onClose]);

  if (!open) return;

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      {...props}
    >
      {children}
    </div>
  );
};
