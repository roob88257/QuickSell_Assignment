import React from "react";
import { useGroupOrderStore } from "../stores/useGroupOrderStore";
import { useTicketsStore } from "../stores/useTicketsStore";
import { groupAndOrder } from "../utlis/group-and-order";
import { Section } from "./Section";
import styles from "./board.module.css";

interface BoardsProps extends React.PropsWithChildren {}

export const Board: React.FC<BoardsProps> = () => {
  const { tickets } = useTicketsStore();
  const { grouping, ordering } = useGroupOrderStore();

  const ticketsGroups = groupAndOrder(tickets, grouping, ordering);

  return (
    <div className={styles.board}>
      {ticketsGroups.map((ticketGroup, idx) => (
        <Section key={idx} {...ticketGroup} />
      ))}
    </div>
  );
};
