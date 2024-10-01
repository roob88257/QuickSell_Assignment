import React from "react";
import styles from "./section.module.css";
import { HiOutlineDotsHorizontal, HiPlus } from "react-icons/hi";
import { Card } from "./Card";
import { Ticket } from "../types";
import { useGroupOrderStore } from "../stores/useGroupOrderStore";

interface SectionProps {
  tickets: Ticket[];
  icon: React.ReactNode;
  group: string;
}

export const Section: React.FC<SectionProps> = ({ group, icon, tickets }) => {
  const { grouping } = useGroupOrderStore();

  return (
    <div className={styles.section}>
      <div className={styles.heading}>
        <div className={styles["heading-items"]}>
          {icon}
          <div className={styles["heading-group"]}>{group}</div>
          <div>{tickets.length}</div>
        </div>
        <HiPlus size={20} className={styles["heading-icon"]} />
        <HiOutlineDotsHorizontal size={20} className={styles["heading-icon"]} />
      </div>
      {tickets.map((ticket, idx) => (
        <Card key={idx} {...ticket} grouping={grouping} />
      ))}
    </div>
  );
};
