import React from "react";
import { Ticket } from "../types";
import { PriorityIconMap } from "./GroupIcons";
import { UserAvatar } from "./UserAvatar";
import styles from "./card.module.css";

interface CardProps extends Ticket {
  grouping: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  id,
  user,
  tag,
  priority,
  grouping,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <div className={styles["card-id"]}>{id}</div>
        {grouping !== "User" && <UserAvatar user={user} />}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.tags}>
        {grouping !== "Priority" && (
          <div className={styles.tag}>{PriorityIconMap[priority]} </div>
        )}
        {tag.map((content, idx) => (
          <div key={idx} className={styles.tag}>
            <div className={styles.circle} />
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};
